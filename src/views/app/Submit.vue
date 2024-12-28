<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>设置提交信息</span>
      <!-- <el-button style="float: right; padding: 3px 0" type="text" @click="handleSubmit">提交计算</el-button> -->
      <el-button type="primary" style="float: right;" @click="submitData">提交计算</el-button>
    </div>
    <el-form ref="formRef" :model="form" label-width="140px" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="设置样本数量" prop="sampleCount">
            <el-input-number v-model="form.sampleCount" :min="1" :step="100" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="设置种群个体数量" prop="individualCount">
            <el-input-number v-model="form.individualCount" :min="1" :step="1" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="设置迭代代数" prop="iterationCount">
            <el-input-number v-model="form.iterationCount" :min="1" :step="1" controls-position="right" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="设置结果发送邮箱" prop="email">
            <el-input v-model="form.email" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>
<script>
import { mapState } from 'vuex'
import { submitDesignData } from '../../api/design' // 确保路径正确

export default {
  data() {
    return {
      rules: {
        sampleCount: [
          { required: true, message: '请输入样本数量', trigger: 'blur' },
          { type: 'number', message: '样本数量必须是数字', trigger: 'blur' }
        ],
        individualCount: [
          { required: true, message: '请输入种群个体数量', trigger: 'blur' },
          { type: 'number', message: '种群个体数量必须是数字', trigger: 'blur' }
        ],
        iterationCount: [
          { required: true, message: '请输入迭代代数', trigger: 'blur' },
          { type: 'number', message: '迭代代数必须是数字', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱格式', trigger: ['blur', 'change'] }
        ]
      }
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
        sampleCount: this.form.sampleCount,
        individualCount: this.form.individualCount,
        iterationCount: this.form.iterationCount,
        userEmail: this.form.email // 将用户的邮箱添加到设计数据中
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
    async submitData() {
      // 邮箱验证正则表达式
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test(this.form.email)) {
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
