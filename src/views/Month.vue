<template>
  <div class="container">
    <ConsCard :name="monthData.name" :allIndex="Number(monthData.all)" />
  </div>
</template>
<script>
import { onMounted,computed } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

export default {
  name: "MonthPage",
  setup() {
    const store = useStore(),
    state=store.state;
    onMounted(() => {
      getData(store);
    });
    return {
        monthData:computed(()=>state.month)
    }
  },
};
</script>
<style lang="scss" scoped>
</style>