<template>
<div>
  <el-form ref="communityForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">小区名称</label>
          <el-input placeholder="请输入小区名称"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
           <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">小区名称</label>
          <el-input placeholder="请输入小区名称"></el-input>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="mini"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="mini"><svg-icon icon-class="search"></svg-icon>查询</el-button>
    </div>
  </el-form>
    
   <BTable v-bind="table" @handleSelectionChange="handleSelectionChange"  @handleCurrentChange="handleCurrentChange" />
  <BTable v-bind="table" @handleSelectionChange="handleSelectionChange"  @handleCurrentChange="handleCurrentChange" />
</div>

</template>

<script>
import BTable from '@/components/Table'
export default {
  components:{
    BTable
  },
  data() {
    return {
      table: {
        list: [
          {
            index: "1",
            name: "丽华佳园",
            street: "福永街道",
            station: "富华工作站",
            houseWork: "物业服务企业",
            person: "李安",
            phone: "136-2342-2462",
            completeness: "20%"
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            label: "序号",
            name: "index",
            width: 50
          },
          {
            label: "小区名称",
            name: "name",
            width: 80
          },
          {
            label: "所属街道办",
            name: "street",
            width: 90
          },
          {
            label: "所属工作站",
            name: "station",
            width: 90
          },
          {
            label: "物业服务企业",
            name: "houseWork",
            width: 160
          },
          {
            label: "物业经理",
            name: "person",
            width: 80
          },
          {
            label: "联系方式",
            name: "phone",
            width: 140
          },
          {
            label: "信息完成度",
            name: "completeness",
            width: 100
          }
        ],
        listQuery: {
          pageIndex: 1,
          pageSize: 10
        },
        total: 50,
        operates: {
          show: true,
          list: [
            {
              label: '查看详情',
              type: 'text',
              method: (index, row) => {
                this.handleDelete(index, row)
              }
            }
          ]
        },
        title: {
          show: true,
          align: 'left',
          label: '小区列表',
          list: [
            {
              label: '删除',
              type: 'danger',
              native: true,
              method:(index, row) => {
                this.handleSelectionRemove()
              } 
            }
          ]
        },
        multipleSelection: [] //多行选中
      },
      
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.table.listQuery.pageIndex = val
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
    handleSelectionChange(val) {
      this.table.multipleSelection = val
    },
    handleSelectionRemove(val) {
      this.$confirm('此操作将删除所选列表中的信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.table.multipleSelection)
      })
    }
  }
};
</script>

<style>
</style>
