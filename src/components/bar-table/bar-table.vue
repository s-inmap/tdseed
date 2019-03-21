<template>
    <div class='td-bar-table'>
        <div class="main">
            <Spin size="large" fix v-show="loading"></Spin>
            <div class="column">
                <div class="chart" v-show="!loading&&noDataMessage===''">
                    <span class="title">{{banner[0]}}</span>
                    <div v-for="(item,index) in data" class="col" :class='"col-"+(index+1)'>
                        <span :title="item.key">{{item.key}}</span>
                        <div class="bar">
                            <div class="progress" :style="{width:item.value+'%',background:BGColors[index]}">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="info" v-show="!loading&&noDataMessage===''">
                    <div v-for="(item,index) in data" class="item">
                        <div class="col-1">
                            <span class="title" v-if='index === 0'>{{banner[1]}}</span>
                            <span class="value">{{item.value||0}}%</span>
                        </div>
                        <div class="col-2">
                            <span class="title" v-if='index === 0'>{{banner[2]}}</span>
                            <span class="value">{{item.city||0}}%</span>
                        </div>
                        <div class="col-3">
                            <span class="title" v-if='index === 0'>{{banner[3]}}</span>
                            <span class="value">{{item.cityTGI||0}}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="nodata" v-show="!loading&&noDataMessage!==''">{{noDataMessage}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BarTable',
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
        },
        title: {
            type: String,
            default: function() {
                return '';
            }
        },
        colors: {
            type: Array,
            default: function() {
                return [];
            }
        }
    },
    data() {
        return {
            noDataMessage: '',
            BGColors: [],
            banner:[]
        }
    },
    watch: {
        data(val, oldVal) {
            if (val.length > 0) {
                this.noDataMessage = '';
            } else {
                this.noDataMessage = '暂无数据';
            }
        },
        colors(val) {
            this.BGColors = val;
        }
    },
    mounted() {
        if (this.colors.length === 0) {
            this.BGColors = ['#870E4F', '#E65002', '#F9A825', '#FFD602', '#807718', '#548B2F', '#0A7138', '#006064', '#02569B', '#1B237E'];
        } else {
            this.BGColors = this.colors;
        }
        this.banner = this.title.split('|');
    },
    computed: {},
    methods: {}
}

</script>
<style>
.td-bar-table {
    width: 100%;
    max-width: 600px;
    min-width: 280px;
    .main {
        position: relative;
        height: calc(100% - 22px - 24px);
        min-height: 140px;
        /*22= __head line-height:22+margin-top:24*/
        letter-spacing: -4px;
        .column {
            display: flex;
            justify-content: space-between;
            .chart {
                display: inline-block;
                width: 218px;
                vertical-align: top;
                letter-spacing: normal;
                .title {
                    display: block;
                    padding-bottom: 23px;
                    font-family: PingFangSC-Regular;
                    font-size: 12px;
                    color: rgba(23, 35, 61, 0.75);
                }
                .col {
                    padding-bottom: 8px;
                    span {
                        line-height: 22px;
                        font-family: PingFangSC-Regular;
                        font-size: 13px;
                        color: #17233D;
                        letter-spacing: 0;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        display: inline-block;
                        width: 218px;
                    }
                    .bar {
                        width: 196px;
                        .progress {
                            height: 4px;
                            margin-top: 4px;
                            border-radius: 2px;
                        }
                    }
                }
            }
            .info {
                /*width: 183px;*/
                height: 100%;

                .col-1,
                .col-2,
                .col-3 {
                    display: inline-block;
                    width: auto;
                    height: 100%;
                    vertical-align: top;
                    letter-spacing: normal;
                    line-height: 16px;
                    border-right: 1px solid rgba(23, 35, 61, .10);
                    .title {
                        display: block;
                        padding-bottom: 27px;
                        font-family: PingFangSC-Regular;
                        font-size: 12px;
                        color: var(--color-detail);
                    }
                    .value {
                        display: block;
                        padding: 0 0 25px 0px;
                        font-family: HelveticaNeue;
                        font-size: 13px;
                        color: var(--color-detail);
                    }
                }
                .item:last-child {
                    span {
                        padding: 0;
                    }
                }
                .col-1 {
                    width: 64px;
                }
                .col-2 {
                    width: 74px;
                    padding-left: 16px;
                }
                .col-3 {
                    width: calc(100% - 65px - 75px);
                    padding-left: 16px;
                    border: 0;
                    span {
                        border-right: none;
                    }
                }
            }
        }
        .nodata {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
            text-align: center;
            letter-spacing: normal;
            font-size: 13px;
        }
    }
}

</style>
