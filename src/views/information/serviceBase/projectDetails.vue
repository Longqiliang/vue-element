<template>
  <div>
    <div class="details-top">
      <div class="firm-details">
        <svg-icon icon-class="search"></svg-icon>
        <span>项目详情</span>
      </div>
      <el-button type="warning">
        <svg-icon icon-class="export"></svg-icon>
        <span>导出</span>
      </el-button>
    </div>
    <table width="100%" border="1" bordercolor="#649efc" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="8" class="table-title">
          <span>项目详情</span>
          <span>
            <svg-icon icon-class="search"></svg-icon>
          </span>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>项目名称
        </td>
        <td colspan="3" width="35%">
          <input type="text" v-model="proName">
        </td>
        <td class="has-background">
          <span class="must">*</span>小区名称
        </td>
        <td colspan="3" width="35%">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>地址
        </td>
        <td colspan="3" width="35%">&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>成立时间
        </td>
        <td colspan="3" width="35%">&nbsp;</td>
      </tr>
      <tr>
        <td colspan="8" class="has-background">
          <span class="must"></span>项目人员配置
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>物业经理
        </td>
        <td colspan="2" width="21%">&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>身份证号
        </td>
        <td colspan="2" width="21%">&nbsp;</td>
        <td class="has-background">
          <span class="must">*</span>联系电话
        </td>
        <td width="21%">&nbsp;</td>
      </tr>
      <tr>
        <td rowspan="4" class="has-background">
          <span class="must"></span>安全部门
        </td>
        <td class="has-background">
          <span class="must">*</span>负责人
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
        <td colspan="2" rowspan="4">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>身份证号
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>联系电话
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>具体人数
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
      </tr>
      <tr>
        <td rowspan="4" class="has-background">
          <span class="must"></span>维修部门
        </td>
        <td class="has-background">
          <span class="must">*</span>负责人
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
        <td colspan="2" rowspan="4">
          <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>身份证号
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>联系电话
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
      </tr>
      <tr>
        <td class="has-background">
          <span class="must">*</span>具体人数
        </td>
        <td colspan="4" width="47%">&nbsp;</td>
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
      proName: '',
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
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    compile () {
      this.saveShow = true
    },
    save () {
      this.$message({
        message: '保存成功',
        type: 'success'
      })
      this.saveShow = false
    },
    handleRemove (file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
    // tableEdit (e) {
    //   if (this.saveShow) {
    //     var e = e || event;
    //     var target = e.target || e.srcElement;
    //     if (target.className == 'content' || target.className == 'content-col') {
    //       var inp = document.createElement("input");
    //       inp.classList.add("modification")
    //       // inp.css({ width: "100%", height: "100%", border: "none", textAlign: "center", fontSize: "16px", fontWeight: "500"});
    //       inp.style.width = "100%";
    //       inp.style.height = "100%";
    //       inp.style.border = "none";
    //       inp.style.textAlign = "center";
    //       inp.style.fontSize = "16px";
    //       inp.style.fontWeight = "500";
    //       inp.value = target.innerHTML;
    //       target.innerHTML = '';
    //       target.append(inp)
    //       inp.onblur = function () {
    //         target.innerHTML = this.value;
    //         this.remove();
    //       }
    //     }
    //     if (target.className == 'profile') {
    //       var txt = document.createElement("textarea");
    //       txt.style.display = "block";
    //       txt.style.width = "100%";
    //       txt.style.height = "100%";
    //       txt.style.fontSize = "18px";
    //       txt.style.lineHeight = "24px";
    //       // txt.style.color = "#000";
    //       // txt.style.fontWeight = "500";
    //       txt.style.border = "none";
    //       txt.style.outline = "none";
    //       txt.value = target.innerHTML;
    //       target.innerHTML = '';
    //       target.appendChild(txt);
    //       txt.onblur = function () {
    //         target.innerHTML = this.value;
    //         this.remove();
    //       }
    //     }
    //   } else {
    //     return
    //   }
    // }
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
    height: 40px;
    text-align: center;
    overflow: hidden;
    input {
      display: block;
      width: 100%;
      height: 100%;
      font-size: 16px;
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
  width: 12.7%;
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
