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
                        <div v-for="subItem in item[1]" :key='subItem.name' :class="['city',allowedCity.includes(subItem.name) === true ? '' :'not-allowed']" @click="changeCity(subItem)">{{subItem.name}}</div>
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
