import Table from './table.vue';

Table.install = function (Vue) {
  Vue.component(Table.name, Table);
};

export const CyTable = Table;
export default CyTable;
export * from './';
