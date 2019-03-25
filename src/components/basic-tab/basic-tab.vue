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
