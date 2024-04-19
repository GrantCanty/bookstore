import { useEffect, useState } from 'react';
import '../styles/book.css'
import { content } from '../types/types';

const RecentItem = (props) => {
    const [tmpData, setTmpData] = useState(content)
    const [isTmpDataValid, setIsTmpDataValid] = useState(false)

    useEffect(() => {
        let tmp = {id: props.id, title: props.title, authorName: props.author, inventoryCount: props.available, publishDate: props.pub, lastEditDate: props.edit}
        setTmpData(tmp)
    },[])

    useEffect(() => {
        if (tmpData.id !== null && tmpData.title !== "" && tmpData.authorName !== "" && tmpData.inventoryCount !== "" && tmpData.publishDate !== "" && tmpData.lastEditDate !== "") {
            setIsTmpDataValid(true)
        } else {
            if (isTmpDataValid) {
                setIsTmpDataValid(false)
            } 
        }
    },[tmpData])

    const onInputUpdate = (e) => {
        setTmpData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    return(
        <div className='table-item readonly' id={props.idName}>
            <input type='text' name='title' className='item-info' value={tmpData.title} readOnly={true} onChange={ onInputUpdate } />
            <input type='text' name='authorName' className='item-info' value={tmpData.authorName} readOnly={true} onChange={ onInputUpdate } />
            <input type='number' name='inventoryCount' className='item-info' value={tmpData.inventoryCount} readOnly={true} onChange={ onInputUpdate } />
            <input type='date' name='lastEditDate' className='item-info' value={tmpData.lastEditDate} readOnly={true} onChange={ onInputUpdate } />
        </div>
    )

}

export default RecentItem;