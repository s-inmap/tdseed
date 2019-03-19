<template>
    <div class='td-top-rank'>
        <div class="main">
            <Spin size="large" fix v-show="loading"></Spin>
            <div class="column">
                <div v-for="(item,index) in data" class="rank">
                    <div class="left">
                        <div class="number">{{index + 1}}</div>
                        <div>{{item.key}}</div>
                    </div>
                    <div class="right">
                        <basic-bar :value="item.value"></basic-bar>
                    </div>
                </div>
            </div>
            <div class="nodata" v-show="!loading&&noDataMessage!==''">{{noDataMessage}}</div>
        </div>
    </div>
</template>
<script>
import BasicBar from '@/components/basic-bar'
export default {
    name: 'TopRank',
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        loading: {
            type: Boolean,
            default: function() {
                return false;
            }
        }
    },
    data() {
        return {
            noDataMessage: ''
        }
    },
    watch: {
        data(val, oldVal) {
            if (val.length > 0) {
                this.noDataMessage = '';
            } else {
                this.noDataMessage = '暂无数据';
            }
        }
    },
    mounted() {},
    computed: {},
    methods: {}
}

</script>
<style>


</style>
<style>
.td-top-rank {
    .main {
        font-size: 13px;
        color: #17233D;
        .nodata {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
            letter-spacing: normal;
            font-size: 13px;
        }
        .column {
            .rank {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 16px;
                .left {
                    display: flex;
                    align-items: center;
                    line-height: 22px;
                    .number {
                        width: 20px;
                        height: 20px;
                        line-height: 20px;
                        font-size: 13px;
                        color: rgba(23, 35, 61, 0.75);
                        text-align: center;
                        margin-right: 24px;
                    }
                }
                .right {
                    width: 140px;
                }
            }
            .rank:nth-child(1) {
                .number {
                    border-radius: 50%;
                    background: #F27036;
                    color: #fff;
                }
            }
            .rank:nth-child(2) {
                .number {
                    border-radius: 50%;
                    background: #00D2B3;
                    color: #fff;
                }
            }
            .rank:nth-child(3) {
                .number {
                    border-radius: 50%;
                    background: #2D8CF0;
                    color: #fff;
                }
            }
        }
    }
}

</style>
