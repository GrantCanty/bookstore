import { useState, useEffect } from 'react'
import { json, useLocation } from 'react-router-dom'
import TableItem from '../assets/tableItem'
import '../styles/home.css'

const Home = () => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState("")

    

    useEffect(() => {
        fetch(`http://localhost:8080/api/content/available`)   
        .then(data => data.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    },[])

    //console.log(data)
    
    
    return(
        <div className='content'>
            <div className='search-area'>
                <input type='text' name='search' placeholder="Search by Author or Book Name" value={searchData} onChange={ (e) => setSearchData(e.target.value) }/>
                <button>New</button>
            </div>
            <div className='content-table'>
                <div className='table-item' id='header'>
                    <span className='item-info'>Title</span>
                    <span className='item-info'>Author Name</span>
                    <span className='item-info'>Available Copies</span>
                    <span className='item-info'>Edit</span>
                </div>
                {data.map((e) => {
                return <TableItem key={e.id} idName={'content'} title={e.title} author={e.authorName} available={e.inventoryCount} />
            })}
            </div>
        </div>
    )
}

export default Home;