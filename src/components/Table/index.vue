<template>
<div>
    <!-- 表格标题 -->
    <template v-if="title.show">
      <div class="table-header">
        <h4 class="table-title" :class="[title.align ? 'is-' + title.align : null]">{{title.label}}</h4>
        <template v-if="title.list && title.list.length">
          <div class="table-title-slot">
            <template v-for="(item, t) in title.list">
              <template v-if="item.render">
                <titleDom :render="item.render" :method="item.method" :key="t"></titleDom>
              </template>
              <template v-else>
                <template v-if="item.type">
                  <el-button :type="item.type" :size="item.size || 'medium'" :icon="item.icon" :key="t" @click.native.prevent="item.method">
                    <template v-if="item.svg">
                      <svg-icon :icon-class="item.svg"></svg-icon>
                    </template>
                    {{item.label}}
                  </el-button>
                </template>
                <template v-else>
                  <span :key="t">
                    <svg-icon :icon-class="item.svg" v-if="item.svg" ></svg-icon>
                    {{item.label}}
                  </span>
                </template>
              </template>
            </template>
          </div>
        </template>
      </div>
    </template>
    <!-- 表格标题 end -->
    <!-- 表格数据 -->
    <el-table :data="list" style="width: 100%" border header-cell-class-name="default-bg"
      @selection-change="handleSelectionChange">
      <el-table-column v-if="isMultiple" type="selection" width="50" align="center"></el-table-column>
      <el-table-column v-for="(col, c) in tableHeader" :prop="col.slot? null : col.name || col.label" :key="c" :label="col.label" :min-width="col.width" :align="col.align || align" :type="col.type">
          <!-- <template v-if="col.children">
              <el-table-column v-for="(ch,o) in col.children" :key="o" :label="ch.label" :prop="ch.name || ch.label"></el-table-column>
          </template> -->

          <template slot-scope="scope">
            <template v-if="col.render">
              <expand-dom :column="col" :row="scope.row" :render="col.render"></expand-dom>
            </template>
            <template v-else-if="col.formatter">
              <span v-html="col.formatter(scope.row, col)"></span>
            </template> 
            <template v-else>
              <span>{{scope.row[col.name]}}</span>
            </template>
          </template>   
      </el-table-column>
      <!-- 按钮操作组 -->
      <el-table-column v-if="operates.show && operates.list.length" label="操作" align="center" :width="operates.width">
        <template slot-scope="scope">
          <template v-for="(btn, key) in operates.list" >
            <el-button :type="btn.type" :size="btn.type || 'medium'" :icon="btn.icon" :disabled="btn.disabled" :plain="btn.plain"  @click.native.prevent="btn.method(key, scope.row)" :key="key">
              <template v-if="btn.svg">
                <svg-icon :icon-class="btn.svg"></svg-icon>
              </template>
              {{ btn.label }}
            </el-button>
          </template>
        </template>
        
      </el-table-column> 
      <!-- 按钮操作组 end-->
    </el-table>
    <!-- 表格数据 end-->
    <!-- 分页 -->
    <template v-if="total">
      <el-pagination :total="total" :current-page="listQuery.pageIndex" :page-size="listQuery.pageSize" layout="prev, pager, next, ->, jumper, slot, total" @current-change="handleCurrentChange" class="pagination">
        <slot>
          <span class="pagination__count">{{pageCount}}</span>
        </slot>
      </el-pagination> 
    </template>
    <!-- 分页 end -->
</div>

</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }, // 表格数据
    align: {
      type: String,
      default: 'center'
    }, // 对齐方式
    isMultiple: {
      type: Boolean,
      default: false
    }, // 是否多选
    tableHeader: {
      type: Array,
      default() {
        return []
      }
    }, // 表头
    listQuery: {
      type: Object,
      default() {
        return {
          pageIndex: 1,
          pageSize: 10
        }
      }
    }, // 分页参数
    total: {
      type: Number
    }, // 总数
    operates: {
      type: Object,
      default() {
        return {
          show: false,
          width: 150,
          list: []
        }
      }
    }, // 列操作按钮
    title: {
      type: Object,
      default() {
        return {
          show: true,
          align: 'left',
          label: '',
          list: []
        }
      }
    } // 表格标题
  },
  components: {
    expandDom: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        column: {
          type: Object,
          default: null
        }
      },
      render: (h, ctx) => {
        const params = {
          row: ctx.props.row
        }
        if (ctx.props.column) params.column = ctx.props.column
        return ctx.props.render(h, params)
      }
    },
    titleDom: {
      functional: true,
      props: {
        render: Function,
        method: Function
      },
      render: (h, ctx) => {
        return ctx.props.render(h, ctx.props)
      }
    }
  },
  computed: {
    pageCount() {
      let count = Math.ceil(this.total / this.listQuery.pageSize)
      return `共${count}页、`
    }
  },
  methods: {
    // 切换页码
    handleCurrentChange(index) {
      this.listQuery.pageIndex = index
      this.$emit('handleCurrentChange', index)
    },
    // 多行选中
    handleSelectionChange(val) {
      this.$emit('handleSelectionChange', val)
    }
  }
}
</script>

<style>
</style>
