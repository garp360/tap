<template>
  <v-card outlined class="scrollable" :height="height">
    <v-list-item three-line>
      <v-list-item-content class="px-1">
        <div class="overline mb-4">PROFILE</div>
        <v-list-item-title class="headline mb-1">Sandra Michelle Adams</v-list-item-title>
        <v-list-item-subtitle>
          <dl>
            <hr />
            <hr />
            <dt>Supervisor Designation</dt>
            <dd>{{formatYesNo(profile.supervisorDesignation)}}</dd>
            <dt>Employee Number</dt>
            <dd>{{profile.employeeNumber}}</dd>
            <dt>Social Security Number</dt>
            <dd>{{profile.socialSecurityNumber}}</dd>
            <dt>Effective Date</dt>
            <dd>{{profile.effectiveDate}}</dd>
            <dt>Supervisor Employee Number</dt>
            <dd>{{profile.supervisor.employeeNumber}}</dd>
            <dt>Supervisor Name</dt>
            <dd>{{formatEmployeeName(profile.supervisor)}}</dd>
            <dt>Employee Type</dt>
            <dd>{{formatTerm(profile.employeeType)}}</dd>
            <dt>DCPS Employee Type</dt>
            <dd>{{formatTerm(profile.dcpsEmployeeType)}}</dd>
            <dt>Work Schedule Code</dt>
            <dd>{{formatTerm(profile.workScheduleCode)}}</dd>
            <dt>Shift</dt>
            <dd>{{formatTerm(profile.shift)}}</dd>
            <dt>Fair Labor Standards Act Code</dt>
            <dd>{{formatTerm(profile.fairLaborStandardsActCode)}}</dd>
            <dt>Unit Identification Code</dt>
            <dd>{{profile.unitIdentificationCode}}</dd>
          </dl>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      windowHeight: 0
    };
  },
  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    },
    formatTerm(dataTerm) {
        let formattedTerm = ""
        if(dataTerm && dataTerm.term && dataTerm.termValue) {
            formattedTerm = dataTerm.termValue + " - " + dataTerm.term
        }
        return formattedTerm
    },
    formatYesNo(booleanValue) {
        let formattedTerm = "No"
        if(booleanValue) {
            fformattedTerm = "Yes"
        }
        return formattedTerm
    },
    formatEmployeeName(employee) {
        let name = employee.firstName + " " + employee.lastName
        if(employee.middleName) {
            name = employee.firstName + " "  + employee.middleName + " " + employee.lastName
        }
        return name
    }
  },
  computed: {
    height: function() {
      let h = this.windowHeight - 117;
      console.log("h = " + h);
      return h + "px";
    }
  },

  beforeMount() {
    this.$nextTick(() => {
      this.onResize();
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>

<style lang="scss" scoped>
.scrollable {
  overflow: auto;
}

dl {
  display: grid;
  grid-template-columns: max-content auto;
}

dt {
  font-weight: bold;
  color: #222;
  grid-column-start: 1;
  padding: 5px;
  text-align: right;
  &:after {
    content: ":";
  }
}

dd {
  grid-column-start: 2;
  padding: 5px 10px 5px 0px;
}
</style>