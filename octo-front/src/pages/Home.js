import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { Link } from 'react-router-dom'
import '../scss/Home.scss'

@observer
class Home extends React.Component{
    @observable student = ""
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    render(){
        return(
            <div className="home-container">
                
                    <Link className="link" to="/students/manage">학생 관리하기</Link>
                
                    <Link className="link" to="/books/manage">문제집 관리하기</Link>
                
            </div>
        )
    }
}

export default Home