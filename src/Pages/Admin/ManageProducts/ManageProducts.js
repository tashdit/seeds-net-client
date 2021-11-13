import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';




const ManageProducts = () => {

    const [allProducts, setAllProducts] = useState([])
    const [control, setControl] = useState(false);


    //Get orders
    useEffect(() => {
        fetch('https://shielded-tundra-20828.herokuapp.com/seeds')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [control])



    //Delete Order
    const handleDelete = (id) => {
        console.log(id);
        fetch(`https://shielded-tundra-20828.herokuapp.com/deleteSeeds/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                    alert('are you sure ')
                }
            });

    }
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Price</th>
                    </tr>
                </thead>
                {allProducts?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td><img style={{
                                width: '70px',
                                height: '50px'
                            }}
                                src={pd.picture} alt="" />
                            </td>
                            <td>{pd.price}</td>
                            <td>

                            </td>
                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd?._id)}>Delete</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageProducts;