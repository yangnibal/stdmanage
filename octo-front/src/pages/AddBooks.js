import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class AddBooks extends React.Component{
    @observable keyword = ""
    @action handleChange = (e) => {
        const { name, value } = e.target
        this[name] = value
    }
    @action searchBook = () => {

    }
    render(){
        return(
            <div>
                <div>
                    <input value={this.keyword} onChange={this.handleChange} name="keyword" placeholder="찾으시는 책 이름을 입력해 주세요..."/>
                </div>
            </div>
        )
    }
}

export default AddBooks