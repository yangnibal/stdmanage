import React from 'react'
import { Link } from 'react-router-dom'

const Student = (name) => {
    return(
        <div className="student">
            <Link to="/" className="student-sticky">
                {name}
            </Link>
        </div>
    )
}

export default Student