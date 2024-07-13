import React from 'react'
import { Link } from 'react-router-dom'

export const AdminSidebar = () => {
  return (
    <div> 
       <nav className="navbar-default navbar-side" role="navigation">
          <div className="sidebar-collapse">
            <ul className="nav" id="main-menu">


              <li>
                <a href="#"><i className="fa fa-product-hunt " />Driver <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <Link to="/add-driver"><i className="fa fa-toggle-on" />Add Driver</Link>
                  </li>
                  <li>
                    <Link to="/list-driver"><i className="fa fa-bell " />Driver List</Link>
                  </li>

                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-product-hunt " />Booking <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">

                <li>
                    <a href="#"><i className="fa fa-circle-o " />Add Booking </a>
                  </li>

                  <li>
                    <a href="progress.html"><i className="fa fa-circle-o " />Booking list</a>
                  </li>
                

                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-product-hunt " />Cars<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="panel-tabs.html"><i className="fa fa-toggle-on" />Add Car</a>
                  </li>
                  <li>
                    <a href="notification.html"><i className="fa fa-bell " />Car List</a>
                  </li>
                </ul>
              </li>

             
              <li>
                <a href="#"><i className="fa fa-yelp " />Report<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Cars Details</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Driver Details</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" /> Payment report</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Transaction report</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><i className="fa fa-yelp " /> Customer <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Customer Details</a>
                  </li>
                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-sitemap " />Users<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">

                </ul>
              </li>
              <li>
                <a href="blank.html"><i className="fa fa-square-o " />Setting</a>
              </li>
            </ul>
          </div>
        </nav>
    </div>
  )
}
