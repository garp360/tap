import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
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
    employee: state => {
      return state.employee;
    },
    employeeProfile: state => {
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
  actions: {}
};

export default store;
