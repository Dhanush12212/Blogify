import blogModel from '../models/Blog.js';

export const createBlog = async(req, res) => {
    let { author, title, content} = req.body;

    try { 
        const newBlog = await blogModel.create({
            author,
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

export default blog;