<template>
  <ul>
    <!-- <input type="text" v-model="index"> -->
    {{index}}
    <component 
      :is="currentView" 
      :route="route" 
      v-on:testClick="test">
      <template slot-scope="props">
        <span slot="title">111</span>
        <span>{{props.text}}</span>
      </template> 
    </component> 
  </ul>
</template>

<script>
import MenuItem from './MenuItem'
export default {
  name: 'Menu',
  data () {
    return {
      route: [
        {
          name: '1',
          children: [
            {
              name: '1-1',
              children: [
                {
                  name: '1-1-1'
                },
                {
                  name: '1-1-2'
                }
              ]
            },
            {
              name: '1-2'
            }
          ]
        },
        {
          name: '2'
        }
      ],
      index: 100,
      currentView: MenuItem
    }
  },
  components: {
    MenuItem
  },
  methods: {
    test () {
      this.index += 1
    }
  }
}
</script>

<style>

</style>
