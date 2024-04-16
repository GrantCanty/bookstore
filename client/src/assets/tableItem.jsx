import { useState } from 'react';
import '../styles/book.css'
import Button from './button';
import axios from 'axios';

const Tableitem = (props) => {
    const [isEdit, setIsEdit] = useState(false)

    function changeState() {
        setIsEdit((prev) => 
            !prev
        )
    }

    function onSaveClick() {
        changeState()
        //axios.post("fill this out later")
    }

    return(
        <div className={isEdit ? 'table-item read-and-edit ' : 'table-item readonly'} id={props.idName}>
            <input type='text' className='item-info' value={props.title} readOnly={!isEdit} />
            <input type='text' className='item-info' value={props.author} readOnly={!isEdit} />
            <input type='text' className='item-info' value={props.available} readOnly={!isEdit} />
            <div className='item-info'>{isEdit ? 
                <>
                    <Button click={changeState} text='Cancel' />
                    <Button click={onSaveClick} text='Save' />
                </>
                :
                <Button click={changeState} text='Edit' />
            }</div>
        </div>
    )

}

export default Tableitem;