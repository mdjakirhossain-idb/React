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
                    <Link to="/list-driver"><i className="fa fa-bell " />Manage Driver</Link>
                  </li>

                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-product-hunt " />Booking <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">

                  <li>
                    <a href="progress.html"><i className="fa fa-circle-o " />Booking list</a>
                  </li>
                

                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-product-hunt " />Product Cetagory <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="panel-tabs.html"><i className="fa fa-toggle-on" />Add Cetarogy</a>
                  </li>
                  <li>
                    <a href="notification.html"><i className="fa fa-bell " />Add Subcetagory</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><i className="fa fa-yelp " />Shopping order<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Shopping order list</a>
                  </li>
                </ul>
              </li>


              <li>
                <a href="#"><i className="fa fa-yelp " /> Add Sellor<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />manage Sellor</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><i className="fa fa-yelp " />Report<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Customer Details</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Sales report</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />stock report</a>
                  </li>
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />Transaction report</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><i className="fa fa-yelp " /> Delivery <span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />manage Delivery</a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#"><i className="fa fa-yelp " /> Payment<span className="fa arrow" /></a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="invoice.html"><i className="fa fa-coffee" />payment History</a>
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
