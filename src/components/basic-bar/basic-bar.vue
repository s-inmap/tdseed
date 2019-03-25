<template>
    <div class='td-basic-bar' :class='size==="mini" ? "td-mini-bar" : ""'>
        <div class="percent" :style='"width: "+value+"%"'></div>
    </div>
</template>
<script>
export default {
    name: 'BasicBar',
    props: {
        value: {
            type: Number,
            default: function() {
                return 0;
            }
        },
        size: {
            type: String,
            default: function() {
                return '';
            }
        }
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
