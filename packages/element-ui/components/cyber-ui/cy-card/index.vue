<template>
  <div style="position: relative; padding-top: 19px">
    <div class="content">
      <span class="title">{{ title }}</span>

      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
  name: 'CyCard',
};
</script>
<style scoped lang="scss">
.title {
  font-family: Microsoft YaHei;
  font-size: 14px;
  letter-spacing: 0px;
  box-shadow: 0px 15px 20px 0px rgba(52, 56, 106, 0.1);
  border-radius: 100px;
  border: solid 1px #e6ebff;
  background-color: #fff;
  padding: 10px 50px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: -19px;
  color: #30306b;
  z-index: 999;
}
.content {
  position: relative;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0px 15px 20px 0px rgba(52, 56, 106, 0.1);
  border-radius: 4px;
  border: solid 1px #e6ebff;
}
</style>
