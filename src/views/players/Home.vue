<template>
  <v-simple-table fixed-header :height="height">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Player</th>
          <th class="text-left">HCP</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in desserts" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.hcp }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      windowHeight: 0,
      desserts: [
        {
          name: "Garth Pidcock",
          hcp: 5.1
        },
        {
          name: "Ice cream sandwich",
          hcp: 237
        },
        {
          name: "Eclair",
          hcp: 262
        },
        {
          name: "Cupcake",
          hcp: 305
        },
        {
          name: "Gingerbread",
          hcp: 356
        },
        {
          name: "Jelly bean",
          hcp: 375
        },
        {
          name: "Lollipop",
          hcp: 392
        },
        {
          name: "Honeycomb",
          hcp: 408
        },
        {
          name: "Donut",
          hcp: 452
        },
        {
          name: "KitKat",
          hcp: 518
        },
        {
          name: "Garth Pidcock2",
          hcp: 5.1
        },
        {
          name: "Ice cream sandwich2",
          hcp: 237
        },
        {
          name: "Eclair2",
          hcp: 262
        },
        {
          name: "Cupcake2",
          hcp: 305
        },
        {
          name: "Gingerbread2",
          hcp: 356
        },
        {
          name: "Jelly bean2",
          hcp: 375
        },
        {
          name: "Lollipop2",
          hcp: 392
        },
        {
          name: "Honeycomb2",
          hcp: 408
        },
        {
          name: "Donut2",
          hcp: 452
        },
        {
          name: "KitKat2",
          hcp: 518
        }
      ]
    };
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
    }
  },
  computed: {
    height: function() {
        let h = this.windowHeight - 105
        console.log("h = " + h)
      return  h + "px";
    }
  },

  beforeMount() {
    this.$nextTick(() => {
        this.onResize()
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  }
};
</script>