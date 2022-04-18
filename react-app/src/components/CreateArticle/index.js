import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { ErrorMessage } from '../utils/ErrorMessage'
import { createNewArticle } from '../../store/article'
import * as sessionActions from '../../store/session';
import './CreateArticle.css'

const CreateArticle = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const validationErrors = [];
    if (title.length > 40)
      return validationErrors.push(
        "Please limit titles to be less than 40 characters!"
      );
    setErrors(validationErrors);
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newArticle = {
      user_id: sessionUser.id,
      title,
      image,
      content,
      category,
    };

    let createdArticle;

    try{
      createdArticle = await dispatch(createNewArticle(newArticle)).then(() => history.push('/articles'));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li className='validationErrors' key={idx}>{error}</li>
            ))}
          </ul>
          <div>
            <ErrorMessage message={errorMessages.overall} />
          </div>
          <div className=''>
            <label className=''>
              <div className=''>Title</div>
              <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label className=''>
              <div className=''>Image</div>
              <input
                type='text'
                placeholder='Article Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </label>
            <label className=''>
              <div className=''>Content</div>
              <textarea
                type='text'
                placeholder='Enter Article Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </label>
            <label className=''>
              <div className=''>Category</div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">-- Choose A Certification Level --</option>
                <option value={"Open Water"}>Open Water</option>
                <option value={"Advanced"}>Advanced</option>
                <option value={"Rescue"}>Rescue</option>
                <option value={"Master"}>Master</option>
              </select>
            </label>
            <button
              type='submit'
              disabled={errors.length > 0}
              className='PLACEHOLDER'
            >
              Create Article
            </button>
          </div>
        </form>
      </div>
    </>
  )
};



export default CreateArticle;
