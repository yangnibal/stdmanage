import React from 'react'
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom'
import '../scss/books.scss'

@observer
class ManageBooks extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem("token")
    }
    render(){
        return(
            <div className="books-container">
                <div className="sticky-container">
                    <div className="book">
                        <Link to="/books/add" className="book-sticky">문제집 추가하기</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ManageBooks