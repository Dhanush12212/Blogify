import blogModel from '../models/Blog.js';

export const createBlog = async(req, res) => {
    let { title, content} = req.body; 
    
    try { 
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized: No user found in request" });
        }
        const newBlog = await blogModel.create({
            author: req.user.id,
            title,
            content
        });
        return res.status(201).json({ message: 'Successfully created a Blog' ,  blog: newBlog,});
    }
    catch(error) {
        console.log("Error creating blog ", error);
        return res.status(500).json({ message: 'Unable to create a blog!!'});
    }
};

//Get All Blogs

export const getAllBlogs = async(req,res) => {
    
    try { 
        if (!req.user || !req.user.id) {
            return res.status(401).json({ message: "Unauthorized: No user found in request" });
        }
        const Blog = await blogModel.find({ author: req.user.id });
        return res.status(200).json({ message: 'Successfully Fetched Blogs' ,  blog: Blog });
    }
    catch(error) { 
        return res.status(500).json({ message: 'Unable to Fetch blog!!', error: error.message});
    }

}
 
 