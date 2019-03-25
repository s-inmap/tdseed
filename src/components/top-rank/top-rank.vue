<template>
    <div class='td-top-rank'>
        <div class="main">
            <Spin size="large" fix v-show="loading"></Spin>
            <div class="td-column">
                <div v-for="(item,index) in data" class="rank">
                    <div class="left">
                        <div class="number">{{index + 1}}</div>
                        <div>{{item.key}}</div>
                    </div>
                    <div class="right">
                        <span class="td-column-value">{{item.value}}%</span>
                        <div class="td-column-bar">
                            <basic-bar :value="item.value"></basic-bar>
                        </div>
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


</style>
