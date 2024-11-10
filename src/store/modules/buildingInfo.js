const state = {
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
  },
  isEditing: false
}

const mutations = {
  setForm(state, form) {
    state.form = form
  },
  setIsEditing(state, isEditing) {
    state.isEditing = isEditing
  }
}

const actions = {
  updateForm({ commit }, form) {
    commit('setForm', form)
  },
  toggleIsEditing({ commit }, isEditing) {
    commit('setIsEditing', isEditing)
  }
}

const getters = {
  getForm: state => state.form,
  getIsEditing: state => state.isEditing
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
