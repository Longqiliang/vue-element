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
      </div>
      <div class="form-footer-inline">
        <el-button type="warning" size="medium">
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
          label: '合同规约',
          path: 'specifications'
        },
        {
          label: '配套设施',
          path: 'facility'
        },
        {
          label: '配套人员',
          path: 'worker'
        },
        {
          label: '业主（房主）委员会',
          path: 'committee'
        },
        {
          label: '小区党组织',
          path: 'organization'
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
  watch: {
    routePath() {
      this.routeTab()
    }
  },
  computed: {
    routePath() {
      let arr = this.$route.path.split('/')
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
