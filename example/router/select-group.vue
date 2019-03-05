<template>
    <div class='ex-select-group'>
        <div v-if="visible">
            <Button type="primary" class="add" style="width:134px" @click="addCondition">
                <Icon type="plus-round"></Icon>添加筛选条件
            </Button>
        </div>
        <select-group ref="selectGroup" :data="conditionData" @on-minus="onMinus"></select-group>
        <Button type="primary" class="submit" :class="{disabled:visible}" @click="submit">开始筛选</Button>
        <a href="javascript:void(0)" v-if='!visible' class="clear" @click="clearConditions">清空条件</a>
    </div>
</template>
<script>
import utils from '@/lib/utils';
import classification from '../data/classification';
export default {
    data() {
        return {
            visible: true,
            conditionData: {}
        }
    },
    mounted() {
        this.mergeObject()
    },
    methods: {
        async mergeObject() {
            try {
                let res = await this.getRecommendListPromise();

                let data = res.data.data || [];

                data.unshift({
                    'key': '距离',
                });
                let res1 = await this.getClassification();
                let data1 = res1.data.data || [];

                this.conditionData = Object.assign({}, {
                    custom: data,
                    installation: data1
                });
                console.log('1',this.conditionData)
            } catch (e) {
                // statements
                console.log(e);
            }

        },
        getClassification() {
            //获取poi分类
            let origin = location.origin;
            let url = origin + '/static/classification.json';

            let config = {
                method: 'get',
                url: url
            }

            return this.$axios(config);
        },
        async addCondition() {
            let res = await this.getRecommendListPromise();
            let list = res.data.data || [];
            this.recList = list;
            this.$refs['selectGroup'].addGroup();
            this.visible = false;
            this.$emit('on-condition');
        },
        getRecommendListPromise() {
            //获取某用户的推荐任务列表
            let origin = location.origin;
            let url = origin + '/static/tasklist.json';

            let config = {
                method: 'get',
                url: url
            }
            return this.$axios(config);
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
