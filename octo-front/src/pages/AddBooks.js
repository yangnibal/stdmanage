import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'

@observer
class AddBooks extends React.Component{
    @observable keyword = ""
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
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    render(){
        return(
            <div>
                <div>
                    <input value={this.keyword} onChange={this.handleChange} name="keyword" placeholder="찾으시는 책 이름을 입력해 주세요..."/>
                </div>
                <div></div>
            </div>
        )
    }
}

export default AddBooks