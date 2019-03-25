<template>
    <div id="td-filterCity" class="td-filter-city">
        <div class="position">
            <Poptip placement="bottom-end" width="220" v-model="visible" @on-popper-show="onPopperShow">
                <div class="city-pop hover-pop">
                    <i class="icon-funnel"></i>选择城市
                </div>
                <div class="api" slot="content">
                    <city-content v-model="checkCity" :data="selectCityData" @on-change="cityChange" @on-submit="submitCity" @on-cancel="cancelCity"></city-content>
                </div>
            </Poptip>
        </div>
    </div>
</template>
<script>
import cityContent from './city-content';

export default {
    name: 'filterCity',
    mixins: [],
    components: {
        cityContent
    },
    props: {
        data: {
            type: Array,
            default: function() {
                return [];
            }
        },
    },
    data() {
        return {
            visible: false,
            checkCity: [],
            selectCityData: []
        }
    },
    computed: {},
    watch: {},
    created() {},
    mounted() {},
    methods: {
        onPopperShow() {
            this.selectCityData.push(this.data);
            this.$emit('on-popper-show');
        },
        cityChange(value) {
            this.checkCity = value;
            this.$emit('on-change', value);
        },
        submitCity(value) {
            this.visible = false;
            this.$emit('on-submit', value);
        },
        cancelCity(value) {
            this.visible = false;
            this.$emit('on-cancel', value);
        }
    }
}

</script>
<style>


</style>
