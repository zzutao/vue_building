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
      <el-col :span="12">
        <el-card class="box-card custom-height-2">
          <div slot="header" class="clearfix">
            <span>一周天气预报</span>
          </div>
          <ul v-if="weatherData.length">
            <li v-for="(day, index) in weatherData" :key="index">
              {{ day.date }}: {{ day.condition }} ({{ day.temperature }}°C)
            </li>
          </ul>
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
      steps: [
        { title: '步骤1', description: '设置我的项目' },
        { title: '步骤2', description: '设置设计变量' },
        { title: '步骤3', description: '设置设计不确定性' },
        { title: '步骤4', description: '设置LCA方法不确定性' },
        { title: '步骤5', description: '设置LCA基础数据不确定性' },
        { title: '步骤6', description: '设置并提交计算' }
      ]
    }
  },
  created() {
    this.fetchWeatherData()
  },
  methods: {
    async fetchWeatherData() {
      try {
        const response = await axios.get('https://api.weatherapi.com/v1/forecast.json', {
          params: {
            key: 'YOUR_API_KEY', // 替换为你的 WeatherAPI 密钥
            q: 'Beijing', // 查询的城市
            days: 7 // 获取未来7天的天气预报
          }
        })
        this.weatherData = response.data.forecast.forecastday.map(day => ({
          date: day.date,
          condition: day.day.condition.text,
          temperature: Math.round(day.day.avg_temp_c)
        }))
      } catch (error) {
        console.error('Error fetching weather data:', error)
      }
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
  height: 400px; /* 设置你想要的高度 */
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
  transform: scale(0.98); /* 根据需要调整缩放比例 */
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
