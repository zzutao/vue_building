<!-- <template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>LCA基础数据及其不确定性设置</span>
    </div>
    <el-form label-position="right" label-width="120px">
      <el-form-item label="请设置：">
        <el-checkbox-group v-model="checkedOptions">
          <el-checkbox v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-collapse v-model="activePanels" accordion>
      <el-collapse-item v-for="option in checkedOptions" :key="option" :name="option" :title="getOptionItem(option).label">
        <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
        <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
        <el-table v-if="['option1'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Materials" label="建筑材料" width="130" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Energy" label="能源" width="180" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
const EF_materials = [
  { no: 0, Materials: '窗户', ef: '-', unit: '-', characterization: '相对系数', distributionPattern: 'norm', distributionFunction: '(1,0.35)' },
  { no: 1, Materials: '岩棉', ef: 1.82, unit: 'KgCO2/kg', characterization: '绝对值', distributionPattern: 'norm', distributionFunction: '(1.82,0.44)' },
  { no: 2, Materials: 'XPS', ef: 7.26, unit: 'KgCO2/kg', characterization: '绝对值', distributionPattern: 'norm', distributionFunction: '(7.41,2.3)' }
]
const EF_Energy = [
  { no: 0, Energy: '天然气锅炉集中供暖', ef: 0.23, unit: 'KgCO2/kg', characterization: '相对系数', distributionPattern: 'norm', distributionFunction: '(1,0.02)' }
]
export default {
  props: {
    title: String,
    data: Array
  },
  data() {
    return {
      isEditing: false,
      selectedRows: [],
      options: [
        { value: 'option1', label: 'DA1. 建筑材料生产阶段的排放因子', disabled: false },
        { value: 'option2', label: 'DA2. 运输和施工的排放因子', disabled: true },
        { value: 'option3', label: 'DA3. 维护维修的排放因子', disabled: true },
        { value: 'option4', label: 'DA4. 构件替换的排放因子', disabled: true },
        { value: 'option5', label: 'DA5. 拆除阶段的排放因子', disabled: true },
        { value: 'option6', label: 'DA6. 运行能耗的排放因子', disabled: false },
        { value: 'option7', label: 'DA7. 电网排放因子的步长', disabled: true }
      ],
      checkedOptions: [],
      activePanels: '',
      tableData: {
        option1: EF_materials,
        option6: EF_Energy
      }
    }
  },
  watch: {
    checkedOptions: {
      handler(newVal) {
        if (newVal.length) {
          this.activePanels = newVal[newVal.length - 1]
        } else {
          this.activePanels = ''
        }
      },
      deep: true
    }
  },
  methods: {
    getOptionItem(value) {
      return this.options.find((item) => item.value === value)
    },
    handleEdit() {
      this.isEditing = true
    },
    handleSave() {
      this.isEditing = false
      this.selectedRows.forEach(row => {
        row.editable = false
      })
    },
    handleSelectionChange(selection) {
      this.selectedRows = selection
    },
    isEditable(row) {
      return this.isEditing && row.editable !== false
    },
    tableRowClassName({ row }) {
      if (row.editable === false) {
        return 'saved-row'
      }
      return ''
    }
  }
}
</script>

      <style scoped>
      .box-card {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }
      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }
      .clearfix:after {
        clear: both;
      }
      </style> -->
