import React from 'react'

const Header = () => {
  return (
    <>
   
    <div>
       
      <div>
    <div id="wrapper">
    <nav className="navbar navbar-default navbar-cls-top " role="navigation" style={{marginBottom: 0}}>
     
      <div className="header-right">
        <a href="message-task.html" className="btn btn-info" title="New Message"><b>30 </b><i className="fa fa-envelope-o fa-2x" /></a>
        <a href="message-task.html" className="btn btn-primary" title="New Task"><b>40 </b><i className="fa fa-bars fa-2x" /></a>
        <a href="login.html" className="btn btn-danger" title="Logout"><i className="fa fa-exclamation-circle fa-2x" /></a>
      </div>
    </nav>
    {/* /. NAV TOP  */}
    <nav className="navbar-default navbar-side" role="navigation">
      <div className="sidebar-collapse">
        <ul className="nav" id="main-menu">
        
          
          <li>
            <a href="#"><i className="fa fa-product-hunt " />Product <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              <li>
                <a href="panel-tabs.html"><i className="fa fa-toggle-on" />Add Product</a>
              </li>
              <li>
                <a href="notification.html"><i className="fa fa-bell " />Manage product</a>
              </li>
              
            </ul>
          </li>


          <li>
            <a href="#"><i className="fa fa-product-hunt " />Card <span className="fa arrow" /></a>
            <ul className="nav nav-second-level">
              
              <li>
                <a href="progress.html"><i className="fa fa-circle-o " />Add to card</a>
              </li>
              <li>
                <a href="buttons.html"><i className="fa fa-code " />manage card</a>
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
    {/* /. NAV SIDE  */}
    <div id="page-wrapper">
      <div id="page-inner">
        <div className="row">
          <div className="col-md-12">
            <h1 className="page-head-line">DASHBOARD</h1>
            {/* <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1> */}
          </div>
        </div>
        {/* /. ROW  */}
        <div className="row">
          <div className="col-md-4">
            <div className="main-box mb-red">
              <a href="#">
                <i className="fa fa-bolt fa-5x" />
                <h5>Total Order</h5>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-dull">
              <a href="#">
                <i className="fa fa-plug fa-5x" />
                <h5>Total Customer</h5>
              </a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="main-box mb-pink">
              <a href="#">
                <i className="fa fa-dollar fa-5x" />
                <h5>Total Sales</h5>
              </a>
            </div>
          </div>
        </div>
        {/* /. ROW  */}
       
        {/* /. ROW  */}
        <div className="row">
          
          <div className="col-md-12">
            <div className="panel panel-info">
              <div className="panel-heading">
                <i className="fa fa-bell fa-fw" />Notifications Panel
              </div>
              <div className="panel-body">
                <div className="list-group">
                  <a href="#" className="list-group-item">
                    <i className="fa fa-twitter fa-fw" />3 New Followers
                    <span className="pull-right text-muted small"><em>12 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-envelope fa-fw" />Message Sent
                    <span className="pull-right text-muted small"><em>27 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-tasks fa-fw" />New Task
                    <span className="pull-right text-muted small"><em>43 minutes ago</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-upload fa-fw" />Server Rebooted
                    <span className="pull-right text-muted small"><em>11:32 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-bolt fa-fw" />Server Crashed!
                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-warning fa-fw" />Server Not Responding
                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-bolt fa-fw" />Server Crashed!
                    <span className="pull-right text-muted small"><em>11:13 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-warning fa-fw" />Server Not Responding
                    <span className="pull-right text-muted small"><em>10:57 AM</em>
                    </span>
                  </a>
                  <a href="#" className="list-group-item">
                    <i className="fa fa-shopping-cart fa-fw" />New Order Placed
                    <span className="pull-right text-muted small"><em>9:49 AM</em>
                    </span>
                  </a>
                </div>
                {/* /.list-group */}
                <a href="#" className="btn btn-info btn-block">View All Alerts</a>
              </div>
            </div>
          </div>
        </div>
        {/*/.Row*/}
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="table-responsive">
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>User No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td><span className="label label-danger">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>Larry</td>
                    <td><span className="label label-danger">the Bird</span> </td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td><span className="label label-success">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>Larry</td>
                    <td><span className="label label-primary">the Bird</span></td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td><span className="label label-warning">Jacob</span></td>
                    <td><span className="label label-success">Thornton</span></td>
                    <td>@fat</td>
                    <td><span className="label label-danger">100090</span></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>Larry</td>
                    <td><span className="label label-primary">the Bird</span></td>
                    <td>@twitter</td>
                    <td>100090</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td><span className="label label-warning">Jacob</span></td>
                    <td><span className="label label-success">Thornton</span></td>
                    <td>@fat</td>
                    <td><span className="label label-danger">100090</span></td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td><span className="label label-success">Mark</span></td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td><span className="label label-info">100090</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
        {/*/.Row*/}
        <hr />
        <div className="row" style={{paddingBottom: 100}}>
          <div className="col-md-12">
            <div id="comments-sec">
              <h4><strong>Compose Support </strong></h4>
              <hr />
              <div className="form-group  ">
                <label>Please Write a Subject Line</label>
                <input type="text" className="form-control" required="required" placeholder="Enter Subject Of Ticket" />
              </div>
              <div className="form-group ">
                <label>Please Enter Issue</label>
                <textarea className="form-control" rows={8} defaultValue={""} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-success">Compose &amp; Send </button>
              </div>
            </div>
          </div>
          
        </div>
        {/*/.ROW*/}
      </div>
      {/* /. PAGE INNER  */}
    </div>
    {/* /. PAGE WRAPPER  */}
  </div>
  {/* /. WRAPPER  */}
  <div id="footer-sec">
    © 2024 YourCompany | Design By : <a href="#" target="_blank">Md Jakir Hossain</a>
  </div>
</div>


    </div></>
  )
}

export default Header