import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import '../scss/books.scss'

@observer
class AddBookDetail extends React.Component{
    @observable file = []
    @observable name = ""
    @action handleFileChange = (e) => {
        const { name } = e.target
        this[name] = e.target.files[0]
    }
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value 
    }
    @action get = (name) => {
        const token = localStorage.getItem("token")
        axios.post("http://localhost:8000/books/getprobs/", ({
            name: name
        }), {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.name = localStorage.getItem("title")
    }
    render(){
        return(
            <div className="add-detail-container">
                <input className="name" name="name" value={this.name} onChange={this.handleChange} placeholder="책 이름을 입력해주세요..."/>
                <label className="file-label" htmlFor="file">파일 업로드</label>
                <input className="file" id="file" type="file" onChange={this.handleFileChange} name="file"/>
                
            </div>
        )
    }
}

export default AddBookDetail