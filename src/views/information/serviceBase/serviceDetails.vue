<template>
  <div class="service-details">
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
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="4" class="table-title-top">
          <span>企业详情</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
            <el-button type="success" size="small" @click="compile">
              <svg-icon icon-class="write"></svg-icon>
              <span>编辑</span>
            </el-button>
          </span>
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>企业名称</td>
        <td class="content">
          <input type="text" v-model="name" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>统一社会信用代码</td>
        <td class="content">
          <input type="text" v-model="num" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>总经理</td>
        <td class="content">
          <input type="text" v-model="general" :disabled="saveShow">
        </td>
        <td class="has-background">
          <span class="must">*</span>联系方式</td>
        <td class="content">
          <input type="text" v-model="phone" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background border-bottom">
          <span class="must">*</span>法人姓名</td>
        <td class="content border-bottom">
          <input type="text" v-model="legal" :disabled="saveShow">
        </td>
        <td class="has-background border-bottom">
          <span class="must">*</span>身份证号码</td>
        <td class="content border-bottom">
          <input type="text" v-model="card" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background border-bottom">
          <span class="must">*</span>联系方式</td>
        <td class="content border-bottom">
          <input type="text" v-model="phoneNum" :disabled="saveShow">
        </td>
        <td class="has-background border-bottom">
          <span class="must">*</span>成立时间</td>
        <td class="content border-bottom">
          <input type="text" v-model="time" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td colspan="4" class="content1">
          <BTable v-bind="table" />
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background border-top">
          <span class="must">*</span>单位地址</td>
        <td colspan="3" class="content-col border-top">
          <input type="text" v-model="project" :disabled="saveShow">
        </td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>营业执照</td>
        <td colspan="3" class="content-col">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
            <a>上传附件</a>
          </el-upload>
        </td>
      </tr>
      <tr>
        <td colspan="4" class="has-background">
          <span class="must">*</span>企业简介</td>
      </tr>
      <tr class="firmIntro">
        <td colspan="4" class="profile">
          <textarea v-model="intro" :disabled="saveShow"></textarea>
        </td>
      </tr>
    </table>
    <div class="save" v-if="!saveShow">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
import BTable from '@/components/Table'
export default {
  components: {
    BTable
  },
  data () {
    return {
      name: '深圳市开元国际物流有限公司',
      num: '25468484EFG',
      general: '卫庄',
      phone: '13544485564',
      legal: '盖伦',
      card: '360732198404516647',
      phoneNum: '15844446484',
      time: '1997.08.9',
      project: '王者荣耀',
      site: '王者峡谷',
      intro: '单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行',
      saveShow: true,
      firm: [],
      fileList3: [],
      table: {
        list: [
          {
            index: '1',
            designation: '深圳开元国际物流有限公司',
            plot: '御景湾',
            contract: '3',
            legal: '是',
            name: '李白',
            num: '3607321994844514'
          },
          {
            index: '2',
            designation: '深圳开元国际物流有限公司',
            plot: '御景湾',
            contract: '3',
            legal: '是',
            name: '李白',
            num: '3607321994844514'
          }
        ],
        tableHeader: [
          {
            label: '序号',
            name: 'index',
            width: 100
          },
          {
            label: '项目名称',
            name: 'designation',
            width: 200
          },
          {
            label: '所属小区',
            name: 'plot',
            width: 200
          },
          {
            label: '服务合同年限',
            name: 'contract',
            width: 100
          },
          {
            label: '是否为独立法人',
            name: 'legal',
            width: 100
          },
          {
            label: '法人姓名',
            name: 'name',
            width: 200
          },
          {
            label: '身份证号',
            name: 'num',
            width: 250
          }
        ],
        title: {
          show: true,
          align: 'left',
          label: '管理项目名单',
          list: [
            
          ]
        }
      }
    }
  },
  methods: {
    compile () {
      this.saveShow = false
    },
    save () {
      var firm = {
        name: this.name,
        num: this.num,
        general: this.general,
        phone: this.phone,
        legal: this.legal,
        card: this.card,
        phoneNum: this.phoneNum,
        time: this.time,
        project: this.project,
        site: this.site,
        intor: this.intro,
        fileList3: this.fileList3
      }
      console.log(firm)
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      this.saveShow = true
    },
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    }
  }
}
</script>

<style lang="scss" scoped>
.service-details{
  width: 100%;
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
    height: 40px;
    text-align: center;
    overflow: hidden;
    border: 1px #649efc solid;
    a{
      text-decoration: underline;
    }
    input,textarea {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      border: none;
      text-align: center;  
      background: #fff;   
      color: #000;
    }
    textarea{
      font-size: 17px;
      line-height: 24px;
      padding: 10px;
      color: black;
      font-weight: 500;
      text-align: left;
      resize: vertical;
      min-height: 300px;
    }
  }
  .content1{
    border: none;
  }
}
.table-title-top {
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
    margin-top: 3px;
    float: right;
  }
}
.has-background {
  width: 22%;
  background: #b9d1ef;
}
.border-bottom{
  border-bottom: none;
}
.border-top{
  border-top: none;
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
.firmIntro {
  min-height: 135px;
  td {
    height: 335px;    
    text-align: left;
    line-height: 24px;
    vertical-align: text-top;
  }
}
.save {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 45px;
}
</style>
