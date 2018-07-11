<template>
    <el-table :data="table" style="width: 100%">
        <el-table-column v-for="(col, c) in columns" :prop="col.name || col.label" :key="c" :label="col.label" :width="col.width">
            <template v-if="col.children">
                <el-table-column v-for="(ch,o) in col.children" :key="o" :label="ch.label" :prop="ch.name || ch.label"></el-table-column>
            </template>
            <template v-else-if="col.slot"  slot-scope="scope">
                {{ scope.row.name }}
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
export default {
  data() {
    return {
      table: [],
      columns: [
        {
          label: '序号',
          width: 50
        },
        {
          label: '小区名称',
          width: 80
        },
        {
          label: '所属街道办',
          width: 90
        },
        {
          label: '所属工作站',
          width: 90
        },
        {
          label: '物业服务企业',
          width: 160
        },
        {
          label: '物业经理',
          width: 80
        },
        {
          label: '联系方式',
          width: 140
        },
        {
          label: '信息完成度',
          width: 100
        },
        {
          label: '操作',
          width: 100
        }
      ]
    }
  }
}
</script>

<style>

</style>
