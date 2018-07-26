<template>
<div class="base-detail">
  <el-form ref="noticeForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">街道名称</label>
          <el-input placeholder="请选择街道"></el-input> 
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">工作站名称</label>
          <el-input placeholder="请输入工作站名称"></el-input> 
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
          <label for="s" class="input-group__label">总支出</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请选择</option>
            <option value="2">状态2</option>
            <option value="3">状态3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">总收入</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请选择</option>
            <option value="2">状态2</option>
            <option value="3">状态3</option>
          </select>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="medium"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="medium"><svg-icon icon-class="search"></svg-icon>查询</el-button>
    </div>
  </el-form>
  <BTable v-bind="table"/>
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
      table: {
        list: [
          {
            index: '1',
            year: '2018',
            quarter: '第一季度',
            villagename: '丽华佳园',
            street: '福永街道',
            station: '富华工作站',
            revenue: '7000',
            expenditure: '2000',
            surplus: '5000'
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            label: '序号',
            name: 'index',
            width: 70
          },
          {
            label: '年份',
            name: 'year',
            width: 60
          },
          {
            label: '季度',
            name: 'quarter',
            width: 90
          },
          {
            label: '小区名称',
            name: 'villagename',
            width: 90
          },
          {
            label: '所属街道',
            name: 'street',
            width: 90
          },
          {
            label: '所属工作站',
            name: 'station',
            width: 100
          },
          {
            label: '总收入(元)',
            name: 'revenue',
            width: 100
          },
          {
            label: '总支出(元)',
            name: 'expenditure',
            width: 100
          },
          {
            label: '结余(元)',
            name: 'surplus',
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
          width: 100,
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
          label: '登记列表',
          list: [
            {
              label: '导出',
              type: 'warning',
              svg: 'export',
              method: () => {
              }
            }
          ]
        },
        multipleSelection: [] // 多行选中
      }
    }
  }
}
</script>

<style>

</style>
