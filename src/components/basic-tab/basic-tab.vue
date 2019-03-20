<template>
    <div class='td-basic-tab'>
        <div class="td-head">
            <span class="title">{{title}}</span>
            <slot name="header"></slot>
        </div>
        <div class="td-content">
            <Tabs :value="activeName" @on-click="changeTab" ref="tabs">
                <TabPane v-for="item in tabs" :key="item.key" :label="item.value" :name="item.key"></TabPane>
            </Tabs>
            <div class="td-content-graph">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BasicTab',
    props: {
        title: {
            type: String,
            default: function() {
                return '';
            }
        },
        tabs: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            activeName: ''
        }
    },
    watch: {},
    mounted() {},
    computed: {},
    methods: {
        changeTab(x) {
            this.$emit('on-change', x)
        }
    }
}

</script>
<style>


</style>
<style>
.td-basic-tab {
    width: 100%;
    height: 100%;
    max-width: 600px;
    background: #FFFFFF;
    box-shadow: 0 1px 2px 0 rgba(23, 35, 61, 0.25);
    .td-head {
        height: 48px;
        padding: 0 16px;
        line-height: 48px;
        border-bottom: 1px solid #DCDEE2;
        .title {
            font-family: PingFangSC-Medium;
            font-size: 14px;
            color: var(--color-title);
            font-weight: bold;
        }
    }
    .ivu-tabs-bar {
        margin-bottom: 0;
        border: none;
        .ivu-tabs-nav-prev,
        .ivu-tabs-nav-next {
            display: none;
        }
        .ivu-tabs-nav {
            float: none;
            text-align: center;
            height: 60px;
            line-height: 60px;
            margin-right: -16px;
            .ivu-tabs-tab {
                height: 24px;
                padding: 0 12px;
                font-family: PingFangSC-Regular;
                font-size: 13px;
                line-height: 24px;
                text-align: center;
                margin-right: 16px;
            }
            .ivu-tabs-tab-active {
                font-size: 14px;
                color: #FFFFFF !important;
                background: #2D8CF0;
                border-radius: 100px;
                font-weight: normal;
            }
            .ivu-tabs-ink-bar {
                display: none !important;
            }
        }
    }
    .td-content {
        padding: 12px;
    }
    .td-content-graph {}
}

</style>
