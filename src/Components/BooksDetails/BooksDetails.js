import React from 'react';

const BooksDetails = ({book, handleEditProduct, handleDeleteProduct}) => {
    const {title, author, description} = book;
    const id = book._id;
    return (
        <>
            <tr style={{ fontWeight: '400', }}>
                <td>{title}</td>
                <td>{author}</td>
                <td>{description}</td>
                <td><button onClick={() => handleEditProduct(id)} className="btn btn-primary">Edit</button></td>
                <td><button onClick={() => handleDeleteProduct(id)} className="btn btn-danger">Delete</button></td>
            </tr>
        </>
    );
};

export default BooksDetails;