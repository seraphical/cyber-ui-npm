const elmUiComponents = [];

export const installer = (Vue) => {
  elmUiComponents.forEach((comp) => {
    Vue.component(comp.name, comp);
  });
};
//installer 是为了在调用的时候进行全局注册使用的
