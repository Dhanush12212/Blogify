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

//Get a single Blog
export const getBlog = async (req, res) => {
    try {
        const blog = await blogModel.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json(blog);
    } catch (error) {
        console.error("Error fetching blog:", error);
        return res.status(500).json({ message: "Failed to fetch blog", error: error.message });
    }
};
 
//Delete Blog 
export const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await blogModel.findByIdAndDelete(req.params.id); 
        if (!deletedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        } 
        return res.status(200).json({ message: "Successfully Deleted Blog", blog: deletedBlog });
    } catch (error) {
        console.error("Error deleting blog:", error); 
        return res.status(500).json({ message: "Failed to delete Blog", error: error.message });
    }
};



// Update Blog
export const updateBlog = async(req,res) => {
    try {
        const updatedBlog = await blogModel.findByIdAndUpdate(
            req.params.id, 
            req.body, 
            {new: true}
        );
        return res.status(200).json({ message: "Successfully Updated Blog", blog: updatedBlog});
    }
    catch(error) {
        console.error("Error updating blog: ",  error);
        return res.status(500).json({ message: "Failed to update Blog", error: error.message});
        
    }
};


// export const updateBlog = async (req, res) => {
//     try {
//         const { id } = req.params;

//         // Check if the blog exists before updating
//         const existingBlog = await blogModel.findById(id);
//         if (!existingBlog) {
//             return res.status(404).json({ message: "Blog not found" });
//         }

//         // Update the blog
//         const updatedBlog = await blogModel.findByIdAndUpdate(
//             id, 
//             req.body, 
//             { new: true }
//         );

//         return res.status(200).json({ message: "Successfully Updated Blog", blog: updatedBlog });
//     } catch (error) {
//         console.error("Error updating blog:", error);
//         return res.status(500).json({ message: "Failed to update Blog", error: error.message });
//     }
// };
