<template>
  <div>
    <div class="details-top">
      <div class="firm-details">
        <svg-icon icon-class="search"></svg-icon>
        <span>企业详情</span>
      </div>
      <el-button type="warning">
        <svg-icon icon-class="export"></svg-icon>
        <span>导出</span>
      </el-button>
    </div>
    <table width="100%"  border="1" bordercolor="#649efc" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="4" class="table-title">
          <span>企业详情</span>
          <span><svg-icon icon-class="search"></svg-icon></span>
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>企业名称</td>
        <td>&nbsp;</td>
        <td class="has-background"><span class="must">*</span>统一社会信用代码</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>总经理</td>
        <td>&nbsp;</td>
        <td class="has-background"><span class="must">*</span>联系方式</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>法人姓名</td>
        <td>&nbsp;</td>
        <td class="has-background"><span class="must">*</span>身份证号码</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>联系方式</td>
        <td>&nbsp;</td>
        <td class="has-background"><span class="must">*</span>成立时间</td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>管理项目</td>
        <td colspan="3">&nbsp;</td>
      </tr>
      <tr>
        <td scope="row" class="has-background"><span class="must">*</span>单位地址</td>
        <td colspan="3">&nbsp;</td>
      </tr>
       <tr>
        <td colspan="4" class="has-background"><span class="must">*</span>企业详情</td>
      </tr>
       <tr>
        <td colspan="4" style="height:135px;">&nbsp;</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
.details-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
td{
  height: 40px;
  text-align: center;
  overflow: hidden;
}
.table-title{
  width: 100%;
  background:#7aaae6;
  padding: 0 15px;
  span:nth-child(1){
    color: #fff;
    font-weight: 600;
    float: left;
  }
  span:nth-child(2){
    float: right;
  }
}
.has-background{
  width: 22%;
  background: #b9d1ef;
}
.must{
  color: red;
  margin-right: 5px;
}
</style>
