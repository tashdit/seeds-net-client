import React from 'react';
import "./AddAProduc.css"
import { useForm } from 'react-hook-form';



const AddAProduct = () => {

    const { register, handleSubmit,
    } = useForm();


    const onSubmit = (data) => {
        fetch("https://shielded-tundra-20828.herokuapp.com/seeds", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })

    };


    return (
        <div>
            <div>
                <h2>Add Products</h2>
                <div className="add-services">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                        <textarea {...register("descrition")} placeholder="Description" />
                        < input type="number" {...register("price")} placeholder="Price" />
                        < input {...register("picture")} placeholder="img" />
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAProduct;