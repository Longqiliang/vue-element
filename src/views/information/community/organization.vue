<template>
  <div>
    <el-form ref="communityForm">
      <el-row type="flex" class="form-row">
        <!-- <el-col :span="8">
          <div class="input-group field-search">
            <label for="s" class="input-group__label">是否成立党支部</label>
            <select name="street" class="form-control" id="s">
              <option value="1">是</option>
              <option value="2">否</option>
            </select>
          </div>
        </el-col> -->

        <el-col :span="8">
          <div class="input-group field-search">
            <label for="s" class="input-group__label">党支部名称</label>
            <el-input></el-input>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="input-group field-search">
            <label for="s" class="input-group__label">党支部成立时间</label>
            <el-date-picker placeholder=""></el-date-picker>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="input-group field-search">
            <label for="s" class="input-group__label">委员数量</label>
            <el-input></el-input>
          </div>
        </el-col>
        <!-- <el-col :span="8">
          <div class="input-group field-search">
            <label for="s" class="input-group__label">党支部书记</label>
             <el-input></el-input>
          </div>
        </el-col> -->
      </el-row>
      <!-- <el-row type="flex" class="form-row">
        
        x
       
      </el-row> -->
    </el-form>
    <BTable v-bind="table" class="table-mar" />
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
          label: '人员组成',
          list: [
            {
              align: 'left',
              render: (h, ctx) => {
                return (
                  <span>小区党员名单>></span>
                )
              },
              method: (index, row) => {

              }
            }
          ]
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.table-mar {
  margin-top: 15px;
}

 
</style>
