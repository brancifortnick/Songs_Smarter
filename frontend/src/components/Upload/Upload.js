import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./Upload.module.css";
import { useState, useEffect } from "react";
import { createSong } from '../../store/song'
import { useHistory } from 'react-router';




const Upload = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const[title, setTitle] = useState('')
    const[url, setUrl] = useState("");
    const[userId, setUserId] = useState('')
    const[fileUpload, setFileUpload] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const song = {
          title,
          url,
          userId,
        }
      const addedSong = await dispatch(createSong(song));
      if(addedSong)
       return history.push(`/songs/${addedSong.id}`) //? go to song page
    }

    useEffect(()=> {
    },[dispatch])

    return (
      <form onSubmit={onSubmit}>
        <div>
          <input
          name='song-link'
          type="text"
          value={fileUpload}
          onChange={(e)=> setFileUpload(e.target.value)}
          required
          />

          <input
          type="file"
          name="songUpload"></input>
        </div>
          <button type='submit'>Submit</button>

      </form>
    );
}


export default Upload;