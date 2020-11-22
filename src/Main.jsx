import React from 'react'
import { Switch, Route, withRouter } from "react-router-dom";
import NavBottom from "./components/NavBottom";
import SearchTop from "./components/SearchTop";
function Main(props) {
  console.log(props);
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

export default withRouter( Main)
