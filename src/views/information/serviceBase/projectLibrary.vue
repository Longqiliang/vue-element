<template>
  <div>
    <div class="query-title">
      <div>
        <el-input placeholder="请输入小区名称" v-model="firmName">
          <template slot="prepend">小区名称</template>
        </el-input>
      </div>
      <div class="query-center">
        <el-input v-model="startTime" id="border-right">
          <template slot="prepend">成立时间</template>
        </el-input>
        <el-input v-model="endTime">
          <template slot="prepend">至</template>
        </el-input>
      </div>
      <div>
        <el-input placeholder="请输入项目名称" v-model="proName">
          <template slot="prepend">项目名称</template>
        </el-input>
      </div>
    </div>
    <div class="inquire">
      <el-button type="success" @click="empty">
        <svg-icon icon-class="del"></svg-icon>
        <span>清空</span>
      </el-button>
      <el-button type="primary">
        <svg-icon icon-class="search"></svg-icon>
        <span>查询</span>
      </el-button>
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
      firmName: '',
      startTime: '',
      endTime: '',
      proName: '',
      table: {
        list: [
          {
            index: '1',
            name: '深圳开元国际物流有限公司',
            street: '2018.3.6-2019.3.6',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '2',
            name: '深圳开元国际物流有限公司',
            street: '2018.3.6-2019.3.6',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '3',
            name: '深圳开元国际物流有限公司',
            street: '2018.3.6-2019.3.6',
            station: '李安',
            phone: '136-2342-2462'
          },
          {
            index: '4',
            name: '深圳开元国际物流有限公司',
            street: '2018.3.6-2019.3.6',
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
            label: '小区名称',
            name: 'name',
            width: 250
          },
          {
            label: '合同服务时间',
            name: 'street',
            width: 200
          },
          {
            label: '物业经理',
            name: 'station',
            width: 200
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
            {
              label: '导出',
              type: 'warning',
              svg: 'export',
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
    empty () {
      this.firmName = ''
      this.startTime = ''
      this.endTime = ''
      this.proName = ''
    },
    handleCurrentChange (val) {
      this.table.listQuery.pageIndex = val
    },
    handleDetail (id, row) {
      console.log(row.index)
      this.$router.push({ path: '/information/serviceBase/project/details/' + row.index })
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
  display: flex;
  width: 100%;
  .query-center {
    display: flex;
    margin: 0 10px;
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
}
.inquire {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
