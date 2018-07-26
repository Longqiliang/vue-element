<template>
<div class="base-detail">
<el-form ref="noticeForm" >
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">标题</label>
          <el-input placeholder="请输入标题"></el-input> 
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">类型</label>
          <select name="street" class="form-control" id="s">
            <option value="1">类型1</option>
            <option value="2">类型2</option>
            <option value="3">类型3</option>
          </select>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">发送时间</label>
           <el-date-picker
            unlink-panels
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
        </div>
      </el-col>
    </el-row>
    <el-row type="flex" class="form-row">
      <el-col :span="8">
        <div class="input-group field-search">
          <label for="s" class="input-group__label">状态</label>
          <select name="street" class="form-control" id="s">
            <option value="1">状态1</option>
            <option value="2">状态2</option>
            <option value="3">状态3</option>
          </select>
        </div>
      </el-col>
    </el-row>
    <div class="form-footer">
      <el-button type="success" size="medium"><svg-icon icon-class="del"></svg-icon>清空</el-button>
      <el-button type="primary" size="medium"><svg-icon icon-class="search"></svg-icon>查询</el-button>
    </div>
  </el-form>
  <BTable v-bind="table"/>
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
      table: {
        list: [
          {
            index: '1',
            title: '关于蚝业社区豪业华庭推荐第三届业委会候选人...',
            type: '小区建设',
            datetime: '2018-04-28',
            receptance: '258/500',
            feedback: '是',
            response: '158/300',
            status: '已发送'
          },
          {
            index: '2',
            title: '关于成立业主大会的告知书',
            type: '信访投诉',
            datetime: '2018-04-28',
            receptance: '258/500',
            feedback: '否',
            response: '0',
            status: '未发送'
          }
        ],
        isMultiple: true,
        tableHeader: [
          {
            label: '序号',
            name: 'index',
            width: 50
          },
          {
            label: '标题',
            name: 'title',
            width: 240
          },
          {
            label: '类型',
            name: 'type',
            width: 80
          },
          {
            label: '发送时间',
            name: 'datetime',
            width: 100
          },
          {
            label: '接受率',
            name: 'receptance',
            width: 80
          },
          {
            label: '是否需要反馈',
            name: 'feedback',
            width: 100
          },
          {
            label: '反馈率',
            name: 'response',
            width: 80
          },
          {
            label: '状态',
            name: 'status',
            width: 80
          }
        ],
        listQuery: {
          pageIndex: 1,
          pageSize: 10
        },
        total: 50,
        operates: {
          show: true,
          width: 120,
          list: [
            {
              label: '查看',
              type: 'text',
              method: (index, row) => {
                this.handleDetail(index, row)
              }
            },
            {
              label: '编辑',
              type: 'text',
              filter: (row) => {
                if (row.status === '未发送') {
                  return true
                } else {
                  return false
                }
              },
              method: (index, row) => {
                this.handleCreate(index, row)
              }
            }
          ]
        },
        title: {
          show: true,
          align: 'left',
          label: '公告列表',
          list: [
            {
              label: '编辑',
              class: 'el-button btn-edit',
              svg: 'write',
              method: () => {
              }
            },
            {
              label: '发送',
              type: 'success',
              svg: 'write',
              method: () => {
              }
            },
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
    handleDetail() {
      this.$router.push({path: `/transaction/notice/add`})
    },
    handleCreate() {
      this.$router.push({path: `/transaction/notice/add`})
    }
  }
}
</script>

<style>

</style>
