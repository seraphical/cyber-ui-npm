import CyCard from './index.vue';
CyCard.install = (Vue) => {
  Vue.component(CyCard.name, CyCard);
};

export default CyCard;
