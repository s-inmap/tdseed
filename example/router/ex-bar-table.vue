<template>
    <div class='ex-bar-table'>
        <bar-table title="学历|当前区域|全国|TGI" :data="purchasePower" :loading="loading" :colors="color"></bar-table>
        <button @click="but">asdf</button>
        <div v-if="show">
            <Tabs value="name1">
                <TabPane label="标签一" name="name1">标签一的内容</TabPane>
                <TabPane label="标签二" name="name2">标签二的内容</TabPane>
                <TabPane label="标签三" name="name3">标签三的内容</TabPane>
            </Tabs>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            show: false,
            color: ['#34508C', '#2B85E4', '#1CB6FB', '#1BDBF5', '#80F2DA', '#C1F9D6'],
            loading: false,
            purchasePower: [{
                    "key": "土豪",
                    "value": 3.94
                },
                {
                    "key": "高级白领",
                    "value": 66.97
                },
                {
                    "key": "小白领",
                    "value": 27.04
                },
                {
                    "key": "蓝领",
                    "value": 2.01
                },
                {
                    "key": "收入很少",
                    "value": 0.04
                },
                {
                    "key": "未知",
                    "value": 0
                }
            ]
        }
    },
    created() {},
    mounted() {

    },
    methods: {
        but(){
            this.show = true;
        }
    }
}

</script>
<style scoped>


</style>
<style>
.ex-bar-table {
    width: 400px;
    /*.td-bar-table .main .column .info {
        .col-1 {
            border: 0;
        }
        .col-2,
        .col-3 {
            display: none;
        }
    }*/
}

</style>
