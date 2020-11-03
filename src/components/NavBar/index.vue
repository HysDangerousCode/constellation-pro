<template>
    <div class="nav-bar">
        <div class="scroll-wrapper">
            <div class="nav-wrapper" :style="`width:${navData.length * .8}rem`">
                <nav-item v-for="(item,index) of navData" :key="index" :item="item" :curIdx="curIdx" :index="index" @navClick="navClick"/>
            </div>
        </div>
    </div>
</template>

<script>
import navData from "@/datas/nav";
import NavItem from "./Item";
import {ref} from "vue";

export default {
    name:"NavBar",
    components:{
        NavItem
    },
    setup(){
        const curIdx=ref(0);
        const navClick=(index)=>{
            curIdx.value=index;
        }
        return {
            navData,
            curIdx,
            navClick
        }
    }
}
</script>
<style lang="scss" scoped>
    .nav-bar {
    position: fixed;
    top: .44rem;
    left: 0;
    z-index: 1;
    width: 100%;
    height: .38rem;
    border-bottom: 1px solid #ddd;
    box-sizing: border-box;
    background-color: #fff;
    overflow: hidden;

    .scroll-wrapper {
      height: .46rem;
      overflow-x: auto;

      .nav-wrapper {
        display: flex;
        flex-direction: row;
        height: .42rem; 
      }
    }
  }
</style>