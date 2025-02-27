import React, { useState} from 'react';
import HomeNav from '../Components/HomeNav'; 
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ShareTo from '../Components/ShareTo'; 
import axios from 'axios';

function Blog() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
 
  const token = localStorage.getItem("token");

  const createNewBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/Blog/createBlog",
        { title, content },
        { 
          withCredentials: true,  
        }
      );
      console.log("Created New Blog: ", response.data);
    } catch (error) {
      console.log("Failed to Create Blog: ", error);
    }
  };

  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
    [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],
    [{ 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'direction': 'rtl' }],
    [{ 'size': ['small', false, 'large', 'huge'] }],
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']
]; 

const handleChange = (value) => {
    console.log("Quill content:", value);  
    setContent(value.trim() ? value : "");
};
  
  return (
    <div>
      <HomeNav/>
      <h1 className='text-3xl font-semibold text-blue-500 mt-28 py-5 text-center'>...You can create New Blog here...</h1>
     
      <form onSubmit={createNewBlog}>

      {/* Buttons */}
      <div className='flex justify-center'>
          <label htmlFor="Title" className='text-2xl mr-3 underline tracking-wider font-semibold'>Title: </label>
          <input 
            type='text'  
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name='title'
            className='border-b-2 outline-none px-5 text-center text-2xl font-medium'
            />
      </div>

      <div className='flex justify-end gap-6 px-20 text-lg font-medium  '>  
          <button className='border-2 px-6 py-2 rounded hover:bg-green-900 hover:text-white hover:transition-all' onClick={createNewBlog}>Save</button>  
            <Popup trigger=
                {<button className='border-2 px-6 py-2 rounded hover:bg-yellow-300  hover:transition-all'>Share </button>}
                position="top center"
                > 
                <ShareTo/>
            </Popup>
      </div> 

      {/* Text Editor */} 
       <div className="w-full p-4 text-center px-20">
                  <ReactQuill 
                      name='Content'
                      value={content}
                      onChange={handleChange}
                      modules={{ toolbar: toolbarOptions }}
                      theme="snow"
                      className='h-screen bg-zinc-300 '
                  /> 
        </div>
      
      </form>  

    </div>
  )
}

export default Blog

 