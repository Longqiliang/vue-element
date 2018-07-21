<template>
<div>
  <el-form ref="communityForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">街道办</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站</label>
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
          <label for="s" class="input-group__label">业主人数</label>
          <el-input class="input-group-number"></el-input>
          <div class="el-input-group__center"><span class="input-group__label">至</span></div>
          <el-input class="input-group-number"></el-input>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="mini"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="mini"><svg-icon icon-class="search"></svg-icon>查询</el-button>
    </div>
  </el-form>
    
   <BTable v-bind="table" @handleSelectionChange="handleSelectionChange"  @handleCurrentChange="handleCurrentChange" />
</div>

</template>

<script>
import BTable from '@/components/Table'
export default {
  components: {
    BTable
  },
  data() {
    return {
      table: {
        list: [
          {
            street: '福永街道',
            station: '富华工作站',
            houseWork: '丽华佳园',
            owner: 3450
          },
          {
            street: '福永街道',
            station: '富华工作站',
            houseWork: '丽景城',
            owner: 2534
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            label: '所属街道办',
            name: 'street',
            width: 260
          },
          {
            label: '所属工作站',
            name: 'station',
            width: 260
          },
          {
            label: '所属小区',
            name: 'houseWork',
            width: 260
          },
          {
            label: '小区业主数',
            name: 'owner',
            width: 120
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
              label: '查看详细',
              type: 'text',
              method: (index, row) => {
                this.handleDetail(index, row)
              }
            }
          ]
        },
        title: {
          show: true,
          align: 'left',
          label: '业主列表',
          list: [
            {
              label: '导出',
              type: 'warning',
              svg: 'export',
              method: () => {
                this.export()
              }
            },
            {
              label: '新增',
              type: 'primary',
              svg: 'add',
              method: () => {

              }
            },
            {
              label: '删除',
              type: 'danger',
              svg: 'remove',
              method: (index, row) => {
                this.handleSelectionRemove()
              }
            }
          ]
        },
        multipleSelection: [] // 多行选中
      }
    }
  },
  methods: {
    handleCurrentChange(val) {
      this.table.listQuery.pageIndex = val
    },
    handleDetail(id, row) {
      this.$router.push({ path: `/information/ownerBase/detail/${id}` })
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
      }).catch((err) => {
        console.log(err)
      })
    },
    export () {
      this.exportExcel()
    }
  }
}
</script>

<style>
</style>