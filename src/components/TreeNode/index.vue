<template>
  <li class="b-tree-node">
    <div class="node-wrapper">
      <span class="node-toggle"></span>
      <span class="node-label">永福街道办</span>
    </div>
    <ul class="b-tree" v-if="ifFolder" v-show="open">
      <TreeNode 
        v-for="(model, n) in model.children" 
        :key="n"
        :model="model"/>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeNode',
  computed: {
    toggleIcon() {
      return this.open ? this.options.closeIcon : this.options.openIcon
    }
  }
}
</script>

<style>

</style>
