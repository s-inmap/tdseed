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
            banner: []
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


</style>
