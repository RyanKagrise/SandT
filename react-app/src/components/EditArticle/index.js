import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { ErrorMessage } from '../utils/ErrorMessage';
import { updateArticle, fetchArticle } from '../../store/article';


const EditArticle = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const articleParam = useParams();
  const articleId = articleParam.id;
  const article = useSelector((state) => state.article[articleId]);


  const [title, setTitle] = useState(article?.title);
  const [image, setImage] = useState(article?.image);
  const [content, setContent] = useState(article?.content);
  const [category, setCategory] = useState(article?.category);
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  const allowedImages = (image) => {
    return (image?.includes('jpg') || image?.includes('jpeg') || image?.includes('png'))
  }

  useEffect(() => {
  dispatch(fetchArticle(articleId))
  setErrors([])
  }, [image, title, dispatch]);

  useEffect(() => {
    if (typeof article === "undefined") {
      history.push('/')
    }
  }, [title, image, content])

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allowedImages(image)) {
    return setErrors(['Image must be in the following format: .jpg, .jpeg, and/or .png!']);
    }

    if (title.length > 40) {
      return setErrors(['Title must be less than 40 characters!'])
    }

    const updatedArticle = {
      id: article.id,
      user_id: sessionUser.id,
      title: title,
      image: image,
      content: content,
      category: category,
    };
    let editedArticle;
    try {
      editedArticle = dispatch(updateArticle(updatedArticle));
    } catch (error) {
      console.log('Error in edit form!')
    }
    if (editedArticle) {
      setErrorMessages({});
      setErrors([]);
      history.push(`/articles/${article.id}`);
    }
  };

  return (
    <>
      <div className=''>
        <form onSubmit={handleSubmit} className='form-container'>
          <ul>
            {errors.map((error, idx) => (
              <li className='validationErrors' key={idx}>{error}</li>
            ))}
          </ul>
          <div>
            <ErrorMessage message={errorMessages.overall} />
          </div>
          <div className='form-container'>
            <label className='title'>
              <div className='title-caption'>Title</div>
              <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>
            <label className='image'>
              <div className='title-caption'>Image</div>
              <input
                type='text'
                placeholder='Article Image URL'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </label>
            <label className=''>
              <div className='title-caption'>Content</div>
              <textarea
                type='text'
                placeholder='Enter Article Content'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className='text-area'
                required
              />
            </label>
            <label className='category'>
              <div className='title-caption'>Category</div>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value={"Open Water"}>Open Water</option>
                <option value={"Advanced"}>Advanced</option>
                <option value={"Rescue"}>Rescue</option>
                <option value={"Master"}>Master</option>
              </select>
            </label>
            <button
              type='submit'
              disabled={errors.length > 0}
              className='create-button'
              >
              Update Article
            </button>
          </div>
        </form>
      </div>
    </>
  )
};


export default EditArticle;
