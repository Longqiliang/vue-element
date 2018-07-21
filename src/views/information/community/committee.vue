<template>
  <BTable v-bind="table" />
</template>

<script>
import BTable from '@/components/table'
export default {
  components: {
    BTable
  },
  data () {
    return {
      table: {
        tableHeader: [
          {
            label: '姓名',
            name: 'name',
            width: 80
          },
          {
            label: '职务',
            name: 'position',
            width: 90
          },
          {
            label: '性别',
            name: 'sex',
            width: 60
          },
          {
            label: '年龄',
            name: 'age',
            width: 70
          },
          {
            label: '身份证号码',
            name: 'idcard',
            width: 150
          },
          {
            label: '政治面貌',
            name: 'politicsStatus',
            width: 90
          },
          {
            label: '工作单位',
            name: 'unit',
            width: 100
          },
          {
            label: '学历',
            name: 'education',
            width: 80
          },
          {
            label: '楼房座号',
            name: 'floor',
            width: 100
          },
          {
            label: '联系方式',
            name: 'phone',
            width: 120
          }
        ],
        list: [
          {
            name: '吴均',
            position: '主任',
            sex: '男',
            age: '45',
            idcard: '362212454422455',
            politicsStatus: '群众',
            unit: '河源电器',
            education: '高中',
            floor: '2-606',
            phone: '136-0212-2222'
          },
          {
            name: '王属',
            position: '执行秘书',
            sex: '男',
            age: '45',
            idcard: '36221241214422455',
            politicsStatus: '党员',
            unit: '深圳银行',
            education: '大专',
            floor: '5-403',
            phone: '136-4534-2222'
          }
        ],
        title: {
          show: true,
          align: 'left',
          label: '人员组成'
        }
      }
    }
  }
}
</script>

<style>

</style>
