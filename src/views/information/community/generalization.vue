<template>
  <div class="flex-scroll">
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="7" class="table-title-top">
          <span>基本概况</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
            <el-button type="success" size="medium" @click="compile">              
                <svg-icon icon-class="write"></svg-icon>
                编辑
            </el-button>
          </span>
        </td>
      </tr>
      <tr>
        <td colspan="3" rowspan="11"></td>
        <td class="has-background">
          <span class="must">*</span>小区名称
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
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
        <td colspan="3">
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>所属街道
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>所属工作站
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
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
          <span class="must">*</span>联系电话
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
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
        <td colspan="3">
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>物业经理
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>联系方式
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>入伙时间
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>总业人数
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>占地面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>总建筑面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>计容积率建筑面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>不计容积率建筑面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>公共场所面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>公共场所建筑
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <!-- <tr>
        <td class="has-background">
          <span class="must">*</span>物业管理用房面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>栋数
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr> -->
      <tr>
        <td class="has-background">
          <span class="must">*</span>总套数
        </td>
        <td colspan="2">
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>物业管理用房面积
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>栋数
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>建筑绿盖率
        </td>
        <td colspan="2">
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>入住套数
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>入住率
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must"></span>建筑覆盖率
        </td>
        <td colspan="2">
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must"></span>建筑容积率
        </td>
        <td>
          <input type="text" v-model="public" :disabled="saveShow">
        </td>
        <td colspan="2">
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
.flex-scroll::-webkit-scrollbar {
    display: none;
}
.details-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
}
table {
  width: 100%;
  border-collapse: collapse;
  td {
    width: 14.2%;
    height: 38px;
    text-align: center;
    overflow: hidden;
    border: 1px #649efc solid;
    .genera {
      width: 100%;
      height: 100%;
      border: none;
      option {
        text-align: center;
      }
    }
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
  height: 40px;
  .el-button{
    padding: 7px 12px;
    font-size: $default-font;
    margin-top: 3px;
  }
  .svg-icon{
    font-size: 16px;
    vertical-align: sub;
  }
  span:nth-child(1) {
    color: #fff;
    font-weight: 600;
    float: left;
    line-height: 40px;
  }
  span:nth-child(2) {
    font-size: $default-font;
    float: right;
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
