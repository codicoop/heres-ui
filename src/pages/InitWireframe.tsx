import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function InitWireframe (): JSX.Element {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
