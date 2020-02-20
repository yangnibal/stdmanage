import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import Book from '../components/Book'
import '../scss/books.scss'

@inject('store')
@observer
class AddBooks extends React.Component{
    @observable keyword = ""
    @observable books = []
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
        this.searchBook(value)
    }
    @action searchBook = (keyword) => {
        const _apiKey = '830abcdf4f4174ae428b50d1997d5167';
        axios.get(`https://dapi.kakao.com/v3/search/book?query=${keyword}`, {
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
                Authorization: `KakaoAK ${_apiKey}`
            }
        })
        .then(res => {
            console.log(res.data.documents)
            this.books = res.data['documents']
            console.log(this.books[0].title)
        })
        .catch(err => {
            console.log(err)
        })
    }
    @action addBook = () => {

    }
    render(){
        const booklist = this.books.map(book => (
            <Book
                authors={book.authors}
                thumbnail={book.thumbnail}
                title={book.title}
                key={book.isbn}
                addBook={() => this.addBook()}
            />
        ))
        return(
            <div className="addbooks-container">
                <div className="input-wrapper">
                    <input className="input" value={this.keyword} onChange={this.handleChange} name="keyword" placeholder="찾으시는 책 이름을 입력해 주세요..."/>
                </div>
                <div className="booklist-container">
                    {booklist}
                </div>
            </div>
        )
    }
}

export default AddBooks