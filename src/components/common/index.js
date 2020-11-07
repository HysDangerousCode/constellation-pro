import ConsCard from "@/components/common/Card";

const MyPlugin = {};

MyPlugin.install = function(Vue) {
    Vue.component(ConsCard.name, ConsCard);
}
export default MyPlugin;