import { useEffect, useState } from 'react';
import '../styles/book.css'
import Button from './button';
import axios from 'axios';
import { content } from '../types/types';

const Tableitem = (props) => {
    const [isEdit, setIsEdit] = useState(false)
    const [tmpData, setTmpData] = useState(content)

    useEffect(() => {
        let tmp = {id: props.id, title: props.title, authorName: props.author, inventoryCount: props.available, publishDate: props.pub, lastEditDate: props.edit}
        setTmpData(tmp)
    },[])

    const onInputUpdate = (e) => {
        setTmpData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    function toggleEdit() {
        setIsEdit((prev) => 
            !prev
        )
    }

    function onSaveClick() {
        toggleEdit()
        //axios.post("fill this out later")
    }

    function onCancelClick() {
        toggleEdit()
        let tmp = {id: props.id, title: props.title, authorName: props.author, inventoryCount: props.available, publishDate: props.pub, lastEditDate: props.edit}
        setTmpData(tmp)
    }

    return(
        <div className={isEdit ? 'table-item read-and-edit ' : 'table-item readonly'} id={props.idName}>
            <input type='text' name='title' className='item-info' value={tmpData.title} readOnly={!isEdit} onChange={ onInputUpdate } />
            <input type='text' name='authorName' className='item-info' value={tmpData.authorName} readOnly={!isEdit} onChange={ onInputUpdate } />
            <input type='number' name='inventoryCount' className='item-info' value={tmpData.inventoryCount} readOnly={!isEdit} onChange={ onInputUpdate } />
            <div className='item-info'>{isEdit ? 
                <>
                    <Button click={onCancelClick} text='Cancel' />
                    <Button click={onSaveClick} text='Save' />
                </>
                :
                <Button click={toggleEdit} text='Edit' />
            }</div>
        </div>
    )

}

export default Tableitem;