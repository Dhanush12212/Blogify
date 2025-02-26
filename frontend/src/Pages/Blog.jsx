// import React, { useState} from 'react';
// import HomeNav from '../Components/HomeNav'; 
// import ReactQuills from '../Components/ReactQuills';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import ShareTo from '../Components/ShareTo'; 
// import axios from 'axios';

// function Blog() {

//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
 
//   const token = localStorage.getItem("token");

//   const createNewBlog = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:8000/api/Blog/createBlog",
//         { title, content },
//         { 
//           withCredentials: true,  
//         }
//       );
//       console.log("Created New Blog: ", response.data);
//     } catch (error) {
//       console.log("Failed to Create Blog: ", error);
//     }
//   };
  
//   return (
//     <div>
//       <HomeNav/>
//       <h1 className='text-3xl font-semibold text-blue-500 mt-28 py-5 text-center'>...You can create New Blog here...</h1>
    
//       <div className='flex justify-center items-center mt-3'>
//         <form onSubmit={createNewBlog}>
//       {/* Buttons */}
//       <div className='flex justify-end gap-6 px-20 text-lg font-medium  '>  
//           <button className='border-2 px-6 py-2 rounded hover:bg-green-900 hover:text-white hover:transition-all' onClick={createNewBlog}>Save</button>  
//             <Popup trigger=
//                 {<button className='border-2 px-6 py-2 rounded hover:bg-yellow-300  hover:transition-all'>Share </button>}
//                 position="top center"
//                 > 
//                 <ShareTo/>
//             </Popup>
//       </div> 
//         <label htmlFor="Title" className='text-2xl mr-3 underline tracking-wider font-semibold'>Title: </label>
//         <input 
//           type='text'  
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           name='title'
//           className='border-b-2 outline-none px-5 text-center text-2xl font-medium'
//           />
//         </form>
//       </div> 


//       {/* Text Editor */}
//       <form onSubmit={createNewBlog}>

//       <ReactQuills content={content} setContent={setContent} />
//       </form>

//     </div>
//   )
// }

// export default Blog



import React, { useState } from 'react';
import HomeNav from '../Components/HomeNav'; 
import ReactQuills from '../Components/ReactQuills';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import ShareTo from '../Components/ShareTo'; 
import axios from 'axios';

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createNewBlog = async (e) => {
    e.preventDefault();  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/Blog/createBlog",
        { title, content }, 
        { withCredentials: true }
      );
      console.log("Created New Blog: ", response.data);
    } catch (error) {
      console.log("Failed to Create Blog: ", error);
    }
  };

  return (
    <div>
      <HomeNav />
      <h1 className='text-3xl font-semibold text-blue-500 mt-28 py-5 text-center'>
        ...You can create New Blog here...
      </h1>


      <form onSubmit={createNewBlog} className="w-full max-w-2xl mx-auto p-5">
        {/* Title Input */}
        <div className='flex flex-col items-center'>
          <label htmlFor="Title" className='text-2xl underline tracking-wider font-semibold'>
            Title:
          </label>
          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name='title'
            className='border-b-2 outline-none px-5 text-center text-2xl font-medium w-full'
            required
          />
        </div>

        {/* Text Editor */}
        <div className="mt-5">
          <ReactQuills content={content} setContent={setContent} />
        </div>

        {/* Buttons */}
        <div className='flex justify-end gap-6 px-20 text-lg font-medium mt-5'>
          <button 
            type="submit" 
            className='border-2 px-6 py-2 rounded hover:bg-green-900 hover:text-white hover:transition-all'>
            Save
          </button>  

          <Popup 
            trigger={<button type="button" className='border-2 px-6 py-2 rounded hover:bg-yellow-300 hover:transition-all'>Share</button>}
            position="top center"> 
            <ShareTo />
          </Popup>
        </div>
      </form>
    </div>
  );
}

export default Blog;
