import React, { useState } from "react";
import { ADD_POST, CREATE_POST } from "../../utils/mutations";
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';


export default function addAPost() {
  const [postFormData, setPostFormData] = useState({ question: '', content: '' });

  const [createPost, { error }] = useMutation(CREATE_POST);
  const [addPost, { error2 }] = useMutation(ADD_POST);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPostFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    event.preventDefault();

    try {
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
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
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

        <div>
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

        <div>
          <button
            disabled={!(postFormData.question && postFormData.content)}
            type="submit"
            variant="success"
          >
            Add Post
          </button>
        </div>
      </form>
    </div >
  );
};
