import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import axios from 'axios'
import '../scss/Login.scss'

@observer
class Login extends React.Component{
    @observable username = ""
    @observable password = ""
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action handleLogin = (username, password) => {
        axios.post("http://localhost:8000/users/login/", ({
            username: username,
            password: password
        }))
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data['token'])
            this.props.history.push("/")
        })
        .catch(err => {
            console.log(err)
        })
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
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.handleLogout()
    }
    render(){
        return(
            <div className="login-container">
                <div className="input-wrapper">
                    <input name="username" value={this.username} onChange={this.handleChange} className="input" placeholder="이름"/>
                </div>
                <div className="input-wrapper">
                    <input name="password" value={this.password} onChange={this.handleChange} className="input" placeholder="비밀번호"/>
                </div>
                <button className="login-btn" onClick={() => this.handleLogin(this.username, this.password)}>로그인</button>
            </div>
        )
    }
}

export default Login