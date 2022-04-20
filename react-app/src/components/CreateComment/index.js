import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { ErrorMessage } from '../utils/ErrorMessage'
import { createNewComment} from '../../store/comment'
import * as sessionActions from '../../store/session';
import './CreateComment.css'
import { fetchArticle } from '../../store/article';

const CreateComment = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  // const comments = useSelector((state) => state.comments)
  const articleParam = useParams();

  const article_id = parseInt(articleParam.id)
  // console.log('THIS RIGHT HEREEEEEEEEEEEE->>>>>', parseInt(articleId))

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const validationErrors = [];
    if (content.length > 255)
      return validationErrors.push(
        "Please limit content to 255 characters or less!"
      );
    setErrors(validationErrors);
    // dispatch(fetchArticle(article_id))
  }, [content]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComment = {
      article_id: article_id,
      user_id: sessionUser.id,
      content,
    };

    let createdComment;

    try {
      createdComment = await dispatch(createNewComment(article_id, newComment)).then(() => dispatch(fetchArticle(article_id))).then(() => setContent("")).then(() => history.push(`/articles/${article_id}`));
      setContent("")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
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
          <label className=''>
            <div className='title-caption'>Add Comment Here!</div>
            <textarea
              type='text'
              placeholder='Enter Comment Content'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className='text-area'
            />
          </label>
          <button
            type='submit'
            disabled={errors.length > 0}
            className='create-button'
          >
            Create Comment
          </button>
        </div>
      </form>
    </>
  )
}

export default CreateComment;
