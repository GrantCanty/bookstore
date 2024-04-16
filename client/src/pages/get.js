import '../styles/content.css'
import { useState, useEffect } from 'react'
import TableItem from '../assets/tableItem.jsx'

const Get = () => {
    
    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8080/api/content/available`)   
        .then(data => data.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    },[])

    console.log(data)
    
    return(
        <div className='content'>
            <div className='content-table'>
                <div className='table-item' id='header'>
                    <span className='item-info'>Title</span>
                    <span className='item-info'>Author Name</span>
                    <span className='item-info'>Available Copies</span>
                    <span className='item-info'>Edit</span>
                </div>
                {data.map((e) => {
                return <TableItem key={e.id} title={e.title} author={e.authorName} available={e.inventoryCount} />
            })}
            </div>
        </div>
    )

}

export default Get;