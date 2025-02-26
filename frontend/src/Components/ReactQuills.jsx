import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function ReactQuills() {
    const [content, setContent] = useState('');

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
    );
}

export default ReactQuills;
