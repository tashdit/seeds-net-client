import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Table } from 'react-bootstrap';

const MyOrders = () => {
    const { user } = useAuth()
    const [myOrders, setMyOrdes] = useState([])
    const [control, setControl] = useState(false);


    //Get orders
    useEffect(() => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/myOrder/${user.email}`)
            .then((res) => res.json())
            .then((data) => setMyOrdes(data));
    }, [user?.email, control]);



    //Delete Order
    const handleDelete = (id) => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/delteOrder/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
            });
        console.log(id);
    }

    console.log(myOrders);
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
                {myOrders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td><img style={{
                                width: '70px',
                                height: '50px'
                            }}
                                src={pd.image} alt="" />
                            </td>
                            <td>{pd.price}</td>
                            <td>

                            </td>
                            <button className="btn bg-danger p-2" onClick={() => handleDelete(pd?._id)}>Delete</button>

                        </tr>
                    </tbody>
                ))}
            </Table>
        </div >
    );
};

export default MyOrders;