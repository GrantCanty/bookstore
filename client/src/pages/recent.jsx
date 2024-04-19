import { useState, useEffect } from 'react'
import TableItem from '../assets/tableItem'
import '../styles/home.css'
import useModal from '../hooks/useModal'
import Modal from '../assets/modal'

const Recent = () => {
    const [data, setData] = useState([])
    const [searchData, setSearchData] = useState('')
    const [isModalActive, toggleIsModalActive] = useModal()

    useEffect(() => {
        fetch('http://localhost:8080/api/content/search/recent')   
        .then(data => data.json())
        .then(json => setData(json))
        .catch(error => console.error(error))
    },[])

    console.log(data)
    
    return(
        <div className='content'>
            <div className='search-area'>
                <input type='text' name='search' placeholder="Search by Author or Book Name" value={searchData} onChange={ (e) => setSearchData(e.target.value) }/>
            </div>
            <div className='content-table'>
                <div className='table-item' id='header'>
                    <span className='item-info'>Title</span>
                    <span className='item-info'>Author Name</span>
                    <span className='item-info'>Available Copies</span>
                    <span className='item-info'>Edit</span>
                </div>
                
                {data.length === 0 ?  <h3>No Results</h3> :
                data.map((e) => {
                return <TableItem key={e.id} idName={'content'} id={e.id} title={e.title} author={e.authorName} available={e.inventoryCount} pub={e.publishDate} edit={e.lastEditDate} />
            })}
            </div>
        </div>
    )
}

export default Recent;