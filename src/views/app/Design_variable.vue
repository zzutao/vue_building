<!-- <template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>设计变量</span>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="南窗选型">
        <tab-content title="南窗选型" :data="southWindowData" />
      </el-tab-pane>
      <el-tab-pane label="北窗选型">
        <tab-content title="北窗选型" :data="northWindowData" />
      </el-tab-pane>
      <el-tab-pane label="东西窗选型">
        <tab-content title="东西窗选型" :data="eastWestWindowData" />
      </el-tab-pane>
      <el-tab-pane label="外墙保温选型">
        <tab-content-2 title="外墙保温选型" :data="outerWallInsulationData" />
      </el-tab-pane>
      <el-tab-pane label="屋面保温选型">
        <tab-content-2 title="屋面保温选型" :data="roofInsulationData" />
      </el-tab-pane>
      <el-tab-pane label="地板保温选型">
        <tab-content-2 title="地板保温选型" :data="groundFloorInsulationData" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import TabContent from './TabContent.vue'
import TabContent2 from './TabContent2.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    TabContent,
    TabContent2
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
    ...mapActions('designVariable', [
      'updateSouthWindowData',
      'updateNorthWindowData',
      'updateEastWestWindowData',
      'updateOuterWallInsulationData',
      'updateRoofInsulationData',
      'updateGroundFloorInsulationData'
    ])
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
      <span>设计变量</span>
    </div>
    <el-tabs type="border-card">
      <el-tab-pane label="南窗选型">
        <tab-content title="南窗选型" :data="southWindowData" />
      </el-tab-pane>
      <el-tab-pane label="北窗选型">
        <tab-content title="北窗选型" :data="northWindowData" />
      </el-tab-pane>
      <el-tab-pane label="东西窗选型">
        <tab-content title="东西窗选型" :data="eastWestWindowData" />
      </el-tab-pane>
      <el-tab-pane label="外墙保温选型">
        <tab-content-2 title="外墙保温选型" :data="outerWallInsulationData" />
      </el-tab-pane>
      <el-tab-pane label="屋面保温选型">
        <tab-content-2 title="屋面保温选型" :data="roofInsulationData" />
      </el-tab-pane>
      <el-tab-pane label="地板保温选型">
        <tab-content-2 title="地板保温选型" :data="groundFloorInsulationData" />
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script>
import TabContent from './TabContent.vue'
import TabContent2 from './TabContent2.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    TabContent,
    TabContent2
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
    ...mapActions('designVariable', [
      'updateSouthWindowData',
      'updateNorthWindowData',
      'updateEastWestWindowData',
      'updateOuterWallInsulationData',
      'updateRoofInsulationData',
      'updateGroundFloorInsulationData'
    ])
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
