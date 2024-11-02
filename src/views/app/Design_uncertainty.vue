<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>设计表单</span>
    </div>
    <el-form label-position="right" label-width="120px">
      <el-form-item label="请选择选项：">
        <el-checkbox-group v-model="checkedOptions">
          <el-checkbox v-for="option in options" :key="option.value" :label="option.value" :disabled="option.disabled">
            {{ option.label }}
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>

    <el-collapse v-model="activePanels">
      <el-collapse-item v-for="option in checkedOptions" :key="option" :name="option" :title="option">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="no" label="No." width="80" />
          <el-table-column prop="constructionForm" label="构造形式" width="120" />
          <el-table-column prop="insulationMaterial" label="保温材料" width="120" />
          <el-table-column prop="carbonEmissionFactor" label="保温材料碳排放因子[KgCO2eq/Kg]" width="180" />
          <el-table-column prop="density" label="保温材料密度[kg/m³]" width="150" />
          <el-table-column prop="thickness" label="保温材料厚度[mm]" width="150" />
          <el-table-column prop="uValue" label="U_value" width="80" />
          <el-table-column prop="quantity" label="Quantity" width="120" />
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      options: [
        { value: 'option1', label: '选项1', disabled: false },
        { value: 'option2', label: '选项2', disabled: false },
        { value: 'option3', label: '选项3', disabled: true }, // 默认禁用
        { value: 'option4', label: '选项4', disabled: false }
      ],
      checkedOptions: [],
      activePanels: [],
      tableData: [
        { no: 0, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 65.000, uValue: 0.40, quantity: 3267.810 },
        { no: 1, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 80.000, uValue: 0.34, quantity: 4021.920 },
        { no: 2, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 95.000, uValue: 0.30, quantity: 4776.030 },
        { no: 3, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 110.000, uValue: 0.26, quantity: 5530.140 },
        { no: 4, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 125.000, uValue: 0.23, quantity: 6284.250 },
        { no: 5, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 140.000, uValue: 0.21, quantity: 7038.360 },
        { no: 6, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 155.000, uValue: 0.19, quantity: 7792.470 },
        { no: 7, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 170.000, uValue: 0.18, quantity: 8546.580 },
        { no: 8, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 185.000, uValue: 0.16, quantity: 9300.690 },
        { no: 9, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 200.000, uValue: 0.15, quantity: 10054.800 },
        { no: 10, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 215.000, uValue: 0.14, quantity: 10808.910 },
        { no: 11, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 230.000, uValue: 0.13, quantity: 11563.020 },
        { no: 12, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 245.000, uValue: 0.13, quantity: 12317.130 },
        { no: 13, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 260.000, uValue: 0.12, quantity: 13071.240 },
        { no: 14, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 275.000, uValue: 0.11, quantity: 13825.350 },
        { no: 15, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 300.000, uValue: 0.11, quantity: 14579.460 }
      ]
    }
  },
  watch: {
    checkedOptions: {
      handler(newVal) {
        this.activePanels = newVal
      },
      deep: true
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
