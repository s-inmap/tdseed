<template>
    <div id="ex-filter-city">
        <filter-city :data="pageList" @on-change="onChange" @on-submit="onSubmit" @on-cancel="onCancel" @on-popper-show="onPopperShow"></filter-city>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageList: [{ "serviceType": 3, "score": 44.0, "lng": "116.643422281780261", "polygon": null, "serviceArea": 125600.0, "city": "北京市", "brandId": 240, "name": "麦当劳(迎宾中路餐厅)", "serviceScope": 200, "id": 2290, "lat": "40.321470735564624", "status": "SUCCESS" }]
        }
    },
    methods: {
        onPopperShow() {},
        onChange(value) {
            console.log(value)
        },
        onSubmit(value) {
            console.log(value)
        },
        onCancel(value) {
            console.log(value)
        }
    }
}

</script>
<style>
#ex-filter-city {}

</style>
