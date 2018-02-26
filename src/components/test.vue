<template>
<div class="test" :data-table="table">
  <el-table
    ref="multipleTable"
    :data="table"
    style="width:100%"
    @selection-change="handleSelectionChange"
    border>
    <el-table-column 
      type="expand"
      width="50">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="标签">
            <span>{{props.row.tag}}</span>
          </el-form-item>
          <el-form-item label="地址">
            <span>{{props.row.address}}</span>
          </el-form-item>
          <el-form-item label="日期">
            <span>{{props.row.date}}</span>
          </el-form-item>
          <el-form-item label="描述">
            <span>{{props.row.desc}}</span>
          </el-form-item>
          <el-form-item label="号外">
            <span>{{props.row.extras}}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="120">
      <template slot-scope="scope">
        {{ scope.row.date }}
      </template>
     </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="标签"
      show-overfllow-tooltip>
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag.length > 2 ? 'primary' : 'success'"
          close-transition>
          {{scope.row.tag}}
        </el-tag>
      </template>  
    </el-table-column>
  </el-table>
  <!-- <div class="btn-box">
    <el-button @click="toggleSelection([table[1]])">切换第二行的选中状态</el-button>
    <el-button @click="toggleSelection()">取消选择</el-button>
  </div> -->
</div>
  
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      table: [
        {
          date: '2017-12-12',
          name: '超人',
          address: '美国',
          tag: '漫威',
          desc: '传世经典，Supper Man',
          extras: '超人粉丝见面会'
        },
        {
          date: '2017-12-11',
          name: '亚丝娜',
          address: '东京',
          tag: '刀剑神域',
          desc: '日本神作，SAO',
          extras: '序列之战即将上映'
        },
        {
          date: '2017-12-12',
          name: '超人',
          address: '美国',
          tag: '漫威',
          desc: '传世经典，Supper Man',
          extras: '超人粉丝见面会'
        },
        {
          date: '2017-12-11',
          name: '亚丝娜',
          address: '东京',
          tag: '刀剑神域',
          desc: '日本神作，SAO',
          extras: '序列之战即将上映'
        },
        {
          date: '2017-12-12',
          name: '超人',
          address: '美国',
          tag: '漫威',
          desc: '传世经典，Supper Man',
          extras: '超人粉丝见面会'
        },
        {
          date: '2017-12-11',
          name: '亚丝娜',
          address: '东京',
          tag: '刀剑神域',
          desc: '日本神作，SAO',
          extras: '序列之战即将上映'
        },
        {
          date: '2017-12-12',
          name: '超人',
          address: '美国',
          tag: '漫威',
          desc: '传世经典，Supper Man',
          extras: '超人粉丝见面会'
        }
      ],
      props: ['table'],
      multipleSelection: []
    }
  },
  methods: {
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-table-expand {
  $expand-width:90px;
  $expand-mar:0px;
  $expand-color:#99a9bf;
  font-size: 0;
  label {
    width: $expand-width;
    color: $expand-color;
  }
  .el-form-item {
    margin-right: $expand-mar;
    margin-bottom: $expand-mar;
    width: 50%;
  }
}
</style>

