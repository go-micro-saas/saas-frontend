import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/layouts/css/body.css'
import '@src/assets/icons/css/icon.css'

import 'bootstrap/dist/js/bootstrap.min.js';

import router from "@src/routes/route.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
