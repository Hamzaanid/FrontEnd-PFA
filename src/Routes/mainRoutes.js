import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/error-page.js";

import MapPage from "../pages/Map-page.js";
import PageAnnonce from "../pages/Page-ConsultAnnonce.js";
import PageAddAnnonce from "../pages/Page-addAnnonce.js";
import PageInternat from "../pages/Page-Internat.js";
import PageReclamation from "../pages/Page-Reclamation.js";
import PageParking from "../pages/Page-Parking.js";

import Layout from "../Layouts/layout.js";
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
        path: "PageParking",
        element: <PageParking />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default router;
