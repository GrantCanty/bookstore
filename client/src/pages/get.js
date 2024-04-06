import '../styles/content.css'
import { useState, useEffect } from 'react'
import Card from '../assets/card.js'

const Get = () => {
    
    /*const [data, setData] = useState()

    useEffect(() => {
        fetch("http://localhost:8080/api/content/available")
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error))
    },[])

    console.log(data)*/
    
    return (
        <div className="content">
            <div className='card-grid'>
                <Card text='test1' link='/get/available' />
                <Card text='test2' />
                <Card text='test3' />
            </div>
        </div>
    )
}

export default Get;