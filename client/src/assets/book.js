import { useState } from 'react';
import '../styles/book.css'
import Button from './button';
import axios from 'axios';

const Book = (props) => {
    const [isEdit, setIsEdit] = useState(false)

    function changeState() {
        setIsEdit((prev) => 
            !prev
        )
    }

    function onSaveClick() {
        changeState()
        axios.post("fill this out later")
    }

    
    return (
        <div className="book">
            <div className='book-content'>{
                isEdit ?
                    <>
                        <label>
                            Title
                            <input type='text' value={props.title} />
                        </label>
                        <label>
                            Author
                            <input type='text' value={props.author} />
                        </label>
                        <label>
                            Available
                            <input type='number' value={props.available} />
                        </label>
                        
                    </> 
                    :
                    <>
                        <h1>Title: {props.title}</h1>
                        
                        {props.published !== null ? null : <h4>props.published</h4>}
                        <h4>Author: {props.author}</h4>
                        <h4>Available copies: {props.available}</h4>
                    </>
                }</div>
            <div className='button-content'>{
                isEdit ? 
                    <>
                        <Button click={changeState} text='Cancel' />
                        <Button click={onSaveClick} text='Save' />
                    </> :
                    <Button click={changeState} text='Edit' />
            }</div>
        </div>
    )
}

export default Book;