<template>
    <el-table :data="table">
        <el-table-column v-for="(col, c) in columns"
            :prop="c.id || col.label"
            :key="c"
            :label="col.label"
            :width="col.width">
        </el-table-column>
    </el-table>
</template>

<script>
export default {
    data () {
        return {
            table: '',
            columns:[{
                label: '序号'
            }]
        }
    }
}
</script>

<style>

</style>
