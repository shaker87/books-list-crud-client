import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import BooksDetails from '../BooksDetails/BooksDetails';

const Home = () => {
    const [data, setData] = useContext(UserContext)
    const history = useHistory()
    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('https://sheltered-retreat-30789.herokuapp.com/books')
            .then(response => response.json())
            .then(data => setBooks(data))
    }, [books])

    const handleEditProduct = (id) => {
        fetch(`https://sheltered-retreat-30789.herokuapp.com/book/${id}`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(result => {
                setData(result);

            })
        if (data) {
            history.push('/edit-book')
        }
    }

    const handleDeleteProduct = (id, e) => {
        console.log('delete product', id)
        fetch(`https://sheltered-retreat-30789.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(result => {
                if (result) {
                   console.log(result)
                }
            })
    }


    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <table style={{ width: '100%', background: '#f1f6ff', textAlign: 'center' }} >
                        <thead>
                            <tr>
                                <th style={{ width: '25%' }}>Name</th>
                                <th style={{ width: '25%' }}>Author</th>
                                <th style={{ width: '20%' }}>Description</th>
                                <th style={{ width: '15%' }}>Edit</th>
                                <th style={{ width: '15%' }}>Delete</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                books.map(book => <BooksDetails key={book._id} book={book} handleDeleteProduct={handleDeleteProduct} handleEditProduct={handleEditProduct}></BooksDetails>)
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Home;
