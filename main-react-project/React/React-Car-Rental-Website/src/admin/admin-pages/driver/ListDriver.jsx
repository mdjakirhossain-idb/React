import { AdminSidebar } from '../../admin-components/AdminSidebar'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
export const ListDriver = () => {
  const [items, setItems] = useState([]);

  const itemDelete = (id) => {
    axios.post("http://localhost/main-react-project/React/api-php/product/deleteItem.php?id=" + id)
      .then((res) => (console.log(res)))

    axios.get("http://localhost/main-react-project/React/api-php/product/getItems.php")
      .then((res) => setItems(res.data))
  }

  useEffect(() => {
    axios.get("http://localhost/main-react-project/React/api-php/product/getItems.php")
      .then((res) => setItems(res.data))
  }, [])
  return (
    <div>
      <div id="wrapper">
        <AdminSidebar />
        <div id="page-wrapper">
          <div id="page-inner">
            <div className="row">
              <div className="col-md-12">
                <h1 className="page-head-line">DASHBOARD</h1>
                <NavLink to={`/add-driver`}>
                    <button className="btn btn-info btn-lg">Add driver</button>
                </NavLink>
                {/* <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1> */}
              </div>
            </div>
            {/* /. ROW  */}

            <div className="row" style={{ paddingBottom: 100 }}>
              <div className="col-md-12">

                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Details</th>
                      <th scope="col">Photo</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((data, i) => {
                      return (

                        <tr key={i}>
                          <th scope="row">{++i}</th>
                          <td>{data.name}</td>
                          <td>{data.details}</td>
                          <td>
                            <img className='w-50' src={`http://localhost/main-react-project/React/api-php/product/images/${data.photo}`} />
                          </td>
                          <td>
                            <NavLink to={`/itemedit/${data.id}`}>
                              <button className='btn btn-info mb-2 mt-2'>Update</button>
                            </NavLink>
                            <button className='btn btn-danger' onClick={() => { itemDelete(data.id) }}>Delete</button>
                          </td>
                        </tr>

                      )
                    })}
                  </tbody>
                </table>

              </div>

            </div>
            {/*/.ROW*/}
          </div>
          {/* /. PAGE INNER  */}
        </div>
        {/* /. PAGE WRAPPER  */}
      </div>
    </div>
  )
}
