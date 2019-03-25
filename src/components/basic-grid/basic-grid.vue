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
