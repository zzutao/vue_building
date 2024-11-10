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
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  computed: {
    ...mapState('buildingInfo', ['form', 'isEditing'])
  },
  methods: {
    ...mapMutations('buildingInfo', ['setIsEditing']),
    ...mapActions('buildingInfo', ['updateForm']),
    handleEdit() {
      this.setIsEditing(true)
    },
    handleSave() {
      this.updateForm(this.form)
      this.setIsEditing(false)
      console.log('保存成功')
    },
    handleSubmit() {
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
