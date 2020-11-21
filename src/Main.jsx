import React from 'react'
// import {  withRouter } from "react-router-dom";
import NavBottom from "./components/NavBottom";
import SearchTop from "./components/SearchTop";
function Main(props) {
  return (
    < >
 <SearchTop />
  <section id="section">
{props.children}
  </section>
         
<NavBottom />
    </>
  )
}

export default  Main