<!-- <template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>LCA基础数据及其不确定性设置</span>
    </div>
    <el-form label-position="right" label-width="120px">
      <el-form-item label="请设置：">
        <el-checkbox-group v-model="localCheckedOptions">
          <el-checkbox v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-collapse v-model="localActivePanels" accordion>
      <el-collapse-item v-for="option in checkedOptions" :key="option" :name="option" :title="getOptionItem(option).label">
        <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
        <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
        <el-table v-if="['option1'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Materials" label="建筑材料" width="130" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Energy" label="能源" width="180" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      localCheckedOptions: [],
      localActivePanels: ''
    }
  },
  computed: {
    ...mapState('lacBasicData', [
      'isEditing',
      'selectedRows',
      'options',
      'checkedOptions',
      'activePanels',
      'tableData'
    ])
  },
  methods: {
    ...mapMutations('lacBasicData', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('lacBasicData', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    getOptionItem(value) {
      return this.options.find((item) => item.value === value)
    },
    handleEdit() {
      this.updateIsEditing(true)
    },
    handleSave() {
      this.updateIsEditing(false)
      this.selectedRows.forEach(row => {
        row.editable = false
      })
    },
    handleSelectionChange(selection) {
      this.updateSelectedRows(selection)
    },
    isEditable(row) {
      return this.isEditing && row.editable !== false
    },
    tableRowClassName({ row }) {
      if (row.editable === false) {
        return 'saved-row'
      }
      return ''
    },
    updateLocalCheckedOptions() {
      this.updateCheckedOptions(this.localCheckedOptions)
    },
    updateLocalActivePanels() {
      this.updateActivePanels(this.localActivePanels)
    }
  },
  watch: {
    localCheckedOptions: {
      handler(newVal) {
        this.updateLocalCheckedOptions()
        if (newVal.length) {
          this.localActivePanels = newVal[newVal.length - 1]
        } else {
          this.localActivePanels = ''
        }
      },
      deep: true
    },
    localActivePanels: {
      handler(newVal) {
        this.updateLocalActivePanels()
      }
    }
  },
  created() {
    this.localCheckedOptions = this.checkedOptions
    this.localActivePanels = this.activePanels
  }
}
</script>

      <style scoped>
      .box-card {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }

      .clearfix:after {
        clear: both;
      }
      </style> -->
<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>LCA基础数据及其不确定性设置</span>
      <!-- <el-button type="primary" style="float: right;" @click="submitData">提交数据</el-button> -->
      <!-- <div style="float: right;">
        <el-input v-model="email" placeholder="请输入您的邮箱" style="width: 200px; margin-right: 10px;" />
        <el-button type="primary" @click="submitData">提交数据</el-button>
      </div> -->
    </div>
    <el-form label-position="right" label-width="120px">
      <el-form-item label="请设置：">
        <el-checkbox-group v-model="localCheckedOptions">
          <el-checkbox v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-collapse v-model="localActivePanels" accordion>
      <el-collapse-item v-for="option in checkedOptions" :key="option" :name="option" :title="getOptionItem(option).label">
        <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
        <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
        <el-table v-if="['option1'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Materials" label="建筑材料" width="130" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="Energy" label="能源" width="180" />
          <el-table-column prop="ef" label="碳排放因子平均值" width="140" />
          <el-table-column prop="unit" label="单位" width="130" />
          <el-table-column prop="characterization" label="不确定性表征方式" width="140" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import { submitDesignData } from '../../api/design' // 确保路径正确

export default {
  data() {
    return {
      localCheckedOptions: [],
      localActivePanels: '',
      email: '' // 新增邮箱字段
    }
  },
  computed: {
    ...mapState('buildingInfo', ['form', 'isEditing']),
    ...mapState('designVariable', [
      'southWindowData',
      'northWindowData',
      'eastWestWindowData',
      'outerWallInsulationData',
      'roofInsulationData',
      'groundFloorInsulationData'
    ]),
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'checkedOptions',
      'activePanels',
      'options',
      'tableData'
    ]),
    ...mapState('lcaMethod', [
      'isEditing',
      'selectedRows',
      'options',
      'checkedOptions',
      'activePanels',
      'tableData'
    ]),
    ...mapState('lacBasicData', [
      'isEditing',
      'selectedRows',
      'options',
      'checkedOptions',
      'activePanels',
      'tableData'
    ]),
    // 定义一个新的计算属性来整合所有需要的数据
    designData() {
      const filterEditableItems = (items, prefix) =>
        items.filter(item => item.editable === false).map(item => ({ ...item, [prefix]: true }))
      return {
        buildingInfo: this.$store.state.buildingInfo.form,
        designVariable: {
          southWindowData: filterEditableItems(this.$store.state.designVariable.southWindowData, 'southWindowData'),
          northWindowData: filterEditableItems(this.$store.state.designVariable.northWindowData, 'northWindowData'),
          eastWestWindowData: filterEditableItems(this.$store.state.designVariable.eastWestWindowData, 'eastWestWindowData'),
          outerWallInsulationData: filterEditableItems(this.$store.state.designVariable.outerWallInsulationData, 'outerWallInsulationData'),
          roofInsulationData: filterEditableItems(this.$store.state.designVariable.roofInsulationData, 'roofInsulationData'),
          groundFloorInsulationData: filterEditableItems(this.$store.state.designVariable.groundFloorInsulationData, 'groundFloorInsulationData')
        },
        designUncertainty: {
          checkedOptions: this.$store.state.designUncertainty.checkedOptions,
          tableData: this.filterTableData(this.$store.state.designUncertainty.tableData)
        },
        lcaMethod: {
          checkedOptions: this.$store.state.lcaMethod.checkedOptions,
          tableData: this.filterTableData(this.$store.state.lcaMethod.tableData)
        },
        lacBasicData: {
          checkedOptions: this.$store.state.lacBasicData.checkedOptions,
          tableData: this.filterTableData(this.$store.state.lacBasicData.tableData)
        },
        userEmail: this.email // 将用户的邮箱添加到设计数据中
      }
    }
  },
  methods: {
    // Helper method to filter table data based on editable property
    filterTableData(tableData) {
      return Object.fromEntries(
        Object.entries(tableData).map(([key, rows]) => [
          key,
          rows.filter(row => row.editable === false).map(row => ({ ...row, [key]: true }))
        ])
      )
    },
    ...mapMutations('lacBasicData', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('lacBasicData', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    getOptionItem(value) {
      return this.options.find((item) => item.value === value)
    },
    handleEdit() {
      this.updateIsEditing(true)
      this.resetEditableStatus()
    },
    handleSave() {
      this.updateIsEditing(false)
      this.selectedRows.forEach(row => {
        row.editable = false
      })
      this.updateTableData({ key: this.localActivePanels, data: this.tableData[this.localActivePanels] })
    },
    handleSelectionChange(selection) {
      this.updateSelectedRows(selection)
    },
    isEditable(row) {
      return this.isEditing && row.editable !== false
    },
    tableRowClassName({ row }) {
      if (row.editable === false) {
        return 'saved-row'
      }
      return ''
    },
    resetEditableStatus() {
      const currentTableData = this.tableData[this.localActivePanels]
      if (currentTableData) {
        currentTableData.forEach(row => {
          row.editable = true
        })
      }
    },
    updateLocalCheckedOptions() {
      this.setCheckedOptions(this.localCheckedOptions)
    },
    updateLocalActivePanels() {
      this.setActivePanels(this.localActivePanels)
    },
    async submitData() {
      // 邮箱验证正则表达式
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(this.email)) {
        this.$message({
          message: '邮箱格式不正确，请重新输入。',
          type: 'warning',
          duration: 5 * 1000
        })
        return
      }
      try {
        console.log('Sending data:', this.designData) // 查看发送的数据

        const response = await submitDesignData(this.designData)
        console.log('Response:', response) // 查看接收的响应

        this.$message({
          message: '数据提交成功',
          type: 'success',
          duration: 5 * 1000
        })
      } catch (error) {
        console.error('数据提交失败:', error)
        this.$message({
          message: '数据提交失败，请重试。',
          type: 'error',
          duration: 5 * 1000
        })
      }
    }
  },
  watch: {
    localCheckedOptions: {
      handler(newVal) {
        this.updateLocalCheckedOptions()
        if (newVal.length) {
          this.localActivePanels = newVal[newVal.length - 1]
        } else {
          this.localActivePanels = ''
        }
      },
      deep: true
    },
    localActivePanels: {
      handler(newVal) {
        this.updateLocalActivePanels()
      }
    }
  },
  created() {
    this.localCheckedOptions = this.checkedOptions.slice() // 使用 slice() 创建一个新的数组副本
    this.localActivePanels = this.activePanels
  }
}
</script>

      <style scoped>
      .box-card {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
      }

      .clearfix:before,
      .clearfix:after {
        display: table;
        content: "";
      }

      .clearfix:after {
        clear: both;
      }
      </style>
