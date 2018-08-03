<template>
  <div class="regulations-wrap">
    <div class="regula-top">
      <div class="regula-rigth form-footer-inline">
        <el-button type="success" size="medium">
          <svg-icon icon-class="del"></svg-icon>清空</el-button>
        <el-button type="primary" size="medium">
          <svg-icon icon-class="search"></svg-icon>查询</el-button>
      </div>
    </div>
    <div class="reg-operation">
      <el-col :span="12">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">法规名称</label>
          <select name="street" class="form-control" id="s">
            <option value="1">请输入法规名称1</option>
            <option value="2">请输入法规名称2</option>
            <option value="3">请输入法规名称3</option>
          </select>
        </div>
      </el-col>
      <!-- <el-col :span="6" class="query-title">
        <el-input v-model="startTime" id="border-right" width="30%">
          <template slot="prepend">成立时间</template>
        </el-input>
      </el-col>
      <el-col :span="6" class="query-title">
        <el-input v-model="endTime" width="30%">
          <template slot="prepend">至</template>
        </el-input>
      </el-col> -->
      <el-col :span="13">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">级别</label>
          <select name="street" class="form-control" id="s">
            <option value="1">国家</option>
            <option value="2">请输入法规名称2</option>
            <option value="3">请输入法规名称3</option>
          </select>
        </div>
      </el-col>
    </div>
    <BTable v-bind="table" @handleSelectionChange="handleSelectionChange" @handleCurrentChange="handleCurrentChange" />
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
      startTime: '',
      endTime: '',
      table: {
        list: [
          {
            index: '1',
            name: '丽华佳园',
            street: '国家级',
            time: '2018.03.06-2019.03.06'
          },
          {
            index: '2',
            name: '丽华佳园',
            street: '省级',
            time: '2018.03.06-2019.03.06'
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
            label: '名称',
            name: 'name',
            width: 350
          },
          {
            label: '级别',
            name: 'street',
            width: 200
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
              label: '下载',
              type: 'success',
              svg: 'download',
              method: () => {

              }
            },
            {
              label: '新增',
              type: 'primary',
              svg: 'add',
              method: (row) => {
                this.add(row)
              }
            },
            {
              label: '导入',
              type: 'warning',
              svg: 'download',
              method: () => {

              }
            },
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
  },
  methods: {
    handleCurrentChange (val) {
      this.table.listQuery.pageIndex = val
    },
    handleSelectionChange (val) {
      this.table.multipleSelection = val
    },
    add (row) {
      this.$router.push({ path: '/information/policyBase/add' })
    }
  }
}
</script>

<style lang="scss" scoped>

.regulations-wrap {
  width: 100%;
}
.regula-top {
  width: 100%;
  height: 40px;
  .regula-rigth {
    float: right;
  }
}
.reg-operation {
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;
  .el-col-12 {
    margin: 3px 20px 0 0;
  }
}
</style>
