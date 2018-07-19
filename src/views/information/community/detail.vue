<template>
  <div class="plot-details base-detail">
    <div class="plot-title">
      <svg-icon icon-class="search"></svg-icon>
      <span>企业详情</span>
    </div>
    <div class="plot-btn">
      <div class="tabs">
        <router-link :to="tab.path" v-for="(tab,t) in tabs" :key="t">
          <el-button type="primary" @click="changeTab(t)" :plain="tab.plain">
            {{tab.label}}
          </el-button>
        </router-link>
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
      tabs: [
        {
          label: '基本概况',
          plain: false,
          path: 'generalization'
        },
        {
          label: '配套设施',
          plain: true,
          path: 'facility'
        },
        {
          label: '配套人员',
          plain: true,
          path: 'organization'
        },
        {
          label: '业主委员会',
          plain: true,
          path: 'worker'
        },
        {
          label: '小区党组织',
          plain: true,
          path: 'worker'
        },
        {
          label: '其他',
          plain: true,
          path: 'other'
        }
      ]
    }
  },
  methods: {
    changeTab (index) {
      for (let tab in this.tabs) {
        if (tab === index) {
          this.tabs[index].plain = false
        } else {
          this.tabs[index].plain = true
        }
      }
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
