import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import ErrorPage from "./ErrorPage";
import Contact from "./Contact";
import { getContactLoader, getContactsLoader } from "./loaders/contactsLoaders";
import {
  createContactAction,
  deleteContactAction,
  editContactAction,
  fevoriteAction,
} from "./actions/contactsActions";
import EditContact from "./EditContact";
import Index from "./Index";

// const router = createBrowserRouter([
//   {
//     path: "/", // root route
//     element: <Root />,
//     errorElement: <ErrorPage />,
//     loader: getContactsLoader,
//     action: createContactAction,
//     children: [
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           {
//             index: true,
//             element: <Index />,
//           },

//           {
//             path: "/contacts/:contactId",
//             element: <Contact />,
//             loader: getContactLoader,
//             action: fevoriteAction,
//           },
//           {
//             path: "/contacts/:contactId/edit",
//             element: <EditContact />,
//             loader: getContactLoader,
//             action: editContactAction,
//           },
//           {
//             path: "/contacts/:contactId/destroy",
//             action: deleteContactAction,
//             errorElement: <div>Delete error</div>,
//           },
//         ],
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
      loader={getContactsLoader}
      action={createContactAction}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index={true} element={<Index />} />
        <Route
          path="/contacts/:contactId"
          element={<Contact />}
          loader={getContactLoader}
          action={fevoriteAction}
        />
        <Route
          path="/contacts/:contactId/edit"
          element={<EditContact />}
          loader={getContactLoader}
          action={editContactAction}
        />
        <Route
          path="/contacts/:contactId/destroy"
          element={<div>Delete error</div>}
          action={deleteContactAction}
        />
      </Route>
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
