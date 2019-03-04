<template>
    <div id="Swipers" class="ivu-swipers" ref="swipers">
        <div class="swipers-box">
            <div class="swiper-main">
                <div class="swiper-nav">
                    <slot name="nav"></slot>
                </div>
                <div class="swiper-content" :class="name" ref="panes">
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
            name: '',
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
            this.name = instance.name;
            instance.swiperOpen();
        },
        open(name) {
            this.name = name;
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
.ivu-swipers {
    .swipers-box {
        width: 336px;
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        font-size: 14px;
        @add-mixin shadow;
        .swiper-main {
            position: relative;
            flex-direction: row;
            will-change: transform;
            overflow: hidden;
        }
        .swiper-nav {
            height: 48px;
            line-height: 48px;
            position: relative;
            color: var(--color-title);
        }
        .swiper-content {
            background: #fff;
            position: relative;
            height: 200px;
            .ivu-spin-fix {
                background: #fff;
                opacity: 0.6;
            }
        }
    }
}

</style>
<style>


</style>
