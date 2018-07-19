<template>
  <el-container>
    <el-aside width="380px" class="base-aside">
      <h4 class="aside-title">机构树</h4>
      <el-tree :data="treeData" node-key="id" :props="defaultProps" :indent="40" :accordion="true" class="base-tree">
        <div slot-scope="{ node, data }">
          <span></span>
          <span>{{ node.label }}</span>
        </div>
      </el-tree>
    </el-aside>
    <el-main class="base-main">
      <h4 class="main-title">组织列表</h4>
      <el-form>
        <el-row class="form-row">
          <el-col :span="12">
            <div class="input-group field-search">
              <label for="s" class="input-group__label">街道办名称</label>
              <select name="street" class="form-control" id="s">
                <option value="1">街道办1</option>
                <option value="2">街道办2</option>
                <option value="3">街道办3</option>
              </select>
            </div>
          </el-col>
            <el-col :span="12">
            <div class="input-group field-search">
              <label for="s" class="input-group__label">工作站名称</label>
              <select name="street" class="form-control" id="s">
                <option value="1">街道办1</option>
                <option value="2">街道办2</option>
                <option value="3">街道办3</option>
              </select>
            </div>
          </el-col>
        </el-row>
        <el-row class="form-row">
          <el-col :span="12">
            <div class="input-group field-search">
              <label for="s" class="input-group__label">小区名称</label>
              <select name="street" class="form-control" id="s">
                <option value="1">街道办1</option>
                <option value="2">街道办2</option>
                <option value="3">街道办3</option>
              </select>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="form-footer-inline is-right">
              <el-button type="success" size="mini"><svg-icon icon-class="del"></svg-icon>清空</el-button>
              <el-button type="primary" size="mini"><svg-icon icon-class="search"></svg-icon>查询</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <BTable v-bind="table" class="main-table"/>
    </el-main>
  </el-container>
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
        total: 1,
        list: [
          {
            num: '1',
            street: '永福街道办',
            station: '富华工作站',
            community: '丽景城',
            detail: '提示文字'
          }
        ],
        isMultiple: false,
        tableHeader: [
          {
            label: '序号',
            name: 'num',
            width: 80
          },
          {
            label: '街道办',
            name: 'street',
            width: 200,
            render: (h, params) => {
              return (
                <el-tooltip placement="top" effect="light">
                  <div slot="content">{params.row.detail}</div>
                  <span>{params.row.street}</span>
                </el-tooltip>
              )
            }
          },
          {
            label: '工作站',
            name: 'station',
            width: 180
          },
          {
            label: '小区',
            name: 'community',
            wdith: 150
          }
        ],
        operates: {
          show: false
        },
        title: {
          show: true,
          align: 'left',
          label: '组织机构库'
        }
      },
      treeData: [{
        id: 1,
        label: '福永街道办'
      }, {
        id: 2,
        label: '西乡街道办',
        children: [{
          id: 5,
          label: '河西街道办',
          children: [{
            id: 6,
            label: '丽景城',
            children: [{
              id: 8,
              label: '丽景城111'
            }]
          }, {
            id: 7,
            label: '丽华家园'
          }]
        }, {
          id: 3,
          label: '庄边工作站'
        }, {
          id: 4,
          label: '盐田工作站'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  }
}
</script>



