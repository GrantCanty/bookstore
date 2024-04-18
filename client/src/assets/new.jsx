import { useEffect, useState } from "react";
import axios from 'axios';
import { content } from "../types/types";

const New = (props) => {
    const [formData, setFormData] = useState(content)
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setFormData({
            ...formData,
            id: props.nextId +1
        })
    },[])

    useEffect(() => {
        if (formData.id !== null && formData.title !== "" && formData.authorName !== "" && formData.inventoryCount !== "" && formData.publishDate !== "" && formData.lastEditDate !== "") {
            setIsFormValid(true)
        } else {
            if (isFormValid) {
                setIsFormValid(false)
            } 
        }
    },[formData])

    const onFormUpdate = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onClick =() => {
        console.log("formData: ", formData)
        axios.post('http://localhost:8080/api/content', formData)
        props.fetchData()
    }
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            
            <input type='hidden' name='id' value={props.nextId} />
            <label>
                Book Title:
                <input type='text' name='title' value={formData.title} onChange={ onFormUpdate } />
            </label>
            <label>
                Author Name:
                <input type='text' name='authorName' value={formData.authorName} onChange={ onFormUpdate } />
            </label>
            <label>
                Available:
                <input type='number' name='inventoryCount' value={formData.inventoryCount} onChange={ onFormUpdate } />
            </label>
            <label>
                Publish Date:
                <input type='date' name='publishDate' value={formData.publishDate} onChange={ (e) => { onFormUpdate(e); setFormData((prev) => ({...prev, lastEditDate: e.target.value})) } } />
            </label>
            <input type='hidden' name='lastEditDate' value={formData.lastEditDate} />
            <button className={isFormValid ? 'submit' : 'submit disabled'} disabled={!isFormValid} onClick={onClick} >Submit</button>
        </form>
    )
}

export default New;