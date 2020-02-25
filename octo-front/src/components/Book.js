import React from 'react'
import { Link } from 'react-router-dom'
 
const Book = ({thumbnail, authors, title, link, saveClick}) => {
    return(
        <Link to={`/books/add/${link}`} className="book-container" onClick={saveClick}>
            <img className="image" src={thumbnail} alt="not found"/>
            <h4 className="title">{title}</h4>
            <p className="authors">{authors[0]} 지음</p>
        </Link>
    )
}

export default Book