const state = {
  isEditing: false,
  selectedRows: [],
  options: [
    { value: 'option1', label: 'DA1. 建筑材料生产阶段的排放因子', disabled: false },
    { value: 'option2', label: 'DA2. 运输和施工的排放因子', disabled: true },
    { value: 'option3', label: 'DA3. 维护维修的排放因子', disabled: true },
    { value: 'option4', label: 'DA4. 构件替换的排放因子', disabled: true },
    { value: 'option5', label: 'DA5. 拆除阶段的排放因子', disabled: true },
    { value: 'option6', label: 'DA6. 运行能耗的排放因子', disabled: false },
    { value: 'option7', label: 'DA7. 电网排放因子的步长', disabled: true }
  ],
  checkedOptions: [],
  activePanels: '',
  tableData: {
    option1: [
      { no: 0, Materials: '窗户', ef: '-', unit: '-', characterization: '相对系数', distributionPattern: 'norm', distributionFunction: '(1,0.35)' },
      { no: 1, Materials: '岩棉', ef: 1.82, unit: 'KgCO2/kg', characterization: '绝对值', distributionPattern: 'norm', distributionFunction: '(1.82,0.44)' },
      { no: 2, Materials: 'XPS', ef: 7.26, unit: 'KgCO2/kg', characterization: '绝对值', distributionPattern: 'norm', distributionFunction: '(7.41,2.3)' }
    ],
    option6: [
      { no: 0, Energy: '天然气锅炉集中供暖', ef: 0.23, unit: 'KgCO2/kg', characterization: '相对系数', distributionPattern: 'norm', distributionFunction: '(1,0.02)' }
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
