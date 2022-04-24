import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from '../../store/comment';
import { fetchArticle } from '../../store/article';
import { useHistory, useParams } from 'react-router-dom'
import './EditComment.css'


const EditComment = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const {articleId, commentId} = useParams();
  const article = useSelector((state) => state.article[articleId])
  const comment = useSelector((state) => state.comment[commentId])
  const [content, setContent] = useState(comment?.content);
  const [errors, setErrors] = useState([]);

  // const comment = useSelector((state) => state.article.comments[commentId])

  // console.log('THIS IS IT------------->', comment)

  useEffect(() => {
    dispatch(fetchArticle(articleId))
    setErrors([])
  }, [content, dispatch]);


  const editComment = async (e) => {
    e.preventDefault();

    if (content.length > 255) {
      console.log(errors)
      return setErrors(["Please limit content to 255 characters or less!"])
    }

    const updatedComment = {
      id: commentId,
      article_id: articleId,
      user_id: sessionUser.id,
      content,
    };

    let editedComment;

    editedComment = await dispatch(updateComment(updatedComment))
    await dispatch(fetchArticle(articleId))
      // .then(() => history.push(`/articles/${articleId}`))
    // if (!editedComment) {
    //   setErrors(editedComment)
    //   console.log(editedComment)
    // }
    console.log(errors)

    if(errors.length === 0) {
      console.log('is this being hit???????????')
      history.push(`/articles/${articleId}`)
    }
  }


  return (
    <>
      <div className='form-container'>
        <div className=''>
          <div className='edit-caption'>Edit Comment</div>
        </div>
        <form onSubmit={editComment} className='form-container'>
          <div className='validationErrors'>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='form-container'>
            <label htmlFor='content'></label>
            <textarea
              name='content'
              placeholder='Edit Comment'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className='text-area'
              required
            />
          </div>
          <div className=''>
            <div id=''>
              <button className='create-comment' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};


export default EditComment;
