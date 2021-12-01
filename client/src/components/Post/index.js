import React, { useState } from "react";
import { ADD_POST, CREATE_POST } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


export default function AddAPost(props) {
  const [postFormData, setPostFormData] = useState({ question: '', content: '', author: Auth.getProfile().data.username || "", topic: props.topicId });

  const [createPost, { error }] = useMutation(CREATE_POST);
  const [addPost, { error2 }] = useMutation(ADD_POST);

 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...postFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    event.preventDefault();

    try {
      console.log("HEE0", postFormData)
      const { data } = await createPost({
        variables: { ...postFormData },
      });

      if (!data) {
        console.log('post not created')
        throw error
      }

      const postAssign = await addPost({
        variables: { ...data },
      });

      if (!postAssign) {
        console.log('post not assigned')
        throw error2
      }

    } catch (e) {
      console.error("error: ", e);
    }

    // clear form values
    setPostFormData({
      question: '',
      content: '',
      author: '',
      topic:''
    });
  };

  return (
    <div className="postForm">
      <form onSubmit={handleFormSubmit}>
        <div classname='inputBox'>
          <label htmlFor="author">
            Your username
          </label>
          <input
            type="text"
            id="author"
            placeholder="Your username"
            name="username"
            value={Auth.getProfile().data.username || ""}

          />
        </div>
        <div classname='inputBox'>
          <label htmlFor="postTitle">
            Post Title
          </label>
          <input
            type="text"
            id="question"
            placeholder="Your Post Title"
            name="question"
            onChange={handleInputChange}
          />
        </div>

        <div classname='inputBox'>
          <label htmlFor="postContent">
            Post Content
          </label>
          <input
            type="text"
            id="postContent"
            placeholder="Your Content"
            name="content"
            onChange={handleInputChange}
          />
        </div>

        <div classname='inputBox'>
          <button
            type="submit"
            variant="success"
            onClick={handleFormSubmit}
          >
            Add Post
          </button>
        </div>
      </form>
    </div >
  );
};
