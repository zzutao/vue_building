const state = {
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
    option3: [
      { no: 0, distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.9))' }
    ],
    option6: [
      { no: 0, buildingConstruction: '窗户', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
      { no: 1, buildingConstruction: '外墙保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
      { no: 2, buildingConstruction: '屋面保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' },
      { no: 3, buildingConstruction: '地板保温', distributionPattern: 'lognorm', distributionFunction: '(0.2,np.exp(3.45))' }
    ],
    option7: [
      { no: 0, distributionPattern: 'triang', distributionFunction: '(0.4,-0.02,0.015)' }
    ],
    option8: [
      { no: 0, uValue: 'RCP2.6，RCP4.5，RCP8.5' }
      // { no: 1, uValue: 'RCP2.6' },
      // { no: 2, uValue: 'RCP4.5' },
      // { no: 3, uValue: 'RCP8.5' }
    ]
  }
}

const mutations = {
  setIsEditing(state, isEditing) {
    state.isEditing = isEditing
  },
  setSelectedRows(state, selectedRows) {
    state.selectedRows = selectedRows
  },
  setCheckedOptions(state, checkedOptions) {
    state.checkedOptions = checkedOptions
  },
  setActivePanels(state, activePanels) {
    state.activePanels = activePanels
  },
  setTableData(state, { key, data }) {
    state.tableData[key] = data
  }
}

const actions = {
  updateIsEditing({ commit }, isEditing) {
    commit('setIsEditing', isEditing)
  },
  updateSelectedRows({ commit }, selectedRows) {
    commit('setSelectedRows', selectedRows)
  },
  updateCheckedOptions({ commit }, checkedOptions) {
    commit('setCheckedOptions', checkedOptions)
  },
  updateActivePanels({ commit }, activePanels) {
    commit('setActivePanels', activePanels)
  },
  updateTableData({ commit }, { key, data }) {
    commit('setTableData', { key, data })
  }
}

const getters = {
  getIsEditing: state => state.isEditing,
  getSelectedRows: state => state.selectedRows,
  getOptions: state => state.options,
  getCheckedOptions: state => state.checkedOptions,
  getActivePanels: state => state.activePanels,
  getTableData: state => state.tableData
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
