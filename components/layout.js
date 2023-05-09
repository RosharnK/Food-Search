/** @format */

import { Main } from "next/document";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className=" md-mx-auto font-poppins">
      <Nav />
      <main>{children}</main>
    </div>
  );
}
