<template>
  <el-container>
    <el-aside width="380px" class="base-aside">
      <h4 class="aside-title">机构树</h4>
      <Tree :setTree="setTree"></Tree>
    </el-aside>
    
    <el-main class="base-main">
      <h4 class="main-title">机构信息</h4>
      <el-form>
        <el-row class="form-row">
          <el-col :span="12">
            <div class="input-group field-search">
              <label for="s" class="input-group__label">街道办名称</label>
              <select name="street" class="form-control" id="s">
                <option value="1"> </option>
                <option value="2">街道办2</option>
                <option value="3">街道办3</option>
              </select>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="input-group field-search">
              <label for="s" class="input-group__label">工作站名称</label>
              <select name="street" class="form-control" id="s">
                <option value="1"> </option>
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
                <option value="1"> </option>
                <option value="2">街道办2</option>
                <option value="3">街道办3</option>
              </select>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="form-footer-inline is-right">
              <el-button type="success" size="medium">
                <svg-icon icon-class="del"></svg-icon>清空</el-button>
              <el-button type="primary" size="medium">
                <svg-icon icon-class="search"></svg-icon>查询</el-button>
            </div>
          </el-col>
        </el-row>
      </el-form>

      <BTable v-bind="table" class="main-table" />
    </el-main>
  </el-container>
</template>

<script>
import BTable from '@/components/Table'
import Tree from '@/components/Tree/treeSort'
export default {
  components: {
    BTable,
    Tree
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
            label: '街道办名称',
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
            label: '工作站名称',
            name: 'station',
            width: 180
          },
          {
            label: '小区名称',
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
          label: '机构列表'
        }
      },
      setTree: [{
        id: 1,
        name: '福永街道办',
        children: []
      }, {
        id: 2,
        name: '西乡街道办',
        children: [{
          id: 5,
          name: '河西街道办',
          children: [{
            id: 6,
            name: '丽景城',
            children: [{
              id: 8,
              name: '丽景城111',
              children: []
            }]
          }, {
            id: 7,
            name: '丽华家园',
            children: []
          }]
        }, {
          id: 3,
          name: '庄边工作站',
          children: []
        }, {
          id: 4,
          name: '盐田工作站',
          children: []
        }]
      }]
    }
  }
}
</script>

<style>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.is-right {
  padding-top: 5px;
}
</style>



