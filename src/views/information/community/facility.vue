<template>
  <div class="flex-scroll">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="6" class="table-title-top">
          <span>配套设施</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
            <el-button type="success" size="medium" @click="compile">
              <svg-icon icon-class="write"></svg-icon>
              <span>编辑</span>
            </el-button>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="6" class="has-background">
          <span class="must"></span>物业管理区域内房屋建筑本体之外的公共设施设备情况
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>车辆出入口
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>人行出入口
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>道路
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>车行道（m²）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>绿化面积（m²）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must"></span>园林建筑小品
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>污水管长（m）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>污水检查井（座）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>雨水管长（m）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>雨水检查井（座）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must"></span>雨水进水井（座）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>化粪池（座）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>路灯
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must"></span>地灯
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">          
        </td>
        <td class="has-background">
          <span class="must">*</span>草坪灯
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">          
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>其他超明设施
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>垃圾箱
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>垃圾房建筑面积（m²）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>体育设施（个）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must"></span>儿童娱乐设施（个）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must"></span>休闲设施（个）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
    </table>

    <table width="100%" border="1" bordercolor="#649efc" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="6" class="has-background">
          <span class="must"></span>房屋建筑本体公用部位及本公用设施设备
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>电梯（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>生活水泵（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>功率（KW）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>配电房变压器（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>消防水泵（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>功率（KW）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>发电机组（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>排污水泵（台）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>功率（KW）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>生活蓄水池（座）
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
        <td class="has-background">
          <span class="must">*</span>消防水池（座）
        </td>
        <td colspan="3">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>消防系统情况
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>智能化系统情况
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>其他设施设备情况
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>业主委员会活动用房位置
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>物业服务办公室用房位置
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>物业管理员工宿舍位置
        </td>
        <td colspan="5">
          <input type="text" v-model="public" :disabled="saveShow"> 
        </td>
      </tr>
    </table>
    <div class="save" v-if="!saveShow">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      saveShow: true,
      public: ''
    }
  },
  methods: {
    compile () {
      this.saveShow = false
    },
    save () {
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      this.saveShow = true
    }
  }
}
</script>

<style lang="scss" scoped>
$default-font: 14px;
.details-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
table {
  width: 100%;
  margin-bottom: 10px;
  border-collapse: collapse;
  td {
    width: 16.6%;
    height: 40px;
    text-align: center;
    overflow: hidden;
    border: 1px #649efc solid;
    input {
      display: block;
      width: 100%;
      height: 100%;
      border: none;
      text-align: center;
      background: #fff;
      font-size: $default-font;
      color: #000;
    }
  }
}

.table-title-top {
  width: 100%;
  background: #7aaae6;
  padding: 0 10px;
  .el-button{
    padding: 7px 12px;
    font-size: $default-font;
    margin-top: 3px;
  }
  span:nth-child(1) {
    color: #fff;
    font-weight: 600;
    float: left;
    line-height: 40px;
  }
  span:nth-child(2) {
    float: right;
  }
}
.has-background {
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
    font-size: $default-font;
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
