<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>建筑基本信息</span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="handleEdit">修改</el-button>
      <el-button style="float: right; padding: 3px 0; margin-right: 10px" type="text" @click="handleSave">保存</el-button>
      <el-button style="float: right; padding: 3px 0; margin-right: 10px" type="text" @click="handleSubmit">提交</el-button>
    </div>
    <el-form :model="form" label-width="140px" :disabled="!isEditing">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="项目名称">
            <el-input v-model="form.projectName" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="南窗面积(m²)">
            <el-input v-model="form.southWindowArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="热工分区">
            <el-input v-model="form.thermalZone" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="建筑类型">
            <el-input v-model="form.buildingType" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="北窗面积(m²)">
            <el-input v-model="form.northWindowArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="东西窗面积(m²)">
            <el-input v-model="form.eastWestWindowArea" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="结构类型">
            <el-input v-model="form.structureType" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="外墙保温面积(m²)">
            <el-input v-model="form.outerWallInsulationArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="地上层数">
            <el-input v-model="form.aboveGroundFloors" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="屋面保温面积(m²)">
            <el-input v-model="form.roofInsulationArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="地下层数">
            <el-input v-model="form.belowGroundFloors" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="地面保温面积(m²)">
            <el-input v-model="form.groundFloorInsulationArea" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="地上建筑面积(m²)">
            <el-input v-model="form.aboveGroundBuildingArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="地下建筑面积(m²)">
            <el-input v-model="form.belowGroundBuildingArea" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="供暖类型">
            <el-input v-model="form.heatingType" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="制冷类型">
            <el-input v-model="form.coolingType" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      form: {
        projectName: 'TJU-15',
        thermalZone: '寒冷地区',
        buildingType: '办公建筑',
        structureType: '砖混结构',
        aboveGroundFloors: '4层',
        belowGroundFloors: '0层',
        aboveGroundBuildingArea: '5184',
        belowGroundBuildingArea: '0',
        southWindowArea: '365',
        northWindowArea: '365',
        eastWestWindowArea: '45',
        outerWallInsulationArea: '2060',
        roofInsulationArea: '1440',
        groundFloorInsulationArea: '1440',
        heatingType: '天然气集中供暖',
        coolingType: '分体式空调，COP=3.0'
      }
    }
  },
  methods: {
    handleEdit() {
      this.isEditing = true
    },
    handleSave() {
      this.isEditing = false
      // 这里可以添加保存逻辑
      console.log('保存成功')
    },
    handleSubmit() {
      // 这里可以添加提交逻辑
      console.log('提交成功')
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
