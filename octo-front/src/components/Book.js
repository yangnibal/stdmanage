import React from 'react'
import { Link } from 'react-router-dom'
 
const Book = (thumbnail, authors, title, addBook) => {
    return(
        <Link to="/" className="book-container" onClick={addBook}>
            <img src={thumbnail} alt="not found"/>
            <h3>{title}</h3>
            <b>{authors} 지음</b>
        </Link>
    )
}

export default Book