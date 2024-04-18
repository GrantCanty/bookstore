import ReactDOM from 'react-dom'
import '../styles/modal.css'
import { useEffect } from 'react'
import New from './new'

const Modal = (props) => {

    useEffect(() => {
        if (props.isActive) {
            const close = (e) => {
                if(e.key === 'Escape') {
                    props.close()
                }
            }
            window.addEventListener('keydown', close)
            return () => window.removeEventListener('keydown', close)
        }
    })
    
    if (!props.isActive) {
        return null
    }

    

    return ReactDOM.createPortal (
        <div onClick={props.close} className='modal-bg'>
             <div onClick={e => e.stopPropagation()} className='modal'>
                <New fetchData={props.fetchData} close={props.close}/>
             </div>
         </div>
         , document.body
    )

}

export default Modal;