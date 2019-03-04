<template>
    <transition name="slide-fade">
        <div class="swiper-pane" v-if="show" :ref="name">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
export default {
    mixins: [],
    name: 'SwiperPane',
    props: {
        name: {
            type: String,
            default: function() {
                return '';
            }
        }
    },
    data() {
        return {
            show: false
        }
    },
    computed: {},
    watch: {},
    components: {},
    created() {},
    mounted() {},
    activated() {},
    deactivated() {},
    methods: {
        swiperOpen() {
            this.show = true;
        },
        swiperClose() {
            this.show = false;
        }
    }
}
</script>
<style>
/**动画效果**/

.slide-fade-enter-active {
    /*flex-direction: row;*/
    /*will-change: transform;*/
    transition: transform .4s ease-in-out;
}
.slide-fade-leave-active {
    /*flex-direction: row;*/
    /*will-change: transform;*/
    transition: transform .4s ease-in-out;
}
.slide-fade-enter {
    transform: translateX(100%) translateZ(0px);
}
.slide-fade-leave-to {
    transform: translateX(100%) translateZ(0px);
    /*opacity: 0;*/
}

.slide1-fade-enter-active {
    flex-direction: row;
    will-change: transform;
    transition: transform .4s ease-in-out;
}
.slide1-fade-leave-active {
    flex-direction: row;
    will-change: transform;
    transition: transform .4s ease-in-out;
}
.slide1-fade-enter {
    transform: translateX(-100%) translateZ(0px);
}
.slide1-fade-leave-to {
    transform: translateX(-100%) translateZ(0px);
}
.swiper-pane{
    height: 100%
}
.swiper-pane {
    top: 0;
    left: 0;
    width: 100%;
    position: absolute;
    display: block;
    border: 0;
    background: #fff;
}
</style>
<style>
</style>