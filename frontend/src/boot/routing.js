import { getStatus } from "src/datasources/localstorage";

export default async ({ router }) => {
  router.beforeEach((to, from, next) => {
    if (getStatus("ifca_authentication")) {
        if(to.path == '/auth' || to.path == '/auth/login') {
          next({path: "/"})
        }
    } else {
      if (to.path == "/") {
        next({ path: "/auth" });
      }
    }
    next();
  });
};
