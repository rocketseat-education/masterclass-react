import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";

import './Default.css'

export function Default() {
  return (
    <div className="layout">
      <Sidebar />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}