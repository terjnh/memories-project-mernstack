// functions for '/server/routes/posts.js'
///// HTTP description codes: https://www.restapitutorial.com/httpstatuscodes.html
import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => { 
    try {
        const postMessages = await PostMessage.find();
                
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new PostMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// when we make a request, we will get /posts/123 (for example). 123 will be the 'id'
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    // check if _id is a mongoose object id
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });

    res.json(updatedPost);
}