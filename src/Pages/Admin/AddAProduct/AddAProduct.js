import React from 'react';
import "./AddAProduc.css"
import { useForm } from 'react-hook-form';
import axios from 'axios';


const AddAProduct = () => {

    const { register, handleSubmit, reset
    } = useForm();
    // const onSubmit = data => {
    //     console.log(data);
    //     axios.post('https://shielded-tundra-20828.herokuapp.com/seeds', data)
    //         .then(res => {
    //             console.log(res);
    //         })
    // }

    const onSubmit = (data) => {
        fetch("http://localhost:5000/seeds", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        console.log(data);
    };


    return (
        <div>
            <div>
                <h2>Add Products</h2>
                <div className="add-services">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <textarea {...register("description")} placeholder="Description" />
                        < input type="number" {...register("price")} placeholder="Price" />
                        < input {...register("img")} placeholder="img" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;