<template>
  <div class="container">
    <ConsCard :name="weekData.name" :allIndex="weekData.all" />
  </div>
</template>
<script>
import { onMounted,computed } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

export default {
  name: "WeekPage",
  setup() {
    const store = useStore(),
    state=store.state;
    onMounted(() => {
      getData(store);
    });
    return {
        weekData:computed(()=>state.week)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>