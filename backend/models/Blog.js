import mongoose from 'mongoose';

const Blog = new model.BlogSchema({
    author: {
        type: 'String',
        required: true,
    },
    title: {
        type: 'String',
        required: true,
    },
    author: {
        type: 'String',
        required: true
    }
});

Blog = mongoose.model("Blog", BlogSchema);
export default Blog;