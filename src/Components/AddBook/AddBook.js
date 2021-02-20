import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const AddBook = () => {
    const history = useHistory()
    const { register, handleSubmit, errors } = useForm();
    const [addData, setAddData] = useState({ title: "", author: "", description: "" });
    const handleBlur = event => {
        const newData = { ...addData };
        newData[event.target.name] = event.target.value;
        setAddData(newData)
    }



    const onSubmit = (addData, e) => {
        e.preventDefault();
        e.target.reset();

        fetch(`https://sheltered-retreat-30789.herokuapp.com/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addData)
        })
            .then(response => response.json())
            .then(result => {
                if (result) {
                    alert('Success');
                    history.push('/')
                }
            })
            
    };
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input onBlur={handleBlur} name="title" ref={register({ required: true })} className="form-control" placeholder="Enter book name" />
                        {errors.name && <span>This field is required</span>}
                        <br />
                        <input onBlur={handleBlur} name="author" ref={register({ required: true })} className="form-control" placeholder="Enter author name" />
                        {errors.author && <span>This field is required</span>}
                        <br />
                        <input onBlur={handleBlur} name="description" ref={register({ required: true })} className="form-control"  placeholder="Enter description" />
                        {errors.description && <span>This field is required</span>}
                        <br />

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default AddBook;