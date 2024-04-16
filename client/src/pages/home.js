import { useState, useEffect } from 'react'
import { json, useLocation } from 'react-router-dom'
import Book from '../assets/book'
import '../styles/home.css'
//import '../styles/content.css'

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
            {data.map((e) => {
                return <Book key={e.id} title={e.title} author={e.authorName} available={e.inventoryCount} />
            })}
        </div>
    )
}

export default Home;