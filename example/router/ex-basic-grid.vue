<template>
    <div class='ex-basic-grid'>
        <basic-grid title="标题">
            <div>内容</div>
        </basic-grid>
    </div>
</template>
<script>
import utils from '@/lib/utils';
import classification from '../data/classification';
export default {
    data() {
        return {
            visible: true,
            conditionData: {},
            modelData: {}
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
.ex-basic-grid {
    width: 400px;
}

</style>
