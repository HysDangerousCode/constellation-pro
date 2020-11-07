<template>
  <div class="container">
    <ConsCard :name="todayData.name" :allIndex="todayData.all" />
  </div>
</template>
<script>
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

export default {
  name: "TodayPage",
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
      console.log(state);
    });
    return {
      todayData: computed(() => state.today),
    };
  },
};
</script>
<style lang="scss" scoped>
</style>