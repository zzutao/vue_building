<!-- <template>
  <div>
    <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
    <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
    <el-table
      :data="data"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange"
    >
      <el-table-column
        type="selection"
        width="55"
        :selectable="isEditable"
      />
      <el-table-column prop="no" label="方案" width="50" />
      <el-table-column prop="constructionForm" label="构造形式" width="120" />
      <el-table-column prop="insulationMaterial" label="保温材料" width="120" />
      <el-table-column prop="carbonEmissionFactor" label="保温材料碳排放因子[KgCO2eq/Kg]" width="160" />
      <el-table-column prop="density" label="保温材料密度[kg/m³]" width="100" />
      <el-table-column prop="thickness" label="保温材料厚度[mm]" width="100" />
      <el-table-column prop="uValue" label="传热系数U值[W/(m2·K)]" width="120" />
      <el-table-column prop="quantity" label="保温材料用量[kg]" width="160" />
    </el-table>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    data: Array
  },
  data() {
    return {
      isEditing: false,
      selectedRows: []
    }
  },
  methods: {
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
  .el-table .saved-row {
    background-color: #f0f9eb;
  }
  </style> -->
<template>
  <div>
    <el-button type="primary" :disabled="isEditing" @click="handleEdit">修改</el-button>
    <el-button type="success" :disabled="!isEditing" @click="handleSave">保存</el-button>
    <el-table :data="data" style="width: 100%" :row-class-name="tableRowClassName" @selection-change="handleSelectionChange">
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
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    title: String,
    data: Array
  },
  data() {
    return {
      isEditing: false,
      selectedRows: []
    }
  },
  computed: {
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
    ...mapMutations('designVariable', [
      'setSouthWindowData',
      'setNorthWindowData',
      'setEastWestWindowData',
      'setOuterWallInsulationData',
      'setRoofInsulationData',
      'setGroundFloorInsulationData'
    ]),
    handleEdit() {
      this.isEditing = true
      // 重置所有行的 editable 属性
      this.data.forEach(row => {
        row.editable = true
      })
    },
    handleSave() {
      this.isEditing = false
      this.selectedRows.forEach(row => {
        row.editable = false
      })
      // 更新数据
      this.updateData(this.data)
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
    },
    updateData(data) {
      switch (this.title) {
        case '外墙保温选型':
          this.setOuterWallInsulationData(data)
          break
        case '屋面保温选型':
          this.setRoofInsulationData(data)
          break
        case '地板保温选型':
          this.setGroundFloorInsulationData(data)
          break
          // 其他情况可以根据需要添加
      }
    }
  }
}
</script>

  <style scoped>
  .saved-row {
    background-color: #f0f9eb;
  }
  </style>
