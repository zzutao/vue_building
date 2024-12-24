const state = {
  isEditing: false,
  selectedRows: [],
  options: [
    { value: 'option1', label: 'DE1. 建筑布局、朝向', disabled: true },
    { value: 'option2', label: 'DE2. 建筑形体尺寸', disabled: true },
    { value: 'option3', label: 'DE3. 结构选型及材料用量', disabled: true },
    { value: 'option4', label: 'DE4. 窗墙比', disabled: true },
    { value: 'option5', label: 'DE5.1 南窗户选型', disabled: false },
    { value: 'option6', label: 'DE5.2 北窗户选型', disabled: false },
    { value: 'option7', label: 'DE5.3 东西窗户选型', disabled: false },
    { value: 'option8', label: 'DE6. 外墙构造选型', disabled: false },
    { value: 'option9', label: 'DE7. 屋面构造选型', disabled: false },
    { value: 'option10', label: 'DE8. 地板构造选型', disabled: false },
    { value: 'option11', label: 'DE9. 内墙参数及材料用量', disabled: true },
    { value: 'option12', label: 'DE10. 设备选型及材料用量', disabled: true }
  ],
  checkedOptions: [],
  activePanels: '',
  tableData: {
    option5: [
      { no: 0, uValue: 1.39, shgcValue: 0.24, ef: 97.7, windowFrame: '断桥铝合金框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 1, uValue: 1.46, shgcValue: 0.47, ef: 99.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 2, uValue: 1.54, shgcValue: 0.26, ef: 105.3, windowFrame: '断桥铝合金框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 3, uValue: 2.56, shgcValue: 0.57, ef: 101.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 4, uValue: 0.87, shgcValue: 0.42, ef: 104.5, windowFrame: '断桥铝合金框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 5, uValue: 1.10, shgcValue: 0.35, ef: 106.4, windowFrame: '断桥铝合金框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' },
      { no: 6, uValue: 1.24, shgcValue: 0.22, ef: 34.4, windowFrame: '铝包木框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 7, uValue: 1.31, shgcValue: 0.44, ef: 35.6, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 8, uValue: 1.39, shgcValue: 0.24, ef: 41.8, windowFrame: '铝包木框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 9, uValue: 2.40, shgcValue: 0.53, ef: 37.7, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 10, uValue: 0.87, shgcValue: 0.42, ef: 46.6, windowFrame: '铝包木框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 11, uValue: 1.09, shgcValue: 0.35, ef: 47.2, windowFrame: '铝包木框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' }
    ],
    option6: [
      { no: 0, uValue: 1.39, shgcValue: 0.24, ef: 97.7, windowFrame: '断桥铝合金框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 1, uValue: 1.46, shgcValue: 0.47, ef: 99.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 2, uValue: 1.54, shgcValue: 0.26, ef: 105.3, windowFrame: '断桥铝合金框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 3, uValue: 2.56, shgcValue: 0.57, ef: 101.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 4, uValue: 0.87, shgcValue: 0.42, ef: 104.5, windowFrame: '断桥铝合金框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 5, uValue: 1.10, shgcValue: 0.35, ef: 106.4, windowFrame: '断桥铝合金框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' },
      { no: 6, uValue: 1.24, shgcValue: 0.22, ef: 34.4, windowFrame: '铝包木框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 7, uValue: 1.31, shgcValue: 0.44, ef: 35.6, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 8, uValue: 1.39, shgcValue: 0.24, ef: 41.8, windowFrame: '铝包木框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 9, uValue: 2.40, shgcValue: 0.53, ef: 37.7, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 10, uValue: 0.87, shgcValue: 0.42, ef: 46.6, windowFrame: '铝包木框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 11, uValue: 1.09, shgcValue: 0.35, ef: 47.2, windowFrame: '铝包木框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' }
    ],
    option7: [
      { no: 0, uValue: 1.39, shgcValue: 0.24, ef: 97.7, windowFrame: '断桥铝合金框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 1, uValue: 1.46, shgcValue: 0.47, ef: 99.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 2, uValue: 1.54, shgcValue: 0.26, ef: 105.3, windowFrame: '断桥铝合金框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 3, uValue: 2.56, shgcValue: 0.57, ef: 101.0, windowFrame: '断桥铝合金框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 4, uValue: 0.87, shgcValue: 0.42, ef: 104.5, windowFrame: '断桥铝合金框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 5, uValue: 1.10, shgcValue: 0.35, ef: 106.4, windowFrame: '断桥铝合金框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' },
      { no: 6, uValue: 1.24, shgcValue: 0.22, ef: 34.4, windowFrame: '铝包木框', glassStructure: '6热反射玻璃+15氩气+4白玻' },
      { no: 7, uValue: 1.31, shgcValue: 0.44, ef: 35.6, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+4Low-E玻璃' },
      { no: 8, uValue: 1.39, shgcValue: 0.24, ef: 41.8, windowFrame: '铝包木框', glassStructure: '6钢化玻璃+12氩气+6钢化玻璃' },
      { no: 9, uValue: 2.40, shgcValue: 0.53, ef: 37.7, windowFrame: '铝包木框', glassStructure: '4白玻+16氩气+6.4夹胶玻璃' },
      { no: 10, uValue: 0.87, shgcValue: 0.42, ef: 46.6, windowFrame: '铝包木框', glassStructure: '4Low-E+18氩气+4白玻+18氩气+4Low-E' },
      { no: 11, uValue: 1.09, shgcValue: 0.35, ef: 47.2, windowFrame: '铝包木框', glassStructure: '6.8Low-E夹胶玻璃+10氩气+4白玻+10氩气+4Low-E夹胶玻璃' }
    ],
    option8: [
      { no: 0, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 50, uValue: 0.55, quantity: 15450.75 },
      { no: 1, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 65, uValue: 0.46, quantity: 20085.975 },
      { no: 2, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 80, uValue: 0.40, quantity: 24721.2 },
      { no: 3, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 95, uValue: 0.35, quantity: 29356.425 },
      { no: 4, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 110, uValue: 0.31, quantity: 33991.65 },
      { no: 5, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 125, uValue: 0.28, quantity: 38626.875 },
      { no: 6, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 140, uValue: 0.26, quantity: 47897.325 },
      { no: 7, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 155, uValue: 0.24, quantity: 52532.55 },
      { no: 8, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 170, uValue: 0.22, quantity: 57167.775 },
      { no: 9, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 185, uValue: 0.21, quantity: 61803 },
      { no: 10, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 200, uValue: 0.19, quantity: 66438.225 },
      { no: 11, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 215, uValue: 0.18, quantity: 71073.45 },
      { no: 12, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 230, uValue: 0.17, quantity: 75708.675 },
      { no: 13, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 345, uValue: 0.16, quantity: 80343.9 },
      { no: 14, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 260, uValue: 0.15, quantity: 84979.125 },
      { no: 15, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 275, uValue: 0.14, quantity: 89614.35 },
      { no: 16, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 290, uValue: 0.14, quantity: 94249.575 },
      { no: 17, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 305, uValue: 0.13, quantity: 98884.8 },
      { no: 18, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 320, uValue: 0.13, quantity: 103520.025 },
      { no: 19, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 335, uValue: 0.12, quantity: 20085.975 },
      { no: 20, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 350, uValue: 0.12, quantity: 108155.25 },
      { no: 21, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 365, uValue: 0.11, quantity: 112790.475 },
      { no: 22, constructionForm: '岩棉外保温', insulationMaterial: '岩棉', carbonEmissionFactor: 1.82, density: 150, thickness: 380, uValue: 0.11, quantity: 117425.7 }
    ],
    option9: [
      { no: 0, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 65.000, uValue: 0.40, quantity: 3267.81 },
      { no: 1, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 80.000, uValue: 0.34, quantity: 4021.92 },
      { no: 2, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 95.000, uValue: 0.30, quantity: 4776.03 },
      { no: 3, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 110.000, uValue: 0.26, quantity: 5530.14 },
      { no: 4, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 125.000, uValue: 0.23, quantity: 6284.25 },
      { no: 5, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 140.000, uValue: 0.21, quantity: 7038.36 },
      { no: 6, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 155.000, uValue: 0.19, quantity: 7792.47 },
      { no: 7, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 170.000, uValue: 0.18, quantity: 8546.58 },
      { no: 8, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 185.000, uValue: 0.16, quantity: 9300.69 },
      { no: 9, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 200.000, uValue: 0.15, quantity: 10054.8 },
      { no: 10, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 215.000, uValue: 0.14, quantity: 10808.91 },
      { no: 11, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 230.000, uValue: 0.13, quantity: 11563.02 },
      { no: 12, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 245.000, uValue: 0.13, quantity: 12317.13 },
      { no: 13, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 260.000, uValue: 0.12, quantity: 13071.24 },
      { no: 14, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 275.000, uValue: 0.11, quantity: 13825.35 },
      { no: 15, constructionForm: 'XPS屋面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 300.000, uValue: 0.11, quantity: 14579.46 }
    ],
    option10: [
      { no: 0, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 65.000, uValue: 0.402, quantity: 3267.81 },
      { no: 1, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 80.000, uValue: 0.34, quantity: 4021.92 },
      { no: 2, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 95.000, uValue: 0.295, quantity: 4776.03 },
      { no: 3, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 110.000, uValue: 0.26, quantity: 5530.14 },
      { no: 4, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 125.000, uValue: 0.232, quantity: 6284.25 },
      { no: 5, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 140.000, uValue: 0.21, quantity: 7038.36 },
      { no: 6, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 155.000, uValue: 0.192, quantity: 7792.47 },
      { no: 7, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 170.000, uValue: 0.176, quantity: 8546.58 },
      { no: 8, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 185.000, uValue: 0.163, quantity: 9300.69 },
      { no: 9, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 200.000, uValue: 0.152, quantity: 10054.8 },
      { no: 10, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 215.000, uValue: 0.142, quantity: 10808.91 },
      { no: 11, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 230.000, uValue: 0.134, quantity: 11563.02 },
      { no: 12, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 245.000, uValue: 0.126, quantity: 12317.13 },
      { no: 13, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 260.000, uValue: 0.119, quantity: 13071.24 },
      { no: 14, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 275.000, uValue: 0.113, quantity: 13825.35 },
      { no: 15, constructionForm: 'XPS地面外保温', insulationMaterial: 'XPS', carbonEmissionFactor: 7.260, density: 35.00, thickness: 300.000, uValue: 0.107, quantity: 14579.46 }
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
