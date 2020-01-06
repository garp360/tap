import Vue from "vue";
import VueRouter from "vue-router";
import TimeAttendancePayroll from "../views/TimeAttendancePayroll";
import PersonalHome from "@/views/personal/PersonalHome.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: {
      path: "tap"
    }
  },
  {
    path: "/tap",
    component: TimeAttendancePayroll,
    children: [
      {
        path: "",
        redirect: {
          path: "personal"
        }
      },
      {
        path: "personal",
        name: "personal",
        component: PersonalHome
      },
      {
        path: "admin/search",
        name: "admin-search",
        component: () => import("@/views/administration/Search.vue")
      },
      {
        path: "admin/employee/create",
        name: "admin-create-employee",
        component: () => import("@/views/administration/CreateEmployee.vue")
      },
      {
        path: "admin/employee/update",
        name: "admin-update-employee",
        component: () => import("@/views/administration/UpdateEmployee.vue")
      },
      {
        path: "supervisor/employee/browser",
        name: "supervisor-employee-browser",
        component: () => import("@/views/supervisory/EmployeeBrowser.vue")
      },
      {
        path: "supervisor/labor/verification",
        name: "supervisor-labor-verification",
        component: () => import("@/views/supervisory/VerifyLabor.vue")
      },
      {
        path: "supervisor/employee/update",
        name: "supervisor-employee-update",
        component: () => import("@/views/supervisory/UpdateEmployee.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
