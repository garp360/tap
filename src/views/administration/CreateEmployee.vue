<template>
  <v-container fluid>
    <v-row dense>
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
              <v-divider />
              <v-container fluid>
                <form :autocomplete="false">
                  <v-row dense>
                    <v-col>
                      <v-text-field label="Employee Number" outlined></v-text-field>
                    </v-col>
                    <v-col>
                      <v-checkbox class="mt-3 pl-6" label="Is a Supervisor" indeterminate></v-checkbox>
                    </v-col>
                    <v-spacer />
                    <v-spacer />
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-text-field label="Social Security Number" outlined></v-text-field>
                    </v-col>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-text-field label="First Name" outlined></v-text-field>
                      <v-checkbox class="mt-3" label="Reports to External Entity" indeterminate></v-checkbox>
                    </v-col>
                    <v-col>
                      <v-text-field label="Middle Name" outlined></v-text-field>
                    </v-col>
                    <v-col>
                      <v-text-field label="Last Name" outlined></v-text-field>
                    </v-col>
                    <v-spacer />
                  </v-row>
                  <v-row dense>
                    <v-col>
                      <v-text-field class="pl-8" label="Personnel Number" outlined></v-text-field>
                      <v-autocomplete
                        v-model="values"
                        :items="['36089 - Mitchell J. Tribisky', '84994 - Peyton R. Manning', '92873 - John K. Elway']"
                        outlined
                        label="Supervisor"
                        class="pl-8"
                      ></v-autocomplete>
                    </v-col>
                    <v-spacer />
                    <v-spacer />
                    <v-spacer />
                  </v-row>
                </form>
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