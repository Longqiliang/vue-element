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
    <table width="100%" border="1" bordercolor="#649efc" cellpadding="0" cellspacing="0" v-for="(item,index) in firmDetails" key="index" @click="tableEdit">
      <tr>
        <td colspan="4" class="table-title">
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
        <td class="content">{{item.name}}</td>
        <td class="has-background">
          <span class="must">*</span>统一社会信用代码</td>
        <td class="content">{{item.num}}</td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>总经理</td>
        <td class="content">{{item.general}}</td>
        <td class="has-background">
          <span class="must">*</span>联系方式</td>
        <td class="content">{{item.phone}}</td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>法人姓名</td>
        <td class="content">{{item.legal}}</td>
        <td class="has-background">
          <span class="must">*</span>身份证号码</td>
        <td class="content">{{item.card}}</td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>联系方式</td>
        <td class="content">{{item.phoneNum}}</td>
        <td class="has-background">
          <span class="must">*</span>成立时间</td>
        <td class="content">{{item.time}}</td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>管理项目</td>
        <td colspan="3" class="content-col">{{item.project}}</td>
      </tr>
      <tr>
        <td scope="row" class="has-background">
          <span class="must">*</span>单位地址</td>
        <td colspan="3" class="content-col">{{item.site}}</td>
      </tr>
      <tr>
        <td colspan="4" class="has-background">
          <span class="must">*</span>企业简介</td>
      </tr>
      <tr class="firmIntro">
        <td colspan="4" class="profile">{{item.intro}}</td>
      </tr>
    </table>
    <div class="save" v-if="saveShow">
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firmDetails: [{
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
        intro: '单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行单击页面使单元格td变成可编辑状态，输入内容后，当单元格失去焦点时，保存输入的内容。点击增加行，在table的末尾增加一行；点击删除行，删除table中最末尾的一行'
      }],
      saveShow: false,
      firm: []
    }
  },
  methods: {
    compile () {
      this.saveShow = true
    },
    save () {
      var cont = document.getElementsByClassName("content")
      var contcol = document.getElementsByClassName("content-col")
      var intor = document.getElementsByClassName("profile")
      var firm = {
        name:cont[0].innerHTML,
        num:cont[1].innerHTML,
        general:cont[2].innerHTML,
        phone:cont[3].innerHTML,
        legal:cont[4].innerHTML,
        card:cont[5].innerHTML,
        phoneNum:cont[6].innerHTML,
        time:cont[7].innerHTML,
        project:contcol[0].innerHTML,
        site:contcol[1].innerHTML,
        intor:intor[0].innerHTML
      }
      console.log(firm)
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      this.saveShow = false
    },
    tableEdit (e) {
      if (this.saveShow) {
        var e = e || event
        var target = e.target || e.srcElement
        if (target.className == 'content' || target.className == 'content-col') {
          var inp = document.createElement("input")
          inp.classList.add("modification")
          // inp.css({ width: "100%", height: "100%", border: "none", textAlign: "center", fontSize: "16px", fontWeight: "500"});
          inp.style.width = "100%"
          inp.style.height = "100%"
          inp.style.border = "none"
          inp.style.textAlign = "center"
          inp.style.fontSize = "16px"
          inp.style.fontWeight = "500"
          inp.value = target.innerHTML
          target.innerHTML = ''
          target.append(inp)
          inp.onblur = function () {
            target.innerHTML = this.value
            this.remove()
          }
        }
        if (target.className == 'profile') {
          var txt = document.createElement("textarea")
          txt.style.display = "block"
          txt.style.width = "100%"
          txt.style.height = "100%"
          txt.style.fontSize = "18px"
          txt.style.lineHeight = "24px"
          // txt.style.color = "#000";
          // txt.style.fontWeight = "500";
          txt.style.border = "none"
          txt.style.outline = "none"
          txt.value = target.innerHTML
          target.innerHTML = ''
          target.appendChild(txt)
          txt.onblur = function () {
            target.innerHTML = this.value
            this.remove()
          }
        }
      } else {
        return
      }
    }
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
}
td {
  height: 40px;
  text-align: center;
  overflow: hidden;
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
    margin-top: 3px;
  }
}
.has-background {
  width: 22%;
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
.firmIntro {
  min-height: 135px;
  td {
    height: 335px;
    padding: 10px;
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
