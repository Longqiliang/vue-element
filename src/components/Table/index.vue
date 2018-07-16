<template>
<div> 
    <div class="table-header">
      <h4 class="table-title">小区列表</h4>
      <div class="table-title-slot">
        <el-button type="warning" size="small">导出</el-button>
        <el-button type="primary" size="small">新增</el-button>
        <el-button type="danger" size="small">删除</el-button>
      </div>
    </div>
    <el-table :data="table" style="width: 100%" border header-cell-class-name="default-bg">
      <el-table-column v-for="(col, c) in columns" :prop="col.name || col.label" :key="c" :label="col.label" :min-width="col.width" :align="col.align || align" :type="col.type">
          <template v-if="col.children">
              <el-table-column v-for="(ch,o) in col.children" :key="o" :label="ch.label" :prop="ch.name || ch.label"></el-table-column>
          </template>
          <template v-else-if="col.slot"  slot-scope="scope">
              {{ scope.row.name }}
          </template>
      </el-table-column>  
    </el-table>
    <el-pagination :total="total" :current-page="listQuery.pageIndex" :page-size="listQuery.pageSize" layout="prev, pager, next, ->, jumper, slot, total" @current-change="handleCurrentChange" class="pagination">
      <slot>
        <span class="pagination__count">{{pageCount}}</span>
      </slot>
    </el-pagination>   
</div>

</template>

<script>
export default {
  data() {
    return {
      table: [
        {
          index: "1",
          name: "丽华佳园",
          street: "福永街道",
          station: "富华工作站",
          houseWork: "物业服务企业",
          person: "李安",
          phone: "136-2342-2462",
          completeness: "20%"
        }
      ],
      align: "center",
      isMultiple: true,
      tableHeader: [
        {
          label: "序号",
          name: "index",
          width: 50
        },
        {
          label: "小区名称",
          name: "name",
          width: 80
        },
        {
          label: "所属街道办",
          name: "street",
          width: 90
        },
        {
          label: "所属工作站",
          name: "station",
          width: 90
        },
        {
          label: "物业服务企业",
          name: "houseWork",
          width: 160
        },
        {
          label: "物业经理",
          name: "person",
          width: 80
        },
        {
          label: "联系方式",
          name: "phone",
          width: 140
        },
        {
          label: "信息完成度",
          name: "completeness",
          width: 100
        },
        {
          label: "操作",
          name: "查看详情",
          width: 100
        }
      ],
      listQuery: {
        pageIndex: 1,
        pageSize: 10
      },
      total: 50,
      form:{}
    }
  },
  computed:{
      columns() {
        if(this.isMultiple){
            this.tableHeader.unshift({
                type: 'selection',
                width: 50
            })   
        }
        return this.tableHeader 
      },
      pageCount() {
        let count =  Math.ceil(this.total/this.listQuery.pageSize)
        return `共${count}页、`
      }
  },
  methods: {
    handleCurrentChange(val) {
      this.listQuery.pageIndex = val
    }
  }
};
</script>

<style>
</style>
