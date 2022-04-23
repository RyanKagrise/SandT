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
  }, [image, dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!allowedImages(image)) {
    return setErrors(['Image must be in the following format: .jpg, .jpeg, and/or .png!']);
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
              Update Article
            </button>
          </div>
        </form>
      </div>
    </>
  )
};


export default EditArticle;
