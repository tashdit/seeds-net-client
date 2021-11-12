import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';

const ManageAllOrders = () => {

    const [orders, setOrders] = useState([]);
    const { register, handleSubmit } = useForm();

    const [status, setStatus] = useState("");
    const [orderId, setOrderId] = useState("");

    console.log(status);
    useEffect(() => {
        fetch(`https://shielded-tundra-20828.herokuapp.com/allOrders`)
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    // const status = "apporved";
    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    const onSubmit = (data) => {
        console.log(data, orderId);
        // fetch(`http://localhost:5000/statusUpdate/${orderId}`, {
        //     method: "PUT",
        //     headers: { "content-type": "application/json" },
        //     body: JSON.stringify(data),
        // })
        //     .then((res) => res.json())
        //     .then((result) => console.log(result));
    };
    return (
        <div className="container">
            <h1>All orders</h1>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Service Title</th>
                        <th>Event description</th>
                        <th>Image Link</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {orders?.map((pd, index) => (
                    <tbody>
                        <tr>
                            <td>{index}</td>
                            <td>{pd.name}</td>
                            <td>{pd.description}</td>
                            <td>{pd.image}</td>
                            <td>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <select
                                        onClick={() => handleOrderId(pd?._id)}
                                        {...register("status")}
                                    >
                                        <option value={pd?.status}>{pd?.status}</option>
                                        <option value="approve">approve</option>
                                        <option value="done">Done</option>
                                    </select>
                                    <input type="submit" />
                                </form>
                            </td>
                            <button className="btn bg-danger p-2">Delete</button>
                            <button className="btn bg-success p-2">Update</button>
                        </tr>
                    </tbody>
                ))}
            </Table>
        </div>
    );
};

export default ManageAllOrders;