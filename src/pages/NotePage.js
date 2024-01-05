import React from 'react'
import notes from '../assets/data'
import {Link, useParams} from "react-router-dom"
// import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NotePage = (props) => {
    const {id} = useParams()
    let noteId = id
    let note = notes.find(note => note.id === Number(noteId))

    return (
        <div className='note'>
  
            <div className='note-header'>
                <h3>
                    <Link to="/">
                        <ArrowBackIcon />
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>
            
            </textarea>
            
        </div>
    )
}

export default NotePage
