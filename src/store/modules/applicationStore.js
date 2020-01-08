import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    tapUser: {},
    conopsUser: {},
    settings: {},
    payPeriods: [
      {
        startDate: "20191222",
        endDate: "202001104"
      },
      {
        startDate: "20200105",
        endDate: "20200118"
      }
    ]
  },
  getters: {
    tapUser: state => {
      return state.employee;
    },
    conopsUser: state => {
      return state.employee.profile;
    }
  },
  mutations: {
    setEmployee({ state }, data) {
      this.employee = data.employee;
    },
    setEmployeeProfile({ state }, data) {
      this.employee = data.employee;
    }
  },
  actions: {
  }
};

export default store;
