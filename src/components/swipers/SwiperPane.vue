<template>
    <transition :name="animateName">
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
            show: false,
            animateName: ''
        }
    },
    computed: {},
    watch: {},
    components: {},
    created() {},
    mounted() {
        this.animateName = '';
        setTimeout(() => {
            this.animateName = 'slide-fade'
        }, 1500)
    },
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


</style>
<style>


</style>
