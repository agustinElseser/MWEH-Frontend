import AuthLayout from "../layout/AuthLayout";

export const routes = [
  {
    to: "/",
    path: "/",
    component: <AuthLayout />,
    name: "Layout",
    private: false,
  },
  {
    to: "/login",
    path: "/login",
    component: <Login />,
    name: "Login",
    private: false,
  },
  {
    to: "/register",
    path: "/register",
    component: <Registrar />,
    name: "Register",
    private: false,
  },
  {
    to: "/reset-password",
    path: "/reset-password",
    component: <OlvidePassword />,
    name: "Reset-password",
    private: false,
  },
  {
    to: "/reset-password/:token",
    path: "/reset-password/:token",
    component: <NuevoPW />,
    name: "NewPW",
    private: false,
  },
  {
    to: "/confirm/:token",
    path: "/confirm/:token",
    component: <ConfirmarCuenta />,
    name: "Confirm",
    private: false,
  },
  {
    to: "/proyect/:id",
    path: "/proyect/:id",
    component: <Explorar />,
    name: "Proyect-id",
    private: false,
  },
  {
    to: "/admin",
    path: "/admin",
    component: <Privated />,
    name: "Privated",
    private: true,
  },
  {
    to: "/profile",
    path: "/profile",
    component: <EditProfile />,
    name: "Profile",
    private: true,
  },
  {
    to: "/myProyects",
    path: "/myProyects",
    component: <AdministrarProyectos />,
    name: "MyProyects",
    private: true,
  },
  {
    to: "/reset-pw",
    path: "/reset-pw",
    component: <CambiarPw />,
    name: "Reset-pw",
    private: true,
  },

  {
    to: "/favoritos",
    path: "/favoritos",
    component: <Favoritos />,
    name: "Favoritos",
    private: true,
  },
];
