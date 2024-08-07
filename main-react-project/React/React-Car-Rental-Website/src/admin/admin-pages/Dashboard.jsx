import React from 'react'
import { AdminSidebar } from '../admin-components/AdminSidebar'


export const Dashboard = () => {
  return (

    <div>
      <div id="wrapper">

        {/* /. NAV TOP  */}
       <AdminSidebar/>
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
            <div className="row" style={{ paddingBottom: 100 }}>
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

    </div>
  )
}
