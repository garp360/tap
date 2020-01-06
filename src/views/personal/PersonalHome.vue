<template>
  <div class="parent">
    <div class="col1"><Profile :profile="profile" /></div>
    <div class="col2">
        <div class="parent2">
            <div class="row1"><ScheduleGrid :payPeriod="payPeriod" :schedule="schedule" /></div>
            <div class="row2"><Labor  :payPeriod="payPeriod" :labor="labor"/></div>
        </div>
    </div>
  </div>
</template>

<script>
import moment from "moment"
import {mapState, mapGetters} from 'vuex'
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
            let profile = {}
            if(this.employee && this.employee.profile) {
                profile = this.employee.profile
            }
            return profile
        },
        schedule: function() {
            let schedule = []

            let index = 1
            let date = moment(this.payPeriod.startDate, "YYYYMMDD")

            while (date.isSameOrBefore(moment(this.payPeriod.endDate, "YYYYMMDD"))) {
                let validSchedule = {}
                this.employee.schedule.forEach(s => {
                    if(moment(s.effectiveDate).isSameOrBefore(date)) {
                        validSchedule = s
                    }
                });
                schedule.push({
                    index: index,
                    date: new moment(date).valueOf(),
                    schedule: validSchedule
                })
                date = date.add(1, 'days')
                index++

            }
            console.log(JSON.stringify(schedule))
            return schedule
        },
        labor: function() {
            let labor = []

            let index = 1
            let date = moment(this.payPeriod.startDate, "YYYYMMDD")

            while (date.isSameOrBefore(moment(this.payPeriod.endDate, "YYYYMMDD"))) {
                let validLabor = {
                    index: index,
                    date: new moment(date).valueOf()
                }
                validLabor.labor = 570
                validLabor.leave = 0
                validLabor.comp = 0
                validLabor.overtime = 0

                labor.push(validLabor)
                date = date.add(1, 'days')
                index++

            }
            console.log(JSON.stringify(labor))
            return labor
        }
    }
};
</script>

<style lang="scss" scoped>
.parent, .parent2 {
  display: grid;

  position: absolute;
  top:0px;
  left:0px;
  right:0px;
  bottom:0px;
}
.parent {
  grid-template-columns: 550px 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .col1 {
    padding:10px;
    grid-area: 1 / 1 / 2 / 2;
  }
  .col2 {
    position: relative;
    grid-area: 1 / 2 / 2 / 3;
  }

}
.parent2 {
  grid-template-columns: 1fr;
  grid-template-rows: 450px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .row1 {
      padding:10px 10px 10px 0px; 
    grid-area: 1 / 1 / 2 / 2;
  }
  .row2 {
      padding:0px 10px 10px 0px; 
    grid-area: 2 / 1 / 3 / 2;
  }

}
</style>