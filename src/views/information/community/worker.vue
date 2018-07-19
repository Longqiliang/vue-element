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
export default {
  components: {
    BTable
  },
  data () {
    return {
      table1: {
        list: [
          {
            name: '刘元',
            sex: '男',
            age: '30',
            position: '总经理',
            idcard: '367878787878787',
            social: '136342222462',
            phone: '20%'
          }
        ],
        isMultiple: false,
        tableHeader: [
          {
            label: '姓名',
            name: 'name',
            width: 90
          },
          {
            label: '性别',
            name: 'sex',
            width: 45
          },
          {
            label: '年龄',
            name: 'age',
            width: 45
          },
          {
            label: '职务',
            name: 'position',
            width: 80
          },
          {
            label: '身份证号码',
            name: 'idcard',
            width: 140
          },
          {
            label: '社保号码',
            name: 'social',
            width: 100
          },
          {
            label: '联系方式',
            name: 'phone',
            width: 100
          },
          {
            label: '简历',
            width: 60
          },
          {
            label: '是否有证',
            width: 90
          }
        ],
        operates: {
          show: false
        },
        title: {
          show: true,
          align: 'center',
          label: '物业经理',
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
