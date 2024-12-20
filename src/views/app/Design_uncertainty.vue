<!-- <template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>设计相关的不确定性设置</span>
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
        <el-table v-if="['option5', 'option6', 'option7'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="uValue" label="整窗传热系数U值[W/(m2·K)]" width="130" />
          <el-table-column prop="shgcValue" label="整窗太阳得热系数SHGC" width="140" />
          <el-table-column prop="ef" label="碳排放因子[KgCO2eq/㎡]" width="150" />
          <el-table-column prop="windowFrame" label="窗框" width="150" />
          <el-table-column prop="glassStructure" label="玻璃构造[mm]" width="400" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="constructionForm" label="构造形式" width="120" />
          <el-table-column prop="insulationMaterial" label="保温材料" width="120" />
          <el-table-column prop="carbonEmissionFactor" label="保温材料碳排放因子[KgCO2eq/Kg]" width="160" />
          <el-table-column prop="density" label="保温材料密度[kg/m³]" width="100" />
          <el-table-column prop="thickness" label="保温材料厚度[mm]" width="100" />
          <el-table-column prop="uValue" label="传热系数U值[W/(m2·K)]" width="120" />
          <el-table-column prop="quantity" label="保温材料用量[kg]" width="160" />
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
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'checkedOptions',
      'activePanels',
      'options',
      'tableData'
    ]),
    ...mapState('designVariable', [
      'southWindowData',
      'northWindowData',
      'eastWestWindowData',
      'outerWallInsulationData',
      'roofInsulationData',
      'groundFloorInsulationData'
    ])
  },
  methods: {
    ...mapMutations('designUncertainty', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('designUncertainty', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    ...mapActions('designVariable', [
      'updateSouthWindowData',
      'updateNorthWindowData',
      'updateEastWestWindowData',
      'updateOuterWallInsulationData',
      'updateRoofInsulationData',
      'updateGroundFloorInsulationData'
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
<!-- <template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>设计相关的不确定性设置</span>
    </div>
    <el-form label-position="right" label-width="120px">
      <el-form-item label="请设置：">
        <el-checkbox-group v-model="localCheckedOptions">
          <el-checkbox v-for="option in dynamicOptions" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-collapse v-model="localActivePanels" accordion>
      <el-collapse-item v-for="option in checkedOptions" :key="option" :name="option" :title="getOptionItem(option).label">
        <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
        <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
        <el-table v-if="['option5', 'option6', 'option7'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="uValue" label="整窗传热系数U值[W/(m2·K)]" width="130" />
          <el-table-column prop="shgcValue" label="整窗太阳得热系数SHGC" width="140" />
          <el-table-column prop="ef" label="碳排放因子[KgCO2eq/㎡]" width="150" />
          <el-table-column prop="windowFrame" label="窗框" width="150" />
          <el-table-column prop="glassStructure" label="玻璃构造[mm]" width="400" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="constructionForm" label="构造形式" width="120" />
          <el-table-column prop="insulationMaterial" label="保温材料" width="120" />
          <el-table-column prop="carbonEmissionFactor" label="保温材料碳排放因子[KgCO2eq/Kg]" width="160" />
          <el-table-column prop="density" label="保温材料密度[kg/m³]" width="100" />
          <el-table-column prop="thickness" label="保温材料厚度[mm]" width="100" />
          <el-table-column prop="uValue" label="传热系数U值[W/(m2·K)]" width="120" />
          <el-table-column prop="quantity" label="保温材料用量[kg]" width="160" />
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
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'checkedOptions',
      'activePanels',
      'options',
      'tableData'
    ]),
    ...mapState('designVariable', [
      'southWindowData',
      'northWindowData',
      'eastWestWindowData',
      'outerWallInsulationData',
      'roofInsulationData',
      'groundFloorInsulationData'
    ]),
    dynamicOptions() {
      const options = this.options.map(option => {
        let disabled = option.disabled
        if (option.value === 'option5') {
          disabled = this.southWindowData.some(item => item.editable === false)
        } else if (option.value === 'option6') {
          disabled = this.northWindowData.some(item => item.editable === false)
        } else if (option.value === 'option7') {
          disabled = this.eastWestWindowData.some(item => item.editable === false)
        } else if (option.value === 'option8') {
          disabled = this.outerWallInsulationData.some(item => item.editable === false)
        } else if (option.value === 'option9') {
          disabled = this.roofInsulationData.some(item => item.editable === false)
        } else if (option.value === 'option10') {
          disabled = this.groundFloorInsulationData.some(item => item.editable === false)
        }
        return { ...option, disabled }
      })
      return options
    }
  },
  methods: {
    ...mapMutations('designUncertainty', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('designUncertainty', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    getOptionItem(value) {
      return this.dynamicOptions.find((item) => item.value === value)
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
      <span>设计相关的不确定性设置</span>
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
        <el-table v-if="['option5', 'option6', 'option7'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="uValue" label="整窗传热系数U值[W/(m2·K)]" width="130" />
          <el-table-column prop="shgcValue" label="整窗太阳得热系数SHGC" width="140" />
          <el-table-column prop="ef" label="碳排放因子[KgCO2eq/㎡]" width="150" />
          <el-table-column prop="windowFrame" label="窗框" width="150" />
          <el-table-column prop="glassStructure" label="玻璃构造[mm]" width="400" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="constructionForm" label="构造形式" width="120" />
          <el-table-column prop="insulationMaterial" label="保温材料" width="120" />
          <el-table-column prop="carbonEmissionFactor" label="保温材料碳排放因子[KgCO2eq/Kg]" width="160" />
          <el-table-column prop="density" label="保温材料密度[kg/m³]" width="100" />
          <el-table-column prop="thickness" label="保温材料厚度[mm]" width="100" />
          <el-table-column prop="uValue" label="传热系数U值[W/(m2·K)]" width="120" />
          <el-table-column prop="quantity" label="保温材料用量[kg]" width="160" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<!-- <script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      localCheckedOptions: [],
      localActivePanels: ''
    }
  },
  computed: {
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'checkedOptions',
      'activePanels',
      'options',
      'tableData'
    ]),
    ...mapState('designVariable', [
      'southWindowData',
      'northWindowData',
      'eastWestWindowData',
      'outerWallInsulationData',
      'roofInsulationData',
      'groundFloorInsulationData'
    ]),
    dynamicOptions() {
      const options = this.options.map(option => {
        let disabled = option.disabled
        if (option.value === 'option5') {
          disabled = this.southWindowData.some(item => item.editable === false)
        } else if (option.value === 'option6') {
          disabled = this.northWindowData.some(item => item.editable === false)
        } else if (option.value === 'option7') {
          disabled = this.eastWestWindowData.some(item => item.editable === false)
        } else if (option.value === 'option8') {
          disabled = this.outerWallInsulationData.some(item => item.editable === false)
        } else if (option.value === 'option9') {
          disabled = this.roofInsulationData.some(item => item.editable === false)
        } else if (option.value === 'option10') {
          disabled = this.groundFloorInsulationData.some(item => item.editable === false)
        }
        return { ...option, disabled }
      })
      return options
    }
  },
  methods: {
    ...mapMutations('designUncertainty', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('designUncertainty', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    getOptionItem(value) {
      return this.dynamicOptions.find((item) => item.value === value)
    },
    handleEdit() {
      this.updateIsEditing(true)
      // 重置表格中所有行的 editable 属性
      for (const key in this.tableData) {
        this.tableData[key].forEach(row => {
          row.editable = true
        })
      }
    },
    handleSave() {
      this.updateIsEditing(false)
      this.selectedRows.forEach(row => {
        row.editable = false
      })
      // 更新 tableData 中的行数据
      for (const key in this.tableData) {
        this.tableData[key].forEach(row => {
          if (!this.selectedRows.includes(row)) {
            row.editable = false
          }
        })
      }
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

<!-- <script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {
      localCheckedOptions: [],
      localActivePanels: ''
    }
  },
  computed: {
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'options',
      'checkedOptions',
      'activePanels',
      'tableData'
    ]),
    // 动态计算 options 的 disabled 状态
    dynamicOptions() {
      return this.options.map(option => ({
        ...option,
        disabled: this.getOptionDisabledStatus(option.value)
      }))
    }
  },
  methods: {
    ...mapMutations('designUncertainty', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('designUncertainty', [
      'updateIsEditing',
      'updateSelectedRows',
      'updateCheckedOptions',
      'updateActivePanels',
      'updateTableData'
    ]),
    getOptionItem(value) {
      return this.dynamicOptions.find((item) => item.value === value)
    },
    handleEdit() {
      this.updateIsEditing(true)
      this.resetEditableStatus()
    },
    handleSave() {
      this.updateIsEditing(false)

      const updatedTableData = { ...this.tableData }

      // 创建 selectedRows 的副本以避免直接修改原始数据
      const selectedRowsCopy = [...this.selectedRows]

      // 更新 selectedRows 的 editable 属性为 false
      selectedRowsCopy.forEach(row => {
        if (updatedTableData[this.localActivePanels]) {
          const rowIndex = updatedTableData[this.localActivePanels].findIndex(r => r.id === row.id) // 假设每行有一个唯一标识符 id
          if (rowIndex !== -1) {
            updatedTableData[this.localActivePanels][rowIndex] = {
              ...updatedTableData[this.localActivePanels][rowIndex],
              editable: false
            }
          }
        }
      })

      // 更新 Vuex store 中的数据
      this.updateTableData({ key: this.localActivePanels, data: [...updatedTableData[this.localActivePanels] || []] })

      // 不要在这里调用 updateSelectedRows，因为这会导致 selectedRows 被覆盖
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
        this.updateTableData({ key: this.localActivePanels, data: [...currentTableData] })
      }
    },
    updateLocalCheckedOptions() {
      this.setCheckedOptions(this.localCheckedOptions.slice())
    },
    updateLocalActivePanels() {
      this.setActivePanels(this.localActivePanels)
    },
    getOptionDisabledStatus(value) {
      switch (value) {
        case 'option5':
          return this.southWindowData?.some(item => item.editable === false) ?? false
        case 'option6':
          return this.northWindowData?.some(item => item.editable === false) ?? false
        case 'option7':
          return this.eastWestWindowData?.some(item => item.editable === false) ?? false
        case 'option8':
          return this.outerWallInsulationData?.some(item => item.editable === false) ?? false
        case 'option9':
          return this.roofInsulationData?.some(item => item.editable === false) ?? false
        case 'option10':
          return this.groundFloorInsulationData?.some(item => item.editable === false) ?? false
        default:
          return this.options.find(option => option.value === value)?.disabled || false
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

    // 初始化时确保 editable 属性正确设置
    this.resetEditableStatus()
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
    ...mapState('designUncertainty', [
      'isEditing',
      'selectedRows',
      'options',
      'checkedOptions',
      'activePanels',
      'tableData'
    ])
  },
  methods: {
    ...mapMutations('designUncertainty', [
      'setIsEditing',
      'setSelectedRows',
      'setCheckedOptions',
      'setActivePanels'
    ]),
    ...mapActions('designUncertainty', [
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
