<template>
    <div class='ex-swipers-plus'>
        <button @click="one">one</button>
        <button @click="two">two</button>
        <button @click="three">three</button>
        <Swipers ref="swipers" id="Swipers">
            <div slot="nav" class="top">
                <h1>文章标题</h1>
            </div>
            <SwiperPane name="mainPage" animation="slide-in">
                <div>one</div>
            </SwiperPane>
            <SwiperPane name="filterPage" animation="slide-out">
                <div>two</div>
            </SwiperPane>
            <SwiperPane name="resultPage" animation="slide-in">
                <div>three</div>
            </SwiperPane>
        </Swipers>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    mounted() {},
    methods: {
        one() {
            this.$refs.swipers.open('mainPage')
        },
        two() {
            this.$refs.swipers.open('filterPage')
        },
        three() {
            this.$refs.swipers.open('resultPage')
        }
    }
}

</script>
<style>
.ex-swipers-plus {
    #Swipers {
        position: relative;
    }
}

</style>
