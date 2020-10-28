<template>
    <div class="container">
        Today
    </div>
</template>
<script>
import {onMounted} from "vue";
import {getData} from "@/services/request";

export default {
    name:"TodayPage",
    setup(){
        onMounted(()=>{
            getData('金牛座','today');
        })
    }
}
</script>
<style lang="scss" scoped>
    
</style>