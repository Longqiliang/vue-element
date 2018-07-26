<template>
  <div>
    <div class="query-title">
      <div>
        <el-input placeholder="请输入企业名称" v-model="input3">
          <template slot="prepend">企业名称</template>
        </el-input>
      </div>
      <div>
        <el-button type="success">
          <svg-icon icon-class="del"></svg-icon>
          <span>清空</span>
        </el-button>
        <el-button type="primary">
          <svg-icon icon-class="search"></svg-icon>
          <span>查询</span>
        </el-button>
      </div>
    </div>
    <div class="service-list">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column label="物业服务企业列表">

          <el-table-column type="selection" width="55" align="center">
          </el-table-column>
          <el-table-column prop="order" label="序号" width="120" align="center">
          </el-table-column>
          <el-table-column prop="name" label="企业名称" width="320" align="center">
          </el-table-column>
          <el-table-column label="宝安管理项目数量" width="200" align="center">
            <template slot-scope="scope">
              <el-popover placement="bottom" width="200" trigger="hover" content='丽景城、丽华桂园、丽景城、丽华桂园、丽景城、丽华桂园'>
                <a style="color:#649efc;" slot="reference" @click="projectlib(scope.$index)">{{scope.row.num.number}}</a>
              </el-popover>
            </template>
          </el-table-column>
          <el-table-column prop="phone" label="联系电话" width="320" align="center">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip align="center">
            <template slot-scope="scope">
              <div style="cursor: pointer; color:#649efc;" @click="jumpToDetail(scope.$index)">查看详情</div>
            </template>
          </el-table-column>
        </el-table-column>

      </el-table>
      <div class="operation">
        <el-button type="danger" size="medium">
          查看项目详情
        </el-button>
        <el-button type="warning" size="medium">
          <svg-icon icon-class="export"></svg-icon>
          <span>导出</span>
        </el-button>
        <el-button type="primary" size="medium">
          <svg-icon icon-class="add"></svg-icon>
          <span>新增</span>
        </el-button>
        <el-button type="info" size="medium">
          <svg-icon icon-class="remove"></svg-icon>
          <span>删除</span>
        </el-button>
      </div>
    </div>
    <el-pagination :total="total" :current-page="listQuery.pageIndex" :page-size="listQuery.pageSize" layout="prev, pager, next, ->, jumper, slot, total" @current-change="handleCurrentChange" class="pagination">
      <slot>
        <span class="pagination__count">{{pageCount}}</span>
      </slot>

    </el-pagination>
  </div>

</template>

<script>
import BTable from '@/components/Table'
export default {
  data () {
    return {
      input3: '',
      align: 'center',
      tableData3: [{
        order: 1,
        name: '深圳市开元国际物流有限公司',
        num: {
          number: 7,
          content: '丽景城、丽华桂园、丽景城、丽华桂园、丽景城、丽华桂园'
        },
        legal: '李安',
        phone: '132-2342-5243',
        look: '查看详情'
      }, {
        order: 2,
        name: '深圳市开元国际物流有限公司',
        num: {
          number: 7,
          content: '丽景城、丽华桂园、丽景城、丽华桂园、丽景城、丽华桂园'
        },
        legal: '李安',
        phone: '132-2342-5243',
        look: '查看详情'
      }],
      multipleSelection: [],
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      total: 50
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
      console.log(val)
    },
    jumpToDetail (id) {
      this.$router.push({ path: '/information/serviceBase/serviceDetails/' + id })
    },
    projectlib (id) {
      this.$router.push({ path: '/information/serviceBase/project/library/' + id })
    },
    handleCurrentChange (val) {
      this.listQuery.pageIndex = val
    }
  },
  computed: {
    columns () {
      if (this.isMultiple) {
        this.tableHeader.unshift({
          type: 'selection',
          width: 50
        })
      }
      return this.tableHeader
    },
    pageCount () {
      let count = Math.ceil(this.total / this.listQuery.pageSize)
      return `共${count}页、`
    }
  }
}
</script>

<style lang="scss" scoped>

.query-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  div:nth-child(1){
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
