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
<style>
.td-basic-bar {
    position: relative;
    width: 100%;
    color: rgba(255, 255, 255, .2);
    height: 8px;
    background: rgba(23, 35, 61, 0.10);
    border-radius: 0;
    .percent {
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        background: #2D8CF0;
        height: 8px;
        border-radius: 0;
    }
}
.td-mini-bar {
    height: 4px;
    .percent {
        height: 4px;
    }
}

</style>
