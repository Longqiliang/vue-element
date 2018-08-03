<template>
  <div class="base-detail flex-scroll">
    <div class="query-title">
      <div>
        <el-input placeholder="请输入企业名称" v-model="input3">
          <template slot="prepend">企业名称</template>
        </el-input>
      </div>
      <div class="form-footer">
        <el-button type="success" size="medium">
          <svg-icon icon-class="del"></svg-icon>
          清空
        </el-button>
        <el-button type="primary" size="medium">
          <svg-icon icon-class="search"></svg-icon>
          查询
        </el-button>
      </div>
    </div>
    <div class="service-list">
      <BTable v-bind="table" @handleSelectionChange="handleSelectionChange" @handleCurrentChange="handleCurrentChange" />
    </div>
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
      input3: '',
      table: {
        list: [
          {
            index: '1',
            name: '深圳开元国际物流有限公司',
            has: '无',
            street: '7',
            detail: '丽景城，丽华桂园，荣太园，丽景城，丽华桂园，荣太园',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '2',
            name: '深圳开元国际物流有限公司',
            has: '无',
            street: '7',
            detail: '丽景城，丽华桂园，荣太园，丽景城，丽华桂园，荣太园',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '3',
            name: '深圳开元国际物流有限公司',
            has: '无',
            street: '7',
            detail: '丽景城，丽华桂园，荣太园，丽景城，丽华桂园，荣太园',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '4',
            name: '深圳开元国际物流有限公司',
            has: '无',
            street: '7',
            detail: '丽景城，丽华桂园，荣太园，丽景城，丽华桂园，荣太园',
            station: '李安',
            phone: '136-2342-2462'
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            label: '序号',
            name: 'index',
            width: 100
          },
          {
            label: '企业名称',
            name: 'name',
            width: 250
          },
          {
            label: '上级公司',
            name: 'has',
            width: 150
          },
          {
            label: '分/子公司数量',
            name: 'street',
            width: 150,
            render: (h, params) => {
              return (
                <el-popover placement="bottom" width="300" trigger="hover">
                  <div>{params.row.detail}</div>
                  <span slot="reference">{params.row.street}</span>
                </el-popover>
              )
            }
          },
          {
            label: '宝安管理项目数量',
            name: 'street',
            width: 150,
            render: (h, params) => {
              return (
                <el-popover placement="bottom" width="300" trigger="hover">
                  <div>{params.row.detail}</div>
                  <span slot="reference">{params.row.street}</span>
                </el-popover>
              )
            },
            method: (index, row) => {
              this.projectlib(index, row)
            }
          },
          {
            label: '法人',
            name: 'station',
            width: 100
          },
          {
            label: '联系方式',
            name: 'phone',
            width: 160
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
          label: '物业服务企业列表列表',
          list: [
            // {
            //   render: (h, ctx) => {
            //     return (
            //       <el-button nativeOnClick={ctx.method}>查看项目详情</el-button>
            //     )
            //   },
            //   method: (index, row) => {
            //     this.projectlib()
            //   }
            // },
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
    handleCurrentChange (val) {
      this.table.listQuery.pageIndex = val
    },
    handleDetail (index, row) {
      console.log(row)
      this.$router.push({ path: '/information/serviceBase/serviceDetails/' + row.index })
    },
    projectlib (index, row) {
      // var val = this.table.multipleSelection
      // console.log(this.table.multipleSelection)
      // if (val.length === 1) {
      console.log(index)
      this.$router.push({ path: '/information/serviceBase/project/library/' + row.index })
      // } else {
      //   this.$message({
      //     message: '请选择一个对应项目',
      //     type: 'warning'
      //   })
      // }
    },
    handleSelectionChange (val) {
      this.table.multipleSelection = val
    },
    handleSelectionRemove (val) {
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

<style lang="scss" scoped>
.query-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:nth-child(1) {
    width: 70%;
  }
}
.service-list {
  margin-top: 20px;
  position: relative;
}
.operation {
  position: absolute;
  top: 6px;
  right: 10px;
  span {
    font-size: 14px;
  }
}
</style>