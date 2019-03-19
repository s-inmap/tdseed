<template>
    <div class='ex-top-rank'>
        <top-rank :data="data" :loading="loading"></top-rank>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [{
                    "key": "手机app",
                    "value": 93.05
                },
                {
                    "key": "Pc端",
                    "value": 3.54
                },
                {
                    "key": "微信",
                    "value": 1.27
                },
                {
                    "key": "手机qq",
                    "value": 0
                },
                {
                    "key": "其他",
                    "value": 0.64
                },
                {
                    "key": "未知",
                    "value": 1.51
                }
            ],
            loading: false
        }
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
.ex-top-rank {
    width: 400px;
}

</style>
