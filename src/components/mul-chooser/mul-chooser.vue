<template>
    <div class="td-mul-chooser">
        <div class="chooser-select">
            <span class="all" :class="{allActive:allActive}" @click="selectAll">全选</span>
            <span class="cancel" :class="{cancelActive:cancelActive}" @click="cancelAll">取消选择</span>
        </div>
        <div class="chooser-list">
            <ul>
                <li v-for="(item,index) in data" :class="{'active':checkActive(index)}" @click="toggleSelection(index)">
                    <span v-if='item.name.length > 4' :title='item.name'>{{item.name.substr(0,3)}}...</span>
                    <span v-else>{{item.name}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import _ from 'lodash'
import { Component, Prop, Vue, Watch, Model, Emit } from 'vue-property-decorator'


@Component
export default class MulChooser extends Vue {
    name: string = 'MulChooser'

    @Model('change', { type: Array })
    value!: Array < number > ;

    @Prop() data!: Array < any >
        @Prop(Boolean) reset!: boolean
    @Prop() disable!: boolean

    nowIndex: Array < number > = []
    allActive: boolean = true
    cancelActive: boolean = false

    @Watch('value')
    valueChanged(val: Array < number > , oldVal: Array < number > ) {
        this.nowIndex = val;
    }

    @Watch('reset')
    resetChanged(val: boolean, oldVal: boolean) {
        if (val) {
            this.selectAll();
        }
    }

    @Emit('onChange')
    selectAll() {
        if (this.disable) {
            return;
        }
        this.cancelActive = false;
        this.allActive = !this.cancelActive;

        this.nowIndex.splice(0);
        //全部选中
        this.data.map((item, index) => {
            this.nowIndex.push(index)
        })
        return this.nowIndex
    }

    @Emit('onChange')
    cancelAll() {
        if (this.disable) {
            return;
        }
        this.cancelActive = true;
        this.allActive = !this.cancelActive;

        //全部置灰
        this.nowIndex.splice(0);
        return this.nowIndex
    }

    @Emit('onChange')
    toggleSelection(index: number) {
        if (this.disable) {
            return;
        }
        if (this.nowIndex.indexOf(index) === -1) {
            this.nowIndex.push(index)
        } else {
            this.nowIndex = _.remove(this.nowIndex, (idx: number) => {
                return idx !== index;
            })
        }

        //1.所有行政区被选中时，「全选」不可点击
        //2.所有行政区未被选中时，「取消选择」按钮不可点击
        //3.行政区部分选中时，「全选」「取消选择」均可点击
        let nowLen = this.nowIndex.length;
        let len = this.data.length;
        if (nowLen === len) {
            this.allActive = true;
        } else {
            this.allActive = false;
        }
        if (nowLen === 0) {
            this.cancelActive = true;
        } else {
            this.cancelActive = false;
        }

        return this.nowIndex
    }

    checkActive(index: number) {
        return this.nowIndex.indexOf(index) !== -1;
    }
}

</script>
<style>


</style>
