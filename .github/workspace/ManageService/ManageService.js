import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ManageService.css'
import { Modal, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';

export default function ManageService() {
  const [services, setServices] = useState([]);
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  // Close modal of delete
  const handleClose = () => {
    setShow(false);
  };

  // Show modal of delete
  const handleShow = (serviceId) => {
    setShow(true);
    setDeleteId(serviceId);
  };

  // Get all service from backend
  const fetchData = async () => {
    await fetch('http://localhost:5000/services/read')
      .then(res => res.json())
      .then(json => setServices(json))
      .catch(err => console.log(err))
  };

  // Delete one service from database by using service ID
  const deleteService = async () => {
    setShow(false);
      await fetch(`http://localhost:5000/services/delete/${deleteId}`, {
        method: 'DELETE',
      })
        .then(() => {
          fetchData();
          toast.success('Successful deleted')
        })
        .catch(err => console.log(err))
    }

  // Start fetching data
  useEffect(() => {
    let isFetched = true;
    if( isFetched ) fetchData();
    return () => {
      isFetched = false;
    }
  }, [])


  return (
    <>
      <div className='manageService-component' >
        <div className='container-fluid' >
          <div className='container' >
            <div className='table' >
              <div className='row' >
                <div className='col-10' >
                  <div className='table-heading-left' ><h1>Service List</h1></div>
                </div>
                <div className='col-2' >
                  <img className='table-heading-right' src='assets/images/gif-1.gif' alt='' />
                </div>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} >
                      <td>{service.id}</td>
                      <td>{service.name}</td>
                      <td>$ {service.price}</td>
                      <td><Link className='update-button' to={`/updateService?${service.id}`} >UPDATE</Link> </td>
                      <td>
                        <Button className='delete-button' onClick={() => handleShow(service.id)}>
                          DELETE
                        </Button>

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Notification</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>Are you sure?</Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant='danger' id='delete-button' onClick={() => deleteService()}>
                              DELETE
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Add Button */}
              <div className='add-button' >
                <Link className='add-button-Link' to='/addService' >ADD</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


