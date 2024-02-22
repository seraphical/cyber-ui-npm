import CyTable from './table.vue';
const components = [CyTable];

const install = (app) => {
  components.forEach((cmp) => {
    app.component(cmp.name, cmp);
  });
};

export default { install };
