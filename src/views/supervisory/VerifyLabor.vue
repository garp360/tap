<template>
  <div class="parent">
    <div class="col1">
      <v-card outlined>
        <v-toolbar dense flat>
          <v-toolbar-title>Verify Labor</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn class="ma-2" outlined color="primary" large>Clock It!</v-btn>
        </v-card-actions>
      </v-card>
    </div>
    <div class="col2"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labels: ["SU", "MO", "TU", "WED", "TH", "FR", "SA"],
      time: 0,
      forecast: [
        {
          day: "Tuesday",
          icon: "mdi-white-balance-sunny",
          temp: "24\xB0/12\xB0"
        },
        {
          day: "Wednesday",
          icon: "mdi-white-balance-sunny",
          temp: "22\xB0/14\xB0"
        },
        { day: "Thursday", icon: "mdi-cloud", temp: "25\xB0/15\xB0" }
      ]
    };
  }
};
</script>


<style lang="scss" scoped>
.parent {
  display: grid;

  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

.parent {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  .col1 {
    padding: 10px;
    grid-area: 1 / 1 / 2 / 2;
  }
  .col2 {
    position: relative;
    grid-area: 1 / 2 / 2 / 3;
  }
}
</style>