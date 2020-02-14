import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class AddStudents extends React.Component{
    @observable student = ""
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    render(){
        return(
            <div className="addstudent-container">
                <div className="input-container">
                    <input name="student" value={this.student} onChange={this.handleChange} placeholder="추가할 학생 이름을 입력해주세요..."/>
                </div>    
            </div>
        )
    }
}

export default AddStudents