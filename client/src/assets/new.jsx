import { useEffect, useState } from "react";
import axios from 'axios';
import { content } from "../types/types";

const New = (props) => {
    const [formData, setFormData] = useState(content)
    
    console.log("id: ", props.nextId)
    console.log("formData: ", formData)

    useEffect(() => {
        setFormData({
            ...formData,
            id: props.nextId +1
        })
    },[])


    const onFormUpdate = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
        //console.log("formData: ", formData)
        //console.log(e.target)*/
    }

    const onClick =() => {
        console.log("formData: ", formData)
        axios.post('http://localhost:8080/api/content', formData)
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
            <button onClick={onClick} >Submit</button>
        </form>
    )
}

export default New;