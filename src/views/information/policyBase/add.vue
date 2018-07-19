<template>
  <div class="service-details">
    <div class="details-top">
      <div class="firm-details">
        <svg-icon icon-class="search"></svg-icon>
        <span>政策法规库</span>
      </div>
    </div>
    <table width="100%" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="2" class="table-title-top">
          <span>政策法规</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
          </span>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>名称</td>
        <td class="content">
          <input type="text" v-model="name">
        </td>
      </tr>
      <tr>
        <td colspan="2" class="has-background">
          <span class="must">*</span>内容</td>
      </tr>
      <tr>
        <td colspan="2" class="content1">
          <textarea v-model="intro"></textarea>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>附件</td>
        <td class="content">
          <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-change="handleChange" :file-list="fileList3">
            <a>上传附件</a>
          </el-upload>
        </td>
      </tr>
    </table>
    <div class="save">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '深圳市开元国际物流有限公司',
      intro: '单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行',
      firm: [],
      fileList3: []
    }
  },
  methods: {
    compile () {
      this.saveShow = false
    },
    save () {
      var firm = {
        name: this.name,
        intor: this.intro,
        fileList: this.fileList3
      }
      console.log(firm)
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      this.$router.push({ path: '/information/policyBase/index' })
    },
    handleChange (file, fileList) {
      this.fileList3 = fileList.slice(-3)
    }
  }
}
</script>

<style lang="scss" scoped>
.service-details {
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
    input,
    textarea {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
      border: none;
      text-align: center;
      background: #fff;
      color: #000;
    }
    textarea {
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
    float: right;
    line-height: 40px;
  }
}
.has-background {
  width: 13%;
  background: #b9d1ef;
}
.must {
  color: red;
  margin-right: 5px;
}
.content {
  .modification {
    display: block;
    width: 100%;
    height: 100%;
    border: none;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
  }
  a {
    text-decoration: underline;
  }
}
.content1 {
  height: 300px;
  min-height: 300px;
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