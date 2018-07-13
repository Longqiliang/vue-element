<template>
  <div>
    <div class="query-title">
      <el-input placeholder="请输入企业名称" v-model="input3" style="width:40%;">
        <template slot="prepend">企业名称</template>
      </el-input>
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
                <a style="color:#649efc;" slot="reference">{{scope.row.num.number}}</a>
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
        <el-button type="danger" size="small">
          查看项目详情
        </el-button>
        <el-button type="warning" size="small">
          <svg-icon icon-class="export"></svg-icon>
          <span>导出</span>
        </el-button>
        <el-button type="primary" size="small">
          <svg-icon icon-class="add"></svg-icon>
          <span>新增</span>
        </el-button>
        <el-button type="info" size="small">
          <svg-icon icon-class="remove"></svg-icon>
          <span>删除</span>
        </el-button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      input3: '',
      align: "center",
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
      multipleSelection: []
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val;
    },
    jumpToDetail (id) {screenX
      this.$router.push({ path: '/information/serviceBase/details/' + id })
    }
  }
}
</script>

<style>
.query-title {
  display: flex;
  justify-content: space-between;
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
</style>
