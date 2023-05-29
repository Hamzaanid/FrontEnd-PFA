import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page.js";

import MapPage from "../pages/Map-page.js";
import PageAnnonce from "../pages/annoncements/Page-ConsultAnnonce.js";
import PageAddAnnonce from "../pages/annoncements/Page-addAnnonce.js";
import PageInternat from "../pages/internat/Page-Internat.js";
import Residence from "../pages/internat/residence.js";

import PageReclamation from "../pages/reclamation/Page-Reclamation.js";
import PageListReclamation from "../pages/reclamation/Page-list-reclamation.js";
import PageParking from "../pages/parking/Page-Parking.js";

import RequireAuth from "../Compenents/Auth/requireAuth.js";
import Layout from "../Layouts/user/layout.js";
import LoginForm from "../pages/Authentication/Login.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RequireAuth><Layout /></RequireAuth>,
    children: [
      {
        path: "Home",
        element:<MapPage />,
      },
      {
        path: "PageAnnonce",
        element: <PageAnnonce />,
      },
      {
        path: "PageAddAnnonce",
        element: <PageAddAnnonce />,
      },
      {
        path: "PageInternat",
        element: <PageInternat />,
      },
      {
        path: "pageReclamation",
        element: <PageReclamation />,
      },
      {
        path: "ListeReclamations",
        element: <PageListReclamation />,
      },
      {
        path: "residence",
        element: <Residence />,
      },
      
      {
        path: "PageParking",
        element: <PageParking />,
      },
      
    ],
   
    errorElement: <ErrorPage />,
  },
  {
    path: "login",
    element: <LoginForm />
  },
]);
export default router;
