<template>
<div class="base-detail">
  <el-form ref="communityForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">活动名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="medium"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="medium"><svg-icon icon-class="search"></svg-icon>查询</el-button>
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
        list: [{
          index: 1,
          year: '2018',
          name: '2018年宝安区商住小区物业管理星级服务评价',
          number: 0,
          startTime: '2018-01-01',
          endTime: '2018-12-31',
          status: '启动'
        }],
        isMultiple: true,
        tableHeader: [
          {
            label: '序号',
            name: 'index',
            width: 50
          },
          {
            label: '年份',
            name: 'year',
            width: 80
          },
          {
            label: '活动名称',
            name: 'name',
            width: 200
          },
          {
            label: '参与项目数量',
            name: 'number',
            width: 90
          },
          {
            label: '开始时间',
            name: 'startTime',
            width: 90
          },
          {
            label: '结束时间',
            name: 'endTime',
            width: 90
          },
          {
            label: '状态',
            name: 'status',
            width: 80
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
                this.handleDetail(index, row)
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
              label: '导出',
              type: 'warning',
              svg: 'export',
              method: () => {
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
      // this.$router.push()
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
    }
  }
}
</script>

<style>
</style>