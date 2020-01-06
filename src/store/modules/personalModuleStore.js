import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = {
  namespaced: true,
  state: {
    payPeriod: {
      startDate: "20200105",
      endDate: "20200118"
    },
    employee: {
      profile: {
        supervisorDesignation: false,
        employeeNumber: "00345",
        socialSecurityNumber: "111-11-1111",
        effectiveDate: "Monday, January 23rd, 1997",
        supervisor: {
          employeeNumber: "08766",
          firstName: "Harold",
          middleName: "Jackson",
          lastName: "Humphries"
        },
        employeeType: {
          term: "Per Annum",
          termValue: "1"
        },
        dcpsEmployeeType: {
          term: "Regular",
          termValue: "R"
        },
        workScheduleCode: {
          term: "Full TIme",
          termValue: "F"
        },
        shift: {
          term: "First Shift",
          termValue: "1"
        },
        fairLaborStandardsActCode: {
          term: "Exempt",
          termValue: "E"
        },
        unitIdentificationCode: "N11665"
      },
      schedule: [
        {
          effectiveDate: "20110101",
          alternateWorkSchedule: 0,
          shift: 1,
          shiftStart: "0700",
          shiftDuration: 570,
          lunchStart: "1100",
          lunchDuration: 30
        },
        {
          effectiveDate: "20200114",
          alternateWorkSchedule: 0,
          shift: 2,
          shiftStart: "1500",
          shiftDuration: 570,
          lunchStart: "1900",
          lunchDuration: 30
        }
      ]
    }
  },
  getters: {
    payPeriod: state => {
      return state.payPeriod;
    },
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
