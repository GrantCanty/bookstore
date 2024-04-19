import { useState, useEffect } from 'react'
import RecentItem from '../assets/recentItem'
import '../styles/home.css'
import useModal from '../hooks/useModal'
import Modal from '../assets/modal'
import SearchDate from '../assets/searchDate'

const Recent = () => {
    const [data, setData] = useState([])
    const [isModalActive, toggleIsModalActive] = useModal()

    useEffect(() => {
        fetch('http://localhost:8080/api/content/search/recent')   
        .then(data => data.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    },[])

    function fetchData(data) {
        fetch('http://localhost:8080/api/content/search', {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(data)
        })   
        .then(data => data.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    }

    let inner = <SearchDate fetchData={fetchData} close={ toggleIsModalActive } />
    
    return(
        <div className='content'>
            <div className='search-area'>
                {<input style={{border: "2px solid transparent", outline: 'none', cursor: 'default'}} type='text' readOnly={true} />}
                <button className='search' onClick={toggleIsModalActive} >Search</button>
            </div>
            <div className='content-table'>
                <div className='table-item' id='header'>
                    <span className='item-info'>Title</span>
                    <span className='item-info'>Author Name</span>
                    <span className='item-info'>Available Copies</span>
                    <span className='item-info'>Publish Date</span>
                    <span className='item-info'>Last Edit Date</span>
                </div>
                
                {data.length === 0 ?  <h3>No Results</h3> :
                data.map((e) => {
                return <RecentItem key={e.id} idName={'content'} title={e.title} author={e.authorName} available={e.inventoryCount} pub={e.publishDate} edit={e.lastEditDate} />
            })}
            </div>
            <Modal close={toggleIsModalActive} isActive={isModalActive} inner={inner} />
        </div>
    )
}

export default Recent;