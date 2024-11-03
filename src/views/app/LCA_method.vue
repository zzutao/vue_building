<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>LCA方法及其相关的不确定性设置</span>
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
        <el-table v-if="['option3' , 'option7'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="distributionPattern" label="分布形态" width="130" />
          <el-table-column prop="distributionFunction" label="分布函数" width="140" />
        </el-table>
        <el-table v-else-if="['option6'].includes(option)" :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="buildingConstruction" label="建筑构建" width="130" />
          <el-table-column prop="distributionPattern" label="分布形态" width="140" />
          <el-table-column prop="distributionFunction" label="分布函数" width="160" />
        </el-table>
        <el-table v-else :data="tableData[option]" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
          <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
          <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
          <el-table-column type="selection" width="55" :selectable="isEditable" />
          <el-table-column prop="no" label="方案" width="50" />
          <el-table-column prop="uValue" label="气候变暖情景" width="120" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
const Building_SL = [
  { no: 0, distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.9))' }
]
const Element_SL = [
  { no: 0, buildingConstruction: '窗户', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
  { no: 1, buildingConstruction: '外墙保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
  { no: 2, buildingConstruction: '屋面保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
  { no: 3, buildingConstruction: '地板保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' }
]
const EnergyMix = [
  { no: 0, distributionPattern: 'triang', distributionFunction: '(0.4,-0.02,0.015)' }
]
const Climate_warming_scenario = [
  { no: 0, uValue: 'TMY' },
  { no: 1, uValue: 'RCP2.6' },
  { no: 2, uValue: 'RCP4.5' },
  { no: 3, uValue: 'RCP8.5' }
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
        { value: 'option1', label: 'M1. 基准流', disabled: true },
        { value: 'option2', label: 'M2. 系统边界', disabled: true },
        { value: 'option3', label: 'M3. 建筑寿命', disabled: false },
        { value: 'option4', label: 'M4. 交通和运输建模', disabled: true },
        { value: 'option5', label: 'M5. 维护和维修频率', disabled: true },
        { value: 'option6', label: 'M6. 建筑构件寿命', disabled: false },
        { value: 'option7', label: 'M7. 电网减排情景', disabled: false },
        { value: 'option8', label: 'M8. 气候变暖情景', disabled: false },
        { value: 'option9', label: 'M9. 用户行为', disabled: true },
        { value: 'option10', label: 'M10. 建筑构件、设备性能衰减', disabled: true },
        { value: 'option11', label: 'M11. 拆除及回收情景', disabled: true },
        { value: 'option12', label: 'M12. LCA数据库选择', disabled: true },
        { value: 'option13', label: 'M13. 归因或归果LCA方法', disabled: true },
        { value: 'option14', label: 'M14. 环境影响特征化方法', disabled: true }
      ],
      checkedOptions: [],
      activePanels: '',
      tableData: {
        option3: Building_SL,
        option6: Element_SL,
        option7: EnergyMix,
        option8: Climate_warming_scenario
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
    </style>
