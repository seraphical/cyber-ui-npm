import CySelect from './index.vue';
CySelect.install = (Vue) => {
  Vue.component(CySelect.name, CySelect);
};

export default CySelect;
export * from './';
