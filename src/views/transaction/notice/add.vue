<template>
  <el-form ref="noticeForm" class="file-form">
    <el-row type="flex" class="form-row">
      <el-col :span="24">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">标题</label>
          <el-input placeholder="请输入标题"></el-input> 
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      
      <el-col :span="12">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">接收单位</label>
          <select name="street" class="form-control" id="s">
            <option value="1">全部</option>
            <option value="2">类型2</option>
            <option value="3">类型3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">类型</label>
          <select name="street" class="form-control" id="s">
            <option value="1">类型1</option>
            <option value="2">类型2</option>
            <option value="3">类型3</option>
          </select>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      <el-col :span="12">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">是否需要反馈</label>
          <div class="flex flex-center input-group__content">
            <el-radio-group >
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">是否短信通知</label>
          <div class="flex flex-center input-group__content">
            <el-radio-group >
              <el-radio label="1">是</el-radio>
              <el-radio label="2">否</el-radio>
            </el-radio-group>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      <el-col :span="24">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">内容</label>
          <el-input
            type="textarea"
            :rows="5"
           >
          </el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      <el-col :span="24">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">附件</label>
          <el-upload action="">
            <el-input ></el-input> 
            <el-button size="small">上传附件</el-button>
            
          </el-upload>
        </div>
      </el-col>
    </el-row>
    <div >
     
      <el-button type="primary">保存</el-button>
    </div>
  </el-form>
</template>

<script>
export default {

}
</script>

<style>

</style>
