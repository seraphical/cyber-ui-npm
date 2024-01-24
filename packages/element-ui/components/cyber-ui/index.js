import CyCard from './cy-card';

const components = [CyCard];

const install = (Vue) => {
  components.forEach((cmp) => {
    Vue.use(cmp);
  });
};

export default { install, CyCard };
