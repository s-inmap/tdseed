<template>
    <div class='td-basic-grid'>
        <div class="td-head">
            <span class="title">{{title}}</span>
            <slot name="header"></slot>
        </div>
        <div class="td-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BasicGrid',
    props: {
        title: {
            type: String,
            default: function() {
                return '';
            }
        },
    },
    data() {
        return {}
    },
    watch: {},
    mounted() {},
    computed: {},
    methods: {}
}

</script>
<style>


</style>
<style>
.td-basic-grid {
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
    .td-content {
        padding: 12px;
    }
}

</style>
