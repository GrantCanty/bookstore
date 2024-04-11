import { useEffect, useState } from "react";
import axios from 'axios';
import { content } from "../types/types";


const New = () => {
    const [formData, setFormData] = useState(content)
        
    useEffect(() => {
        setFormData((prev) => ({
            ...prev,
             id: 15
        }))
    },[1])
    
    //console.log("formData: ", formData)


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
    
    return(
        <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
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
        </div>
    )
}

export default New;