<template>
    <div class="td-swipers" :class="titleName">
        <div class="swipers-box">
            <div class="swiper-main">
                <div class="swiper-nav">
                    <slot name="nav"></slot>
                </div>
                <div class="swiper-content" ref="panes">
                    <template>
                        <Spin size="large" fix v-show="spinShow"></Spin>
                    </template>
                    <slot ref="page"></slot>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    mixins: [],
    name: 'Swipers',
    props: {
        loading: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    data() {
        return {
            nodeArray: [],
            titleName: '',
            spinShow: false
        }
    },
    computed: {},
    watch: {
        loading(val, oldVal) {
            if (val) {
                this.spinShow = true;
            } else {
                this.spinShow = false;
            }
        }
    },
    components: {},
    created() {},
    mounted() {
        this.transitionDefault();
    },
    activated() {},
    deactivated() {},
    methods: {
        transitionDefault() {
            let slot = this.$slots.default;
            let array = slot.filter(item => {
                if (item.tag !== undefined) {
                    return item;
                }
            });
            this.nodeArray = array;
            let instance = array[0].componentInstance;
            this.titleName = instance.name;
            instance.swiperOpen();
            return array;
        },
        open(name) {
            this.titleName = name;

            this.nodeArray.map(item => {
                item.componentInstance.swiperClose();
                if (item.componentInstance.name === name) {
                    item.componentInstance.swiperOpen();
                }
            })
        }
    }
}

</script>
<style>


</style>
<style>


</style>
