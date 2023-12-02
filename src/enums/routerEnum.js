export const ROUTER_ENUM = {
  DASHBOARD: {
    path: "/",
    label: "Dashboard",
    // icon: Buraya header'da göstermek için icon eklenebilir.
    headerVisible: true,
  },

  HOME: {
    path: "/home",
    label: "Home",
    // icon: Buraya header'da göstermek için icon eklenebilir.
    headerVisible: true,
  },

  ABOUT: {
    path: "/about",
    label: "About",
    // icon: Buraya header'da göstermek için icon eklenebilir.
    headerVisible: true,
  },

  CONTACT: {
    path: "/contact",
    label: "Contact",
    // icon: Buraya header'da göstermek için icon eklenebilir.
    headerVisible: true,
  },
};

export const headerItemsReturn = () => {
  let routerEnums = ROUTER_ENUM;
  let routerArray = Object.values(routerEnums);

  let visibleRoutes = routerArray.filter(
    (route) => route.headerVisible === true
  );

  return visibleRoutes;
};
