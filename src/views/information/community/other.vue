<template>
    <div>
        <div class="table-group-title">
            <h3>配套人员</h3>
        </div>
        <BTable v-bind="table1" class="table-item"/>
        <BTable v-bind="table1" class="table-item"/>
        <BTable v-bind="table1" class="table-item"/>
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
      table1: {
        list: [
          {
            filename: '前期物业招标文件',
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
          show: true,
          align: 'center',
          label: '前期物业招标文件',
          list: [
            {
              label: '',
              svg: 'remove',
              method: (index, row) => {
                this.sideDown()
              }
            }
          ]
        }
      }
    }
  },
  methods: {
    sideDown() {

    }
  }
}
</script>

<style>

</style>
