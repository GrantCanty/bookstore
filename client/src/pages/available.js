import { useState, useEffect } from 'react'
import { json } from 'react-router-dom'
import Book from '../assets/book'

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
                return <Book title={e.title} author={e.authorName} available={e.inventoryCount} />
            })}
        </div>
    )
}

export default Available;