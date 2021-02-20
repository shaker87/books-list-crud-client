import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const EditBook = () => {
    const history = useHistory()
    const [data] = useContext(UserContext)
    const {title, author, description} = data;
    const id = data._id;
    console.log(data)
    const { register, handleSubmit, errors } = useForm();

    const [updateBook, setUpdateBook] = useState({});

    const handleBlur = event => {
        const bookInfo = { ...updateBook }
        bookInfo[event.target.name] = event.target.value;
        setUpdateBook(bookInfo);
        // console.log(productInfo)
    }

    const handleUpdateProduct = () => {
        console.log("update", id)
        fetch(`https://sheltered-retreat-30789.herokuapp.com/update/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(updateBook)
        })
            .then(data => {
                if (data) {
                    history.push(`/`);
                    alert("Update Successfully")
                }
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h6>Book ID: {id}</h6>
                    <form onSubmit={handleSubmit(handleUpdateProduct)}>
                        <input onBlur={handleBlur} defaultValue={title} name="title" ref={register({ required: true })} className="form-control" placeholder="Enter book name" />
                        {errors.name && <span>This field is required</span>}
                        <br />
                        <input onBlur={handleBlur} defaultValue={author} name="author" ref={register({ required: true })} className="form-control" placeholder="Enter author name" />
                        {errors.author && <span>This field is required</span>}
                        <br />
                        <input onBlur={handleBlur} defaultValue={description} name="description" ref={register({ required: true })} className="form-control"  placeholder="Enter description" />
                        {errors.description && <span>This field is required</span>}
                        <br />

                        <input type="submit" />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default EditBook;