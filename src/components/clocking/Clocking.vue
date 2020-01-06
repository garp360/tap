<template>
      <v-container class="p-5">
  <v-card outlined>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">00345 - Sandra Adams</v-list-item-title>
        <v-list-item-subtitle>Mon, January 6th, 2020 at 12:30 PM</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col cols="6">
            <v-text-field
            label="Network Activity"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field
            label="Network Activity"
            outlined
            dense
          ></v-text-field>
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn class="ma-2" outlined color="primary" large>Clock It!</v-btn>
    </v-card-actions>
  </v-card>
      </v-container>
</template>

<script>
  export default {
    data () {
      return {
        labels: ['SU', 'MO', 'TU', 'WED', 'TH', 'FR', 'SA'],
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
        ],
      }
    },
  }
</script>