<template>
    <div class="td-city" id="td-city">
        <slot name="search-city"></slot>
        <slot name="recent-city"></slot>
        <div class="select-city">
            <div class="letter-list" ref="letterList" @click="letterChange">
                <span>ABCD</span>
                <span>EFGH</span>
                <span>JKLM</span>
                <span>NOPQRS</span>
                <span>TUVWX</span>
                <span>YZ</span>
            </div>
            <div class="city-list">
                <div class="row" v-for="(item,index) in showCityArray" :key='index'>
                    <div class="city-label">{{item[0]}}</div>
                    <div class="city-label-list">
                        <div :class="['city',allowedCity.includes(subItem.name) === true ? '' :'not-allowed']" v-for="subItem in item[1]" :key='subItem.name' @click="changeCity(subItem)">{{subItem.name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'city-plus',
    mixins: [],
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
        allowedCity: {
            type: Array,
            default: function() {
                return [];
            }
        },
    },
    data() {
        return {
            showCityArray: [],
            cityArray: [],
        }
    },
    components: {},
    created() {},
    mounted() {},
    computed: {},
    watch: {
        data(val, oldVal) {
            this.cityArray = val;
            this.init();
        }
    },
    methods: {
        init() {
            //设置abcd当前状态
            let letterList = this.$refs.letterList;
            let span = letterList.getElementsByTagName('span')[0];
            span.setAttribute('class', 'active');
            this.cityListFilter(span.innerHTML);
        },
        letterChange(x) {
            let target = x.target;
            if (target.innerHTML.indexOf('<') === -1) {
                this.resetLetterClass();

                if (target.nodeName === 'SPAN') {
                    target.setAttribute('class', 'active');
                }

                this.cityListFilter(target.innerHTML);
            }
        },
        resetLetterClass() {
            let letter = this.$refs.letterList;
            let span = letter.getElementsByTagName('span');
            for (let x of span) {
                x.setAttribute('class', '');
            }
        },
        cityListFilter(keyword) {
            let result = [];
            for (let val of keyword) {
                for (let innerVal of this.cityArray) {
                    if (innerVal[0] === val) {
                        result.push(innerVal);
                        break;
                    }
                }
            }
            this.showCityArray = result;
        },
        changeCity(val) {
            this.$emit('on-change', val);
        }
    }
}

</script>
<style>


</style>
<style>
.td-city {
    font-size: 14px;
    .search-city {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px 16px;
        color: var(--color-detail);
        position: relative;
        font-size: 13px;
        line-height: 13px;
        span {
            font-size: 13px;
            color: var(--color-detail);
            line-height: 13px;
        }
        .icon-add {
            font-size: 22px;
            color: #2D8CF0;
        }
        input {
            background: #FFFFFF;
            border: 1px solid #DDDEE1;
            border-radius: 14px;
            height: 24px;
            line-height: 24px;
        }
    }
    .recent-city {
        color: var(--link-color);
        font-size: 12px;
        padding: 10px 16px 10px 16px;
        margin-left: -9px;
        white-space: nowrap;
        width: 368px;
        overflow: hidden;
        .recent_city {
            display: inline;
            padding: 0 8px;
            cursor: pointer;
        }

        .not-allowed {
            cursor: not-allowed;
        }
    }
    .select-city {
        .letter-list {
            margin: 0 16px;
            /*padding: 16px ;*/
            display: flex;
            font-size: 12px;
            color: var(--color-detail);
            line-height: 24px;
            border-bottom: 1px solid var(--border-color);
            span {
                margin-right: 16px;
                display: block;
                cursor: pointer;
            }
            span.active {
                border-bottom: 1px solid var(--link-color);
                color: var(--link-color);
            }
        }
        .city-list {
            height: auto;
            padding: 16px;
            .row {
                display: flex;
                margin-bottom: 8px;
                .city-label {
                    width: 10px;
                    font-size: 14px;
                    color: var(--color-icon);
                    letter-spacing: -1.17px;
                    text-align: left;
                    line-height: 20px;
                    margin-right: 20px;
                }
                .city-label-list {
                    .city {
                        float: left;
                        font-size: 12px;
                        color: var(--color-detail);
                        letter-spacing: 0;
                        text-align: left;
                        line-height: 20px;
                        cursor: pointer;
                        width: 74px;
                    }

                    .not-allowed {
                        cursor: not-allowed;
                    }
                }
            }
        }
    }
}

</style>
