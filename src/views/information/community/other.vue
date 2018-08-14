<template>
  <div>
    <div class="table-group-title">
      <h3>配套人员</h3>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item title="前期物业招标文件" name="1">
        <BTable v-bind="table1" />
      </el-collapse-item>
      <el-collapse-item title="应急预案" name="2">
        <BTable v-bind="table1" />
      </el-collapse-item>
      <el-collapse-item title="备案事项" name="3">
        <BTable v-bind="table1" />
      </el-collapse-item>
      <el-collapse-item title="其他" name="4">
        <BTable v-bind="table1" />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
import BTable from '@/components/Table'
import { parseTime } from '@/filter'
export default {
  components: {
    BTable
  },
  data () {
    return {
      activeNames: ['1'],
      table1: {
        show: true,
        list: [
          {
            filename: '物业服务标准和物业费测算依据',
            updatetime: 1531829965671
          },
          {
            filename: '物业管理服务质量 环境 职业健康安全管理体系',
            updatetime: 1531829965671
          }
        ],
        isMultiple: false,
        tableHeader: [
          {
            label: '文件名称',
            name: 'filename',
            width: 600
          },
          {
            label: '上传时间',
            name: 'updatetime',
            slot: true,
            formatter: (row, item) => {
              if (row.updatetime) {
                return parseTime(row.updatetime, '{y}.{m}.{d}')
              }
            },
            width: 120
          }
        ],
        operates: {
          show: true,
          list: [
            {
              label: '下载附件',
              type: 'text',
              method: (index, row) => {

              }
            }
          ]
        },
        title: {
          // show: true,
          // align: 'center',
          // label: '前期物业招标文件',
          // list: [
          //   {
          //     label: '',
          //     svg: 'remove',
          //     method: (index, row) => {
          //       this.toogleShow()
          //     }
          //   }
          // ]
        }
      }
    }
  },
  methods: {
    toogleShow () {
      this.table1.show = !this.table1.show
    },
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
</style>
