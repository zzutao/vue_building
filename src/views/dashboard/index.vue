<!-- <template>
  <div class="dashboard-container">
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'

export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }
}
</script> -->
<template>
  <div class="welcome-page">
    <!-- 第一个卡片 -->
    <el-row :gutter="20">
      <el-col :span="12">
        <el-card class="box-card custom-height-1">
          <div slot="header" class="clearfix">
            <span>欢迎使用</span>
          </div>
          <div class="card-content">
            <p><strong>建筑生命周期碳排放计算软件</strong></p>
            <p>量化不确定性，优化碳足迹</p>
          </div>
        </el-card>
      </el-col>

      <!-- 第二个卡片：操作步骤 -->
      <el-col :span="12">
        <el-card class="box-card custom-height-1 steps-card">
          <div slot="header" class="clearfix">
            <span>操作步骤</span>
          </div>
          <el-steps :active="6" align-center style="margin-top: 20px;">
            <el-step v-for="(step, index) in steps" :key="index" :title="step.title" :description="step.description" />
          </el-steps>
        </el-card>
      </el-col>
    </el-row>

    <!-- 第三个和第四个卡片 -->
    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="12">
        <el-card class="box-card custom-height-2">
          <div slot="header" class="clearfix">
            <span>日历</span>
          </div>
          <div class="calendar-container">
            <div class="scaled-calendar">
              <el-calendar v-model="calendarValue" />
            </div>
          </div>
        </el-card>
      </el-col>
      <!-- 第四个卡片 -->
      <el-col :span="12">
        <el-card class="box-card custom-height-2">
          <div slot="header" class="clearfix">
            <span>一周天气预报</span>
            <el-select v-model="selectedCity" placeholder="请选择城市" style="float: right; margin-right: 10px;width: 100px; height: 20px;" @change="handleCityChange">
              <el-option
                v-for="item in cityOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>
          <div v-if="loadingWeather" class="loading">加载中...</div>
          <el-table v-else-if="weatherData.length" :data="weatherData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="100" />
            <el-table-column prop="condition" label="天气状况" width="100" />
            <el-table-column prop="temperature" label="温度范围" />
            <el-table-column prop="notice" label="提醒" />
          </el-table>
          <p v-else-if="weatherError">{{ weatherError }}</p>
          <p v-else>正在加载天气信息...</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      calendarValue: new Date(), // 当前日期
      weatherData: [], // 存储从API获取的天气数据
      loadingWeather: false, // 加载状态
      weatherError: null, // 错误信息
      steps: [
        { title: '步骤1', description: '设置我的项目' },
        { title: '步骤2', description: '设置设计变量' },
        { title: '步骤3', description: '设置设计不确定性' },
        { title: '步骤4', description: '设置LCA方法不确定性' },
        { title: '步骤5', description: '设置LCA基础数据不确定性' },
        { title: '步骤6', description: '设置并提交计算' }
      ],
      selectedCity: '101180101', // 默认选择郑州
      cityOptions: [
        { value: '101180101', label: '郑州' },
        { value: '101010100', label: '北京' },
        { value: '101020100', label: '上海' },
        { value: '101030100', label: '天津' }
      ]
    }
  },
  created() {
    this.fetchWeatherData()
  },
  methods: {
    async fetchWeatherData() {
      this.loadingWeather = true
      this.weatherError = null

      try {
        const response = await axios.get(`/api/api/weather/city/${this.selectedCity}`) // 注意这里的路径变化

        if (response.status !== 200) {
          throw new Error('Network response was not ok')
        }

        const forecastData = response.data.data.forecast.slice(0, 7) // 只取未来7天的数据
        this.weatherData = forecastData.map(day => ({
          date: day.ymd,
          condition: day.type,
          temperature: `${day.low} - ${day.high}`,
          notice: day.notice
        }))
      } catch (error) {
        console.error('Error fetching weather data:', error)
        this.weatherError = '无法加载天气信息，请稍后再试。'
      } finally {
        this.loadingWeather = false
      }
    },
    handleCityChange() {
      this.fetchWeatherData() // 当城市选择改变时重新加载天气数据
    }
  }
}
</script>

<style scoped>
.welcome-page {
  padding: 20px;
}

.box-card {
  position: relative; /* 确保子元素可以相对定位 */
}

/* 自定义卡片1的高度 */
.custom-height-1 {
  height: 250px; /* 设置你想要的高度 */
}

/* 自定义卡片2的高度 */
.custom-height-2 {
  height: 430px; /* 设置你想要的高度 */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: calc(100% - 48px); /* 减去卡片头部高度 */
  padding: 0 20px; /* 可选：添加一些内边距 */
}

.el-row {
  margin-bottom: 20px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

/* 确保步骤水平排列并且居中 */
.steps-card .el-steps {
  justify-content: center;
}

.steps-card .el-step__title {
  font-size: 14px;
}

.steps-card .el-step__description {
  font-size: 12px;
  white-space: normal; /* 允许描述文字换行 */
}

/* 日历容器样式 */
.calendar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
}

.scaled-calendar {
  transform-origin: top left;
  transform: scale(1); /* 根据需要调整缩放比例 */
}

.scaled-calendar ::v-deep .el-calendar {
  width: 100%;
  height: 100%;
}

.scaled-calendar ::v-deep .el-calendar__body {
  padding: 0; /* 移除默认内边距 */
}

.scaled-calendar ::v-deep .el-calendar-table {
  border-collapse: collapse; /* 移除表格边框间距 */
}

.scaled-calendar ::v-deep .el-calendar-day {
  padding: 4px; /* 调整日期单元格内边距 */
  height: auto; /* 自动适应高度 */
}

.scaled-calendar ::v-deep .el-button {
  padding: 8px 12px; /* 调整按钮内边距 */
  font-size: 12px; /* 调整按钮字体大小 */
}

.scaled-calendar ::v-deep .el-calendar__header {
  line-height: normal; /* 避免行高影响 */
  padding: 4px; /* 调整表头内边距 */
}

.scaled-calendar ::v-deep .el-calendar-table th,
.scaled-calendar ::v-deep .el-calendar-table td {
  padding: 4px; /* 调整表头和表体单元格内边距 */
  line-height: normal; /* 避免行高影响 */
}
</style>
<style scoped>
/* 添加样式以美化加载指示器 */
.loading {
  text-align: center;
  font-size: 1.2em;
  color: #999;
}

/* 确保表格适应卡片高度 */
.custom-height-2 .el-table {
  height: calc(100% - 48px); /* 减去卡片头部高度 */
  overflow-y: auto; /* 如果内容超出，则允许滚动 */
}
</style>
