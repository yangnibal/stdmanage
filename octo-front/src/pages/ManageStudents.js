import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Student from '../components/Student'
import '../scss/students.scss'

@observer
class ManageStudents extends React.Component{
    @observable students = []
    @observable isAddOn = false
    @observable stdname = ""
    @action getStudents = () => {
        axios.get("http://localhost:8000/students/")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    @action change = () => {
        this.isAddOn = !this.isAddOn
    }
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    componentDidMount(){
        const token = localStorage.getItem("token")
        if(token!==null){
            this.getStudents()
        } else {
            this.props.history.push("/login")
        }
    }
    render(){
        const studentlist = this.students.map(student => (
            <Student
                key={student.name}
                name={student.name}
            />    
        ))
        return(
            <div className="students-container">
                <div className="sticky-container">
                    {this.isAddOn===false ? null : 
                    <div className="student">
                        <div className="student-sticky">
                            <input className="input-name" name="stdname" value={this.stdname} onChange={this.handleChange} placeholder="학생 이름"/>
                        </div>
                    </div>
                    }
                    <div className="student">
                        <div onClick={this.change} className="student-sticky">학생 추가하기</div>
                    </div>
                    {studentlist.reverse()}
                </div>
            </div>
        )
    }
}

export default ManageStudents