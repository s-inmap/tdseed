<template>
    <div class='ex-basic-tab'>
        <basic-tab title="购物偏好" :tabs="tabs" @on-change="tabChange">
            <Tooltip placement="right" slot='header'>
                <div slot="content">
                    <p>根据用户统计时间段内购物、关注、浏览情况等因素，计算出用户得分最高的品类。</p>
                </div>
                <Icon type="ios-help-outline" class="helpIcon"></Icon>
            </Tooltip>
            <div>内容</div>
        </basic-tab>
    </div>
</template>
<script>
export default {
    data() {
        return {
            tabs: [{ key: 'preferences', value: '品类偏好' }, { key: 'oneStage', value: '90天一级品类得分' }, { key: 'twoStage', value: '90天二级品类得分' }]
        }
    },
    created() {},
    mounted() {

    },
    methods: {
        tabChange(x) {
            if (x === 'preferences') {
                console.log('品类偏好')
            }
            if (x === 'oneStage') {
                console.log('90天一级品类得分')
            }
            if (x === 'twoStage') {
                console.log('90天二级品类得分')
            }
        }
    }
}

</script>
<style scoped>


</style>
<style>
.ex-basic-tab {
    width: 440px;
}

</style>
