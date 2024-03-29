import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: [true, "Title is required!"],
        minlength: [3, "Title must have at least 3 letters"],
        maxlength: [300, "Title is too long"]
    },
    content: {
        type: String,
        required: [true, "Description is required!"],
    },
    authorId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    attachments: {
        type: String
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User",
    }],
    likesCount: {
        type: Number,
        default: 0,
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
    }],
    createdAt: {
        type : Date,
        default: Date.now
    }

    // tags: { type: String },
    // visibility: { type: String, enum: ['public', 'private', 'restricted'], default: 'public' },
});

export default mongoose.model("Post", postSchema);
