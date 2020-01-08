<template>
  <v-card outlined>
    <v-list-item>
      <v-list-item-content>
        <v-toolbar flat dense>
          <v-toolbar-title class="overline">Schedule</v-toolbar-title>
          <v-spacer></v-spacer>
          <template>
            <v-btn icon>
              <v-icon>mdi-calendar-edit</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-open-in-new</v-icon>
            </v-btn>
          </template>
        </v-toolbar>

        <v-simple-table fixed-header dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Day</th>
                <th class="text-left">Date</th>
                <th class="text-center">AWS</th>
                <th class="text-center">Shift</th>
                <th class="text-center">Shift Start</th>
                <th class="text-center">Shift Duration</th>
                <th class="text-center">Lunch Start</th>
                <th class="text-center">Lunch Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(day, index) in schedule" v-bind:key="`${'day' + index}`">
                <td class="text-left">{{formatDay(day.date)}}</td>
                <td class="text-left">{{formatDate(day.date)}}</td>
                <td class="text-center">{{day.schedule.alternateWorkSchedule}}</td>
                <td class="text-center">{{day.schedule.shift}}</td>
                <td class="text-center">{{day.schedule.shiftStart}}</td>
                <td class="text-center">{{day.schedule.shiftDuration}}</td>
                <td class="text-center">{{day.schedule.lunchStart}}</td>
                <td class="text-center">{{day.schedule.lunchDuration}}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import moment from "moment";

export default {
  props: {
    payPeriod: {
      type: Object,
      required: function() {
        return true;
      }
    },
    schedule: {
      type: Array,
      required: function() {
        return true;
      }
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
    formatDay(date) {
      return moment(date).format("dddd");
    },
    formatDate(date) {
      return moment(date).format("MMM/DD");
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
</style>