import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";
import {router} from "@src/routes/route.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@src/assets/layouts/css/body.css'
import '@src/assets/icons/css/icon.css'
import '@src/assets/layouts/css/layout.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
