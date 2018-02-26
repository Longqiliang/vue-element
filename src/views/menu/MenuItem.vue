<template>
  <div class="menu-wrapper">
    <template v-for="item in route" >
      <dl class="item"
        tabindex="-1"
        :class="{
          'is-active': active,
          'is-disabled': disabled
        }"
        @click="handleClick"
        @mouseenter="onMouseEnter"
        @focus="onMouseEnter"
        @blur="onMouseLeave"
        @mouseleave="onMouseLeave"
        :key="item.name"
      >
        <dt>{{item.name}}</dt>
        <dd  v-for="children in item.children" :key="children.name"> 
            <menu-item :route="[children]" :key="children.name"></menu-item> 
        </dd>
        
      </dl>
    </template>  
  </div>
</template>

<script>
export default {
  name: 'MenuItem',

  componentName: 'MenuItem',

  props: {
    route: Array,
    disabled: Boolean
  },
  computed: {
    active () {
      return this.index
    }
  },
  methods: {
    onMouseEnter () {

    },
    onMouseLeave () {

    },
    handleClick () {
      this.$emit('testClick')
      if (!this.disabled) {
        // this.$emit('click', this)
      }
    }
  }
}
</script>

<style>

</style>
