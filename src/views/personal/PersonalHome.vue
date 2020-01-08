<template>
  <v-container fluid>
    <v-row>
    <v-col sm="12" md="4" ma="2">
        <Profile :profile="profile" />
      </v-col>

          <v-col sm="12" md="8" ma="2">
            <ScheduleGrid :payPeriod="payPeriod" :schedule="schedule" />
          </v-col>
    </v-row>
    <v-row>
          <v-col sm="12" md="8" offset-md="4" offset-sm="0"  ma="2">
            <Labor :payPeriod="payPeriod" :labor="labor" />
          </v-col>
        </v-row>

  </v-container>
</template>

<script>
import moment from "moment";
import { mapState, mapGetters } from "vuex";
import Profile from "@/components/shared/Profile.vue";
import Schedule from "@/components/shared/Schedule.vue";
import ScheduleGrid from "@/components/shared/ScheduleGrid.vue";
import Labor from "@/components/shared/Labor.vue";

export default {
  components: {
    Profile,
    Schedule,
    ScheduleGrid,
    Labor
  },
  computed: {
    ...mapGetters("personal", ["employee", "payPeriod"]),
    profile: function() {
      let profile = {};
      if (this.employee && this.employee.profile) {
        profile = this.employee.profile;
      }
      return profile;
    },
    schedule: function() {
      let schedule = [];

      let index = 1;
      let date = moment(this.payPeriod.startDate, "YYYYMMDD");

      while (date.isSameOrBefore(moment(this.payPeriod.endDate, "YYYYMMDD"))) {
        let validSchedule = {};
        this.employee.schedule.forEach(s => {
          if (moment(s.effectiveDate).isSameOrBefore(date)) {
            validSchedule = s;
          }
        });
        schedule.push({
          index: index,
          date: new moment(date).valueOf(),
          schedule: validSchedule
        });
        date = date.add(1, "days");
        index++;
      }
      console.log(JSON.stringify(schedule));
      return schedule;
    },
    labor: function() {
      let labor = [];

      let index = 1;
      let date = moment(this.payPeriod.startDate, "YYYYMMDD");

      while (date.isSameOrBefore(moment(this.payPeriod.endDate, "YYYYMMDD"))) {
        let validLabor = {
          index: index,
          date: new moment(date).valueOf()
        };
        validLabor.labor = 570;
        validLabor.leave = 0;
        validLabor.comp = 0;
        validLabor.overtime = 0;

        labor.push(validLabor);
        date = date.add(1, "days");
        index++;
      }
      console.log(JSON.stringify(labor));
      return labor;
    }
  }
};
</script>

<style lang="scss" scoped>

</style>