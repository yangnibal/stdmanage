import React from 'react'
import { observer } from 'mobx-react'

@observer
class ManageBooks extends React.Component{
    componentDidMount(){
        const token = localStorage.getItem("token")
    }
    render(){
        return(
            <div className="books-container">
                
            </div>
        )
    }
}

export default ManageBooks