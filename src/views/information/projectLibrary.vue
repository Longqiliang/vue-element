<template>
  <div>
    <div class="query-title">
      <div>
        <el-input placeholder="请输入小区名称" v-model="input3">
          <template slot="prepend">小区名称</template>
        </el-input>
      </div>
      <div class="query-center">
        <el-input v-model="input3" style="width:50%;">
          <template slot="prepend">成立时间</template>
        </el-input>
        <el-input v-model="input3" style="width:50%;">
          <template slot="prepend">至</template>
        </el-input>
      </div>
      <div>
        <el-input placeholder="请输入项目名称" v-model="input3">
          <template slot="prepend">项目名称</template>
        </el-input>
      </div>
    </div>
    <div class="inquire">
      <el-button type="success">
        <svg-icon icon-class="del"></svg-icon>
        <span>清空</span>
      </el-button>
      <el-button type="primary">
        <svg-icon icon-class="search"></svg-icon>
        <span>查询</span>
      </el-button>
    </div>
    <div class="service-list">
      <el-table ref="multipleTable" :data="tableData3" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column label="项目列表">

          <el-table-column type="selection" width="50" align="center">
          </el-table-column>
          <el-table-column prop="order" label="序号" width="70" align="center">
          </el-table-column>
          <el-table-column prop="name" label="小区名称" width="250" align="center">
          </el-table-column>
          <el-table-column prop="time" label="合同服务时间" width="300" align="center">
          </el-table-column>
          <el-table-column prop="manager" label="物业经理" width="200" align="center">
          </el-table-column>
          <el-table-column prop="phone" label="联系电话" width="220" align="center">
          </el-table-column>
          <el-table-column label="操作" show-overflow-tooltip align="center">
            <template slot-scope="scope">
              <div style="cursor: pointer; color:#649efc;" @click="jumpToDetail(scope.$index)">查看详情</div>
            </template>
          </el-table-column>
        </el-table-column>

      </el-table>
      <div class="operation">
        <el-button type="warning" size="small">
          <svg-icon icon-class="export"></svg-icon>
          <span>导出</span>
        </el-button>
        <el-button type="danger" size="small">
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
import $ from 'jquery'
export default {
  data () {
    return {
      input3: '',
      tableData3: [{
        order: 1,
        name: '荣泰园',
        time: '2018.01.03-2019.01.05',
        manager: '李安',
        phone: '132-2342-5243'
      }, {
        order: 2,
        name: '御景城',
        time: '2018.01.03-2019.01.05',
        manager: '李安',
        phone: '132-2342-5243'
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
      this.multipleSelection = val;
    },
    jumpToDetail (id) {      screenX
      this.$router.push({ path: '/information/serviceBase/project/details/' + id })
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
