import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'

const Available = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/content/available')
            .then(data => data.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    },[])

    console.log(data)
    
    return(
        <div className='content'>
            {data.map((e) => {
                return <div>{e.title}</div>
            })}
        </div>
    )
}

export default Available;