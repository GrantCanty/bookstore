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
                <Card text='Available Books' link='get/available' route='available' />
                <Card text='By Author or Book Name' link='get/search' />
                <Card text='Most Recently Published' link='get/recent' route='search/recent' />
            </div>
        </div>
    )
}

export default Get;