import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../scss/Home.scss'

@observer
class Home extends React.Component{
    @observable student = ""
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action handleLogout = () => {
        const token = localStorage.getItem("token")
        axios.get("http://localhost:8000/users/logout/", {
            headers: {
                Authorization: "Token " + token
            }
        })
        .then(res => {
            console.log(res)
            localStorage.clear()
            this.props.history.push("/login")
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        const token = localStorage.getItem("token")
        if(token===null){
            this.props.history.push("/login")
        }
    }
    render(){
        return(
            <div className="home-container">
                <div className="home-header">
                    <i onClick={() => this.handleLogout()} className="fas fa-sign-out-alt icon"></i>
                </div>
                <div className="link-wrapper">
                    <Link className="link" to="/students/manage">학생관리</Link>    
                    <Link className="link" to="/books/manage">문제집관리</Link>
                </div>
            </div>
        )
    }
}

export default Home