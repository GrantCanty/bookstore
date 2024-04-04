import '../styles/get.css'
import { useState, useEffect } from 'react'

const Get = () => {
    
    const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/api/content/available")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    },[])

    console.log(data)
    
    return (
        <div className="get">
            <h1>GET </h1>
        </div>
    )
}

export default Get;