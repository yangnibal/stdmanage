import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import '../scss/students.scss'

@observer
class AddStudents extends React.Component{
    @observable student = ""
    @observable books = []
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action getBooks = () => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:8000/books/", {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            console.log(res)
            this.books = res.data
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        const token = localStorage.getItem("token")
        if(token!==null){
            this.getBooks()
        } else {
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div className="addstudent-container">
                <div className="input-container">
                    <input className="input" name="student" value={this.student} onChange={this.handleChange} placeholder="추가할 학생 이름을 입력해주세요..."/>
                </div>   
            </div>
        )
    }
}

export default AddStudents