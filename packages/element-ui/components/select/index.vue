<template>
  <div>
    <el-select :value="selectValue" @change="$emit('change', $event)">
      <el-options
        v-for="(item, index) in options"
        :key="index"
        :label="item.label"
        :value="item.value"
      ></el-options>
    </el-select>
  </div>
</template>


<script>
export default {
  model: {
    prop: 'selectValue',
    event: 'change',
  },
  props: {
    selectValue: String,
    options: Array,
  },
};
</script>


<style scoped lang='scss'>
</style>