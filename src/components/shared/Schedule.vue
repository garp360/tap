<template>
  <v-card outlined class="scrollable" height="480px">
    <v-list-item three-line>
      <v-list-item-content class="px-1">
        <div class="overline mb-4">SCHEDULE</div>
        <v-list-item-subtitle>
          <div class="schedule">
            <div v-for="(day, index) in schedule" v-bind:key="`${'day' + index}`">
            <div style="display: flex;justify-content: space-between;">
              {{formatDay(day.date)}}
              {{formatDate(day.date)}}
            </div>
              <dl>
                <dt>AWS</dt>
                <dd>{{day.schedule.alternateWorkSchedule}}</dd>
                <dt>Shift</dt>
                <dd>{{day.schedule.shift}}</dd>
                <dt>Shift Start</dt>
                <dd>{{day.schedule.shiftStart}}</dd>
                <dt>Shift Duration</dt>
                <dd>{{day.schedule.shiftDuration}}</dd>
                <dt>Lunch Start</dt>
                <dd>{{day.schedule.lunchStart}}</dd>
                <dt>Lunch Duration</dt>
                <dd>{{day.schedule.lunchDuration}}</dd>
              </dl>
            </div>
          </div>
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
import moment from "moment"

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
        return moment(date).format("dddd")
    },
    formatDate(date) {
        return moment(date).format("MMM/D")
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

.schedule {
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  > div {
      border: 1px solid #888;
  }
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