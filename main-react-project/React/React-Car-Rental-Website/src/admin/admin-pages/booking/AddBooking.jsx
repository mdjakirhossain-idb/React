import { AdminSidebar } from '../../admin-components/AdminSidebar'
import React, {useState }from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';
export const AddDriver = () => {
    const [name, setName] = useState('')
    const [details, setDetails] = useState('')
    const [photo, setPhoto] = useState('')
    const navigate= useNavigate();    
    const save = () => {
        const formdata = new FormData()
        formdata.append('name', name)
        formdata.append('details', details)
        formdata.append('photo', photo)
        axios.post("http://localhost/main-react-project/React/api-php/product/additems.php", formdata, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
            .then((res) => {
                console.log(res.data)
                setName('')
                setPhoto('')
                setDetails('')
                setPhoto(null)
                navigate('/list-driver')
            })
        }
    return (
        <div>
            <div id="wrapper">
                <AdminSidebar />
                <div id="page-wrapper">
                    <div id="page-inner">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="page-head-line">DASHBOARD</h1>
                                <h2 className="mb-0">Add Item</h2>

                                <NavLink to={`/list-driver`}>
                                    <button className="btn btn-info btn-lg">Driver List</button>
                                </NavLink>
                                {/* <h1 className="page-subhead-line">This is dummy text , you can replace it with your original text. </h1> */}
                            </div>
                        </div>
                        {/* /. ROW  */}

                        <div className="row" style={{ paddingBottom: 100 }}>
                            <div className="col-md-12">
                                <form role="form">
                                    <div className="form-group">
                                        <label>Enter Name</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Text area</label>
                                        <textarea className="form-control"
                                         rows={3} 
                                         defaultValue={""}
                                         onChange={(e) => setDetails(e.target.value)}
                                         value={details} />
                                    </div>
                                    <div className='col-md-6'>
                                      <input className="form-control form-control-lg mt-4" id="formFileLg" type="file" onChange={(e) => setPhoto(e.target.files[0])} />
                                    </div>

                                    <div className="form-group">
                                        <button onClick={save} className="btn btn-primary mt-4 btn-lg">Submit</button>
                                    </div>
                                        {/* <button type="submit" className="btn btn-info">Send Message </button> */}
                                    </form>

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