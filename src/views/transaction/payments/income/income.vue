<template>
<div class="base-detail">
  <el-form ref="noticeForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">年份</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请选择</option>
            <option value="2">2018</option>
            <option value="3">2017</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">季度</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请选择</option>
            <option value="2">第一季度</option>
            <option value="3">第二季度</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">状态</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请选择</option>
            <option value="2">未提交</option>
            <option value="3">审核通过</option>
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
            parkingcharges: '1000',
            venuerental: '2000',
            advertising: '4000',
            other: '2000',
            qrevenue: '9000',
            status: '未提交'
          }
        ],
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
            label: '季度',
            name: 'quarter',
            width: 80
          },
          {
            label: '小区名称',
            name: 'villagename',
            width: 80
          },
          {
            label: '停车场收费(元)',
            name: 'parkingcharges',
            width: 100
          },
          {
            label: '公共场地租金(元)',
            name: 'venuerental',
            width: 100
          },
          {
            label: '公共区域广告租金(元)',
            name: 'advertising',
            width: 120
          },
          {
            label: '其它(元)',
            name: 'other',
            width: 70
          },
          {
            label: '季度总收入(元)',
            name: 'qrevenue',
            width: 100
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
          width: 100,
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
          label: '登记列表',
          list: [
            {
              label: '审核',
              type: 'primary',
              svg: 'seal',
              method: () => {
              }
            },
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
              svg: 'del',
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
