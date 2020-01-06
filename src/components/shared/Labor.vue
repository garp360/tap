<template>
  <v-card outlined class="scrollable" :height="height">
    <v-list-item>
      <v-list-item-content class="px-1">
        <div class="overline mb-4">LABOR</div>
      </v-list-item-content>
    </v-list-item>
    <v-simple-table fixed-header dense :height="height - 60">>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Day</th>
            <th class="text-left">Date</th>
            <th class="text-center">Labor</th>
            <th class="text-center">Leave</th>
            <th class="text-center">Comp</th>
            <th class="text-center">Overtime</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(day, index) in labor" v-bind:key="`${'day' + index}`">
            <td class="text-left">{{formatDay(day.date)}}</td>
            <td class="text-left">{{formatDate(day.date)}}</td>
            <td class="text-center">{{day.labor}}</td>
            <td class="text-center">{{day.leave}}</td>
            <td class="text-center">{{day.comp}}</td>
            <td class="text-center">{{day.overtime}}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
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
    labor: {
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
      let h = this.windowHeight - 107 - 450;
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