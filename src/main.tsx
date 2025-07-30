import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router";
import {router} from "@src/global/routes/route.tsx";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@src/assets/layouts/css/body.css'
import '@src/assets/icons/css/icon.css'
import '@src/assets/layouts/css/layout.css'
import {ToastProvider} from "@src/global/toast/toast_provider.tsx";
import {ToastEventBridge} from "@src/global/toast/toast_event_bridge.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ToastProvider>
      <ToastEventBridge/>
      <RouterProvider router={router}/>
    </ToastProvider>
  </StrictMode>,
)
