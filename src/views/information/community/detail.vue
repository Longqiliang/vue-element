<template>
  <div class="plot-details base-detail">
    <div class="plot-title">
      <svg-icon icon-class="search"></svg-icon>
      <span>企业详情</span>
    </div>
    <div class="plot-btn">
      <div class="tabs">
        <router-link :to="tab.path" v-for="(tab,t) in tabs" :key="t">
          <el-button type="primary" @click="changeTab(t)" :plain="active != t">
            {{tab.label}}
          </el-button>
        </router-link>
        <!-- <el-button :plain="true" type="primary">基本概括</el-button>
        <el-button>配套设施</el-button>
        <el-button>配套人员</el-button>
        <el-button>业主委员会</el-button>
        <el-button>小区党组织</el-button>
        <el-button>其他</el-button> -->
      </div>
      <div>
        <el-button type="warning" size="small">
          <svg-icon icon-class="export"></svg-icon>
          <span>导出</span>
        </el-button>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      tabs: [
        {
          label: '基本概况',
          path: 'generalization'
        },
        {
          label: '配套设施',
          path: 'facility'
        },
        {
          label: '配套人员',
          path: 'organization'
        },
        {
          label: '业主委员会',
          path: 'worker'
        },
        {
          label: '小区党组织',
          path: 'worker'
        },
        {
          label: '其他',
          path: 'other'
        }
      ]
    }
  },
  mounted() {
    this.routeTab()
  },
  computed: {
    routePath() {
      let arr = this.$route.path.split('/')
      console.log(arr[arr.length - 1])
      return arr[arr.length - 1]
    }
  },
  methods: {
    changeTab(index) {
      this.active = index
    },
    routeTab() {
      const path = this.routePath
      const index = this.tabs.findIndex(v => v.path === path)
      this.changeTab(index)
    }
  }
}
</script>

<style lang="scss" scoped>
.plot-btn {
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .tabs {
    a{
      display: inline-block;
      margin-right: 10px;
    }
    .el-button {
      min-width: 110px;
      + .el-button {
        margin-left: 5px;
      }
    }
  }
}
</style>
