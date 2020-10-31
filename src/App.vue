<template>
  <div id="app">
  <my-header>星座物语</my-header>
    <router-view />
  </div>
</template>
<script>
import MyHeader from "@/components/Header/Header";

export default {
  name:"App",
  components:{
    MyHeader
  }
}
</script>
<style lang="scss">

</style>
