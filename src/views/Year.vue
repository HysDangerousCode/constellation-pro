<template>
  <div class="container">
    <ConsCard :name="yearData.name" :allIndex="yearData.all" />
  </div>
</template>
<script>
import { onMounted,computed } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

export default {
  name: "YearPage",
  setup() {
    const store = useStore(),
    state=store.state;
    onMounted(() => {
      getData(store);
    });
    return {
        yearData:computed(()=>state.year)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>