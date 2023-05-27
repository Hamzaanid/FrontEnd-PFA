import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page.js";

import MapPage from "../pages/Map-page.js";
import PageAnnonce from "../pages/annoncements/Page-ConsultAnnonce.js";
import PageAddAnnonce from "../pages/annoncements/Page-addAnnonce.js";
import PageInternat from "../pages/internat/Page-Internat.js";
import PageReclamation from "../pages/reclamation/Page-Reclamation.js";
import PageListReclamation from "../pages/reclamation/Page-list-reclamation.js";

import PageParking from "../pages/parking/Page-Parking.js";

import Layout from "../Layouts/user/layout.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "Home",
        element: <MapPage />,
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
        path: "PageParking",
        element: <PageParking />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
