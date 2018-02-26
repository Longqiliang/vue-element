<template>
  <div class="container">
    <!-- <div class="source">
      
    </div>  -->
    <el-container style="border: 1px solid #eee">
      <el-container>
        <el-header>
          
        </el-header>
        <el-main>
          <Test :table="table"></Test>
        </el-main>
      </el-container>
    </el-container>
    <!-- <el-button type="primary" icon="el-icon-plus" @click="add"></el-button> -->
  </div>

</template>

<script>
import {mapState, mapMutations} from 'vuex'
import store from '@/store'
import Test from './test.vue'
export default {
  components: {
    Test
  },
  computed: {
    ...mapState(['count'])
  },
  data () {
    return {
      table: {
        date: '2018-02-05',
        name: '亚丝娜',
        address: '东京',
        tag: '刀剑神域',
        desc: '日本神作，SAO',
        extras: '序列之战即将上映'
      }
    }
  },
  name: 'Container',
  store,
  methods: mapMutations(['add', 'reduce'])
}
</script>

<style lang="scss" scoped>
$icon-mar:15px;
$bgc:#b3c0d1;
$color:#333;
.source{
  padding: 25px;
}
.el-header{
  color: $color;
  background-color: $bgc;
  line-height: 60px;
}
.el-aside{
  color: $color;
  background-color: rgb(238, 241, 246);
}
</style>


