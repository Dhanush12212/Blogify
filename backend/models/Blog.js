import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true} );

 
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
