<template>
    <div class='ex-basic-bar'>
        <h1>basic-bar</h1>
        <basic-bar :value="0"></basic-bar>
        <basic-bar :value="20.6"></basic-bar>
        <basic-bar :value="50.6"></basic-bar>
        <basic-bar :value="70.6"></basic-bar>
        <h1>mini-bar</h1>
        <basic-bar :value="36.5" size="mini"></basic-bar>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    },
    created() {},
    mounted() {

    },
    methods: {

    }
}

</script>
<style scoped>


</style>
<style>
.ex-basic-bar {
    width: 200px;
    .td-basic-bar {
        margin-bottom: 10px;
    }
}

</style>
