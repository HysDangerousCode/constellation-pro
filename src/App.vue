<template>
  <div id="app">
  <my-header>星座物语</my-header>
    <router-view v-slot="{Component}">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
    <tab/>
  </div>
</template>
<script>
import MyHeader from "@/components/Header/Header";
import Tab from "@/components/Tab";
import {watch} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

export default {
  name:"App",
  components:{
    MyHeader,
    Tab
  },
  setup(){
    const store=useStore(),
    state=store.state,
    router=useRouter();
    router.push("/");
    store.commit("setField","today");
    watch(()=>{
      console.log(router);
      return router.currentRoute.value.name;
    },(value)=>{
      store.commit('setField',value);
    })
  }
}
</script>
<style lang="scss">

</style>
