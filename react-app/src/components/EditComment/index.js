import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from '../../store/comment';
import { fetchArticle } from '../../store/article';
import { useHistory, useParams } from 'react-router-dom'


const EditComment = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const {articleId, commentId} = useParams();
  const article = useSelector((state) => state.article[articleId])
  console.log('article ----------------->', article)
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([]);

  // const comment = useSelector((state) => state.article.comments[commentId])

  // console.log('THIS IS IT------------->', comment)

  useEffect(() => {
    // const validationErrors = [];
    // if (content.length > 255)
    //   return validationErrors.push(
    //     "Please limit content to 255 characters or less!"
    //   );
    // setErrors(validationErrors);
    dispatch(fetchArticle(articleId))
  }, [dispatch]);


  const editComment = async (e) => {
    e.preventDefault();

    const updatedComment = {
      id: commentId,
      article_id: articleId,
      user_id: sessionUser.id,
      content,
    };

    let editedComment;

    try {
      editedComment = await dispatch(updateComment(updatedComment)).then(() => fetchArticle(articleId)).then(() => history.push(`/articles/${articleId}`))
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className=''>
        <div className=''>
          <div className=''>Edit Comment</div>
        </div>
        <form onSubmit={editComment}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className=''>
            <label htmlFor='content'></label>
            <textarea
              name='content'
              placeholder='Edit Comment'
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            />
          </div>
          <div className=''>
            <div id=''>
              <button className='' type='submit'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
};


export default EditComment;
