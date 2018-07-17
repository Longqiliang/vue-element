<template>
  <div>
    <div class="plot-details">
      <div class="plot-title">
        <svg-icon icon-class="search"></svg-icon>
        <span>企业详情</span>
      </div>
      <div class="plot-btn">
        <div>
          <el-button type="primary" v-for="(tab,t) in tabs" :key="t" @click="changeTab(t)" :plain="tab.plain">
            {{tab.label}}
          </el-button>
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
          plain: true
        },
        {
          label: '配套设施',
          plain: true
        },
        {
          label: '配套人员',
          plain: true
        },
        {
          label: '业主委员会',
          plain: true
        },
        {
          label: '小区党组织',
          plain: true
        },
        {
          label: '其他',
          plain: true
        },
      ]
    }
  },
  // methods: {
  //   generalization () {
  //     var id = this.$route.params.id
  //     this.$router.push({ path: '/information/community/details/' + id + '/generalization' })
  //   },
  //   facility () {
  //     var id = this.$route.params.id
  //     this.$router.push({ path: '/information/community/details/' + id + '/facility' })    
  //   }
  // },
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
  .el-button {
    + .el-button {
      margin-left: 5px;
    }
  }
}
</style>
