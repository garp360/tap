<template>
  <div class="parent">
    <div class="col1">
      <v-card outlined>
        <v-toolbar dense flat>
          <v-toolbar-title>Create Employee</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>

        <v-card-text>
          <v-row no-gutters>
            <v-col xs="16" sm="3" md="2" lg="2" xl="1">
              <v-text-field label="Employee Number" outlined dense></v-text-field>
            </v-col>
            <v-col xs="6" sm="3" md="2" lg="2" xl="1">
              <v-text-field label="Social Security Number" outlined dense></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col xs="12">
              <v-checkbox v-model="checkbox1" label="Reports to External Entity"></v-checkbox>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col xs="3" sm="3" md="2" lg="2" xl="1">
              <v-text-field label="Personnel Number" outlined dense></v-text-field>
            </v-col>
            <v-col cols="1">
              -OR-
            </v-col>
            <v-col xs="3" sm="3" md="2" lg="2" xl="1">
              <v-autocomplete v-model="values" :items="items" outlined dense label="Supervisor"></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>

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
.col-xl,
.col-xl-auto,
.col-xl-12,
.col-xl-11,
.col-xl-10,
.col-xl-9,
.col-xl-8,
.col-xl-7,
.col-xl-6,
.col-xl-5,
.col-xl-4,
.col-xl-3,
.col-xl-2,
.col-xl-1,
.col-lg,
.col-lg-auto,
.col-lg-12,
.col-lg-11,
.col-lg-10,
.col-lg-9,
.col-lg-8,
.col-lg-7,
.col-lg-6,
.col-lg-5,
.col-lg-4,
.col-lg-3,
.col-lg-2,
.col-lg-1,
.col-md,
.col-md-auto,
.col-md-12,
.col-md-11,
.col-md-10,
.col-md-9,
.col-md-8,
.col-md-7,
.col-md-6,
.col-md-5,
.col-md-4,
.col-md-3,
.col-md-2,
.col-md-1,
.col-sm,
.col-sm-auto,
.col-sm-12,
.col-sm-11,
.col-sm-10,
.col-sm-9,
.col-sm-8,
.col-sm-7,
.col-sm-6,
.col-sm-5,
.col-sm-4,
.col-sm-3,
.col-sm-2,
.col-sm-1,
.col,
.col-auto,
.col-12,
.col-11,
.col-10,
.col-9,
.col-8,
.col-7,
.col-6,
.col-5,
.col-4,
.col-3,
.col-2,
.col-1 {
  width: 100%;
  padding: 2px;
}

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