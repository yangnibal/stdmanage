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
    @action getStudents = () => {
        axios.get("http://localhost:8000/students/")
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }
    componentDidMount(){
        this.getStudents()
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
                    <div className="student">
                        <Link to="/students/add" className="student-sticky">학생 추가하기</Link>
                    </div>
                    {studentlist.reverse()}
                </div>
            </div>
        )
    }
}

export default ManageStudents