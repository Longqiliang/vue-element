<template>
<div>
  <el-form ref="communityForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">楼栋号</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">业主姓名</label>
          <select name="street" class="form-control" id="s">
            <option value="1">街道办1</option>
            <option value="2">街道办2</option>
            <option value="3">街道办3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">身份证号</label>
          <el-input placeholder="请输入身份证号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">房产证号</label>
          <el-input placeholder="请输入房产证号"></el-input>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="mini"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="mini"><svg-icon icon-class="search"></svg-icon>查询</el-button>
    </div>
  </el-form>
    
   <BTable v-bind="table" @handleSelectionChange="handleSelectionChange"  @handleCurrentChange="handleCurrentChange" />
</div>

</template>

<script>
import BTable from '@/components/Table'
export default {
  components: {
    BTable
  },
  data() {
    return {
      table: {
        list: [
          {
            num: '1',
            name: '章华',
            sex: '男',
            idcard: '38021215542142115',
            housecard: '201432585',
            floor: 13,
            room: 'A-103',
            phone: '136-3454-5746',
            score: 70
          },
          {
            num: '2',
            name: '温室',
            sex: '男',
            idcard: '38021215542142115',
            housecard: '201432585',
            floor: 3,
            room: 'A-103',
            phone: '136-3454-5746',
            score: 60
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            laebl: '序号',
            name: 'num',
            width: 60
          },
          {
            label: '业主姓名',
            name: 'name',
            width: 80
          },
          {
            label: '性别',
            name: 'sex',
            width: 80
          },
          {
            label: '身份证号',
            name: 'idcard',
            width: 160
          },
          {
            laebl: '房产证号',
            name: 'housecard',
            width: 120
          },
          {
            laebl: '楼栋号',
            name: 'floor',
            width: 90
          },
          {
            label: '房号',
            name: 'room',
            width: 90
          },
          {
            label: '联系方式',
            name: 'phone',
            width: 150
          },
          {
            label: '诚信分',
            name: 'score',
            render: (h, ctx) => {
              return (
                <el-button type="text">{ctx.row.score}</el-button>
              )
            },
            method: (i, r) => {
              this.handleDetail(i, r)
            }
          }
        ],
        listQuery: {
          pageIndex: 1,
          pageSize: 10
        },
        total: 50,
        title: {
          show: true,
          align: 'left',
          label: '业主列表',
          list: [
            {
              label: '导出',
              type: 'warning',
              svg: 'export',
              method: () => {
                this.export()
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
    handleCurrentChange(val) {
      this.table.listQuery.pageIndex = val
    },
    handleDetail(id, row) {
      this.$router.push({ path: '/information/community/details/' + id + '/generalization' })
    },
    handleSelectionChange(val) {
      this.table.multipleSelection = val
    },
    handleSelectionRemove(val) {
      this.$confirm('此操作将删除所选列表中的信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(this.table.multipleSelection)
      }).catch((err) => {
        console.log(err)
      })
    },
    export () {
      this.exportExcel()
    }
  }
}
</script>

<style>
</style>