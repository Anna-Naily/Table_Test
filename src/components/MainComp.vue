<template>
  <div class="wrapper">
    <AddComp />
    <TableComp />
  </div>
</template>

<script>
import AddComp from './AddComp.vue';
import TableComp from './TableComp.vue';
export default {
  components: { AddComp, TableComp },
  name: 'MainComp',
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
</style>
