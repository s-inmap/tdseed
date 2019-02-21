<template>
    <div class='ex-select-group'>
        <div v-if="visible">
            <Button type="primary" class="add" style="width:134px" @click="addCondition">
                <Icon type="plus-round"></Icon>添加筛选条件
            </Button>
        </div>
        <select-group ref="selectGroup" :data="conditionData" :count='count' :filters="filters" @on-minus="onMinus"></select-group>
        <Button type="primary" class="submit" :class="{disabled:this.count.length===0}" @click="submit">开始筛选</Button>
        <a href="javascript:void(0)" v-if='this.count.length !== 0' class="clear" @click="clearConditions">清空条件</a>
    </div>
</template>
<script>
import utils from '@/lib/utils';
import classification from '../data/classification';
export default {
    data() {
        return {
            visible: true,
            conditionData: {},
            count: [],
            filters: {
                groupRelation: 'and',
                conditionGroups: []
            },
        }
    },
    mounted() {

    },
    methods: {
        addCondition() {
            this.conditionData = Object.assign({}, {
                custom: [{
                    'key': '距离',
                }],
                installation: classification
            });
            this.visible = false;
            this.$refs['selectGroup'].addGroup();
        },
        onMinus(x) {
            console.log(x)
            if (x) {
                this.visible = true;
            }
        },
        submit() {
            let obj = this.$refs['selectGroup'].validate();
            console.log(obj)
        },
        clearConditions() {
            this.visible = true;
            this.recValue = '';
            this.$refs['selectGroup'].clear();
            this.$emit('on-clear');
        },
    }
}

</script>
<style scoped>


</style>
<style>
.ex-select-group {
    width: 672px;
}

</style>
