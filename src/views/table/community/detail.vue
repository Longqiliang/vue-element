<template>
  <div>
    <div class="plot-details">
      <div class="plot-title">
        <svg-icon icon-class="search"></svg-icon>
        <span>企业详情</span>
      </div>
      <div class="plot-btn">
        <div>
          <el-button>基本概括</el-button>
          <el-button>配套设施</el-button>
          <el-button>配套人员</el-button>
          <el-button>业主委员会</el-button>
          <el-button>小区党组织</el-button>
          <el-button>其他</el-button>
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

    }
  }
}
</script>

<style>
.plot-btn {
  margin: 10px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
