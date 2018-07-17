<template>
  <div>
    <table width="100%" border="1" bordercolor="#649efc" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="7" class="table-title">
          <span>基本概括</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="3" rowspan="11"></td>
        <td class="has-background">
          <span class="must">*</span>小区名称
        </td>
        <td>
          <input type="text">
        </td>
        <td class="has-background">
          <span class="must">*</span>小区类型
        </td>
        <td>
          <select name="street" class="genera" id="s">
            <option value="1">商业小区1</option>
            <option value="2">商业小区2</option>
            <option value="3">商业小区3</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>小区地址
        </td>
        <td colspan="3">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>物业服务企业
        </td>
        <td colspan="3">
          <select name="street" class="genera" id="s">
            <option value="1">深圳市开元国际物业服务公司1</option>
            <option value="2">深圳市开元国际物业服务公司2</option>
            <option value="3">深圳市开元国际物业服务公司3</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>联系方式
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>物业服务类型
        </td>
        <td>
          <select name="street" class="genera" id="s">
            <option value="1">包干制1</option>
            <option value="2">包干制2</option>
            <option value="3">包干制3</option>
          </select>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>合同服务时间
        </td>
        <td colspan="3">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>物业经理
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>联系方式
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>入伙时间
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>总业人数
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>占地面积
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>总建筑面积
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>计容积率建筑面积
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must"></span>不计容积率建筑面积
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>公共场所面积
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>公共场所建筑
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>物业管理用房面积
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>栋数
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>总套数
        </td>
        <td colspan="2">&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>入住套数
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>入住率
        </td>
        <td>&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>建筑绿盖率
        </td>
        <td colspan="2">&nbsp;</td>
        <td class="has-background">
          <span class="must"></span>建筑覆盖率
        </td>
        <td>&nbsp;</td>
        <td class="has-background">
          <span class="must"></span>建筑容积率
        </td>
        <td>&nbsp;</td>
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
  methods: {

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
table {
  width: 100%;
  td {
    width: 14.2%;
    height: 40px;
    text-align: center;
    overflow: hidden;
    .genera {
      width: 100%;
      height: 100%;
      border: none;
      option {
        text-align: center;
      }
    }
    input{
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      text-align: center;
    }
  }
}

.table-title {
  width: 100%;
  background: #7aaae6;
  padding: 0 15px;
  span:nth-child(1) {
    color: #fff;
    font-weight: 600;
    float: left;
    line-height: 40px;
  }
  span:nth-child(2) {
    float: right;
    line-height: 40px;
  }
}
.has-background {
  width: 14.2%;
  background: #b9d1ef;
}
.must {
  color: red;
  margin-right: 5px;
}
.content {
  width: 28%;
  .modification {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
}
.save {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 45px;
}
</style>
