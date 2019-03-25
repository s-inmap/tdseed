<template>
    <div class="td-selectgroup">
        <div class="group" v-for="(item,index) in count" :key="item.id" :class="{super:item.list.length > 1}">
            <!-- index代表組，目前只有0，y值决定了condition数量 -->
            <single-condition v-if="item.list[0]" v-model="filters.conditionGroups[0].conditions[y]" ref="slction" v-for="(x,y) in item.list" :key="x.id" :index="[index,y]" :data="data" @on-plus="plusCondition" @on-minus="minusCondition" @on-change="changeCondition" class="and" :class="{last:y===item.list.length-1,or:isRelation === 'union'}"></single-condition>
            <template v-if="item.list[0] && item.list.length > 1">
                <div class="relation" @click="toggleRelation(index)">
                    <span class="intersection" :class="{active:isRelation==='intersection'}" ref="relation">交</span>
                    <span class="union" :class="{active:isRelation==='union'}" ref="union">并</span>
                </div>
                <span class="line-top"></span>
                <span class="line-bottom"></span>
                <span class="line-left"></span>
            </template>
        </div>
    </div>
</template>
<script>
import singleCondition from './single-condition'
import utils from '@/lib/utils';

export default {
    mixins: [],
    name: 'select-group',
    props: {
        data: {
            type: Object,
            default: function() {
                return {};
            }
        },
        value: {
            type: Object,
            default: function() {
                return {};
            }
        }
    },
    data() {
        return {
            /*
             * 负责展示
             * count:[[{
                 id:Number,
                 list:Array
             },{}],[{}],[{}]]
             *数组中每项代表条件组[{}]，每个条件组下可以再分条件项对象,每个对象有id属性表示随机数，list属性表示条件项
             */
            count: [],
            /*
             * 负责导出条件数据
             * filters.conditionGroups:[{
                    relation:String,
                    conditions:Array
                },{},{}]
             *数组每项代表条件组，每个条件组对象有一个relation属性表示交集还是并集,每个conditions下可以再分条件项，
             */
            filters: {
                groupRelation: 'and',
                conditionGroups: []
            },
            isRelation: 'intersection',
            newData: {}
        }
    },
    computed: {},
    watch: {
        'data': {
            handler(newVal, val) {
                this.newData = newVal;
            },
            deep: true
        },
        'value': {
            handler(newVal, val) {
                if (newVal) {
                    //增加count
                    this.addGroup();
                    let params = JSON.parse(newVal.params);

                    //匹配v-model
                    let c = this.filters['conditionGroups'][0],
                        p = params['conditionGroups'][0],
                        len = p['conditions'].length;

                    for (let i = 0; i <= len - 1; i++) {
                        this.filters['conditionGroups'][0]['conditions'].push(p.conditions[i]);
                        if (len > 1 && i !== len - 1) {
                            this.plusCount();
                        }
                    }

                    if (p.relation === 'intersection') {
                        this.isRelation = 'intersection';
                        c['relation'] = 'and';
                    }
                    if (p.relation === 'union') {
                        this.isRelation = 'union';
                        c['relation'] = 'or';
                    }
                }
            },
            deep: true
        }
    },
    components: {
        singleCondition
    },
    created() {},
    activated() {},
    deactivated() {},
    mounted() {},
    updated() {},
    methods: {
        changeCondition(obj) {
            let index = obj.index[0],
                subIndex = obj.index[1],
                c = obj.condition;

            let ojt = this.filters.conditionGroups[index];
            if (ojt['conditions'] === undefined) {
                ojt['conditions'] = [];
            }
            ojt['conditions'][subIndex] = c;
        },
        minusCondition(x) {
            let index = x[0],
                subIndex = x[1];

            //剩余最后一项,刪除掉整个组
            let c = this.count[index];
            if (c['list'].length === 1) {
                this.count.splice(index, 1);

                this.filters.conditionGroups.splice(index, 1);

                this.$emit('on-minus', true);
                return;
            }
            this.$emit('on-minus', false);
            c['list'].splice(subIndex, 1);

            let f = this.filters.conditionGroups[index];
            if (f['conditions'].length === 2) {
                //属性赋值为空
                f['relation'] = '';
            }
            if (f) {
                f['conditions'].splice(subIndex, 1);
            }
        },
        plusCondition(x) {
            let index = x[0],
                subIndex = x[1];

            let item = this.count[index].list || [];

            item.push({
                id: utils.random()
            });

            let f = this.filters.conditionGroups[index];
            f['conditions'].push({});
            if (f['conditions'].length >= 1 && f['relation'] === '') {
                f['relation'] = 'and';
            }
            this.$emit('on-plus');
        },
        plusCount() {
            let item = this.count[0].list || [];

            item.push({
                id: utils.random()
            });
        },
        toggleRelation() {
            if (this.isRelation === 'intersection') {
                this.isRelation = 'union';
                this.filters.conditionGroups[0]['relation'] = 'or';
            } else {
                this.isRelation = 'intersection';
                this.filters.conditionGroups[0]['relation'] = 'and';
            }
        },
        addGroup() {
            this.count.push({
                id: utils.random(),
                list: [{}]
            });
            this.filters.conditionGroups.push({
                relation: '',
                conditions: []
            });
        },
        clear() {
            this.count.splice(0);
            this.filters.conditionGroups.splice(0);
        },
        validate() {
            //验证方法
            let ary = [];
            this.$refs['slction'].map(item => {
                item.validate((valid) => {
                    if (valid === false) {
                        //如果未验证通过，数组里插入任意一个值
                        ary.push(0);
                    }
                });
            });
            //全部验证通过
            if (ary.length === 0) {
                return {
                    validate: true,
                    data: this.filters
                };
            }
            return {
                validate: false
            };
        }
    }
}

</script>
<style>


</style>
