import { useEffect, useState } from 'react';
import '../styles/book.css'
import Button from './button';
import axios from 'axios';
import { content } from '../types/types';

const Tableitem = (props) => {
    const [isEdit, setIsEdit] = useState(false)
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

    useEffect(() => {
        if (isEdit) {
            setTmpData((prev) => { 
                return({
                    ...prev,
                    lastEditDate: new Date().toISOString("YYYY-MM-DD").split("T")[0]
                })
            })
        }
    },[isEdit])

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
        //console.log("posting: ", tmpData)
        axios.post("http://localhost:8080/api/content", tmpData)
        props.fetchData()
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
                    <Button disabled={false} click={onCancelClick} text='Cancel' />
                    <Button disabled={!isTmpDataValid} click={onSaveClick} text='Save' />
                </>
                :
                <Button disabled={false} click={toggleEdit} text='Edit' />
            }</div>
        </div>
    )

}

export default Tableitem;