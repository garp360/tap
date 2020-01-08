<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card outlined>
          <v-list-item>
            <v-list-item-content>
              <v-toolbar flat dense>
                <v-toolbar-title>Create Employee</v-toolbar-title>
                <v-spacer></v-spacer>
                <template>
                  <v-btn icon>
                    <v-icon>mdi-account-edit-outline</v-icon>
                  </v-btn>
                </template>
              </v-toolbar>
              <v-container fluid>
                <v-row>
                  <v-col>
                    <v-text-field label="Employee Number" outlined dense></v-text-field>
                  </v-col>
                  <v-col>
                    <v-text-field label="Social Security Number" outlined dense></v-text-field>
                  </v-col>
                  <v-spacer />
                  <v-spacer />
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
                  <v-col cols="1">-OR-</v-col>
                  <v-col xs="3" sm="3" md="2" lg="2" xl="1">
                    <v-autocomplete
                      v-model="values"
                      :items="items"
                      outlined
                      dense
                      label="Supervisor"
                    ></v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
</style>