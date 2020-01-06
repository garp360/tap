<template>
  <div id="app">
  <v-app>
    <v-app-bar
      app
      clipped-right
      color="blue darken-4" 
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawerLeft = !drawerLeft" />
      <v-toolbar-title>
        <div class="font-weight-black title yellow--text">TAP<sup style="font-size:.5em;padding-left:2px;margin-top:-3px;">v0.5</sup></div>
        <div class="font-weight-light caption" style="line-height:1.0;">Time, Attendance & Payroll</div>
     </v-toolbar-title>
      <v-spacer />
      <v-icon @click.stop="flyOutRight = !flyOutRight">mdi-clock-outline</v-icon>
    </v-app-bar>


    <v-navigation-drawer
      v-bind:mini-variant.sync="collapsed"
      v-model="drawerLeft"
      expand-on-hover
      app
    >
    <template v-slot:prepend>
        <v-list class="top">
          <v-list-item class="blue darken-4">
            <v-list-item-avatar>
              <v-icon class="white--text display-2">mdi-account-clock</v-icon>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link two-line class="blue darken-4">
            <v-list-item-content class="white--text" >
              <v-list-item-title class="title">Sandra Adams</v-list-item-title>
              <v-list-item-subtitle class="white--text">sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon class="white--text">mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template> 

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link :to="{name:'personal'}">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Home (My TAP)</v-list-item-title>
        </v-list-item>

        <v-subheader>{{header("ADMINISTRATION", "ADMIN")}}</v-subheader>

        <v-list-item link :to="{name:'admin-search'}">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Manage Employees</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name: 'admin-create-employee'}">
          <v-list-item-icon>
            <v-icon>mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Create Employee</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{name:'admin-update-employee'}">
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Update Employee</v-list-item-title>
        </v-list-item>

        <v-subheader>{{header("SUPERVISORY", "SPVSR")}}</v-subheader>

        <v-list-item link :to="{name:'supervisor-employee-browser'}">
          <v-list-item-icon>
            <v-icon>mdi-account-supervisor</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Manage Employees</v-list-item-title>
        </v-list-item>

        <v-list-item link :to="{name:'supervisor-employee-update'}">
          <v-list-item-icon>
            <v-icon>mdi-account-edit</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Update Employee</v-list-item-title>
        </v-list-item>
        
        <v-list-item link :to="{name:'supervisor-labor-verification'}">
          <v-list-item-icon>
            <v-icon>mdi-clipboard-check-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Verify Labor</v-list-item-title>
        </v-list-item>


      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-navigation-drawer
      v-model="flyOutRight"
      fixed
      right
      temporary
      width="auto"
      color="#fafafa"
      
    >
    <Clocking />
    </v-navigation-drawer>

    <v-footer
      app
      color="blue darken-4"
      dark
    >
      <span>Vuetify</span>
      <v-spacer />
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
import Clocking from "@/components/clocking/Clocking"
  export default {
    components: {
        Clocking
    },
    props: {
      source: String,
    },
    data: function() {
        return {
            drawerLeft: null,
            flyOutRight: false,
            collapsed: true
        }
    },
    methods: {
        header: function(x,c) {
            return this.collapsed ? c : x
        }
    }
  }
</script>

<style lang="scss" scoped>
.v-list {
  &.top {
    padding: unset;
  }
}
</style>