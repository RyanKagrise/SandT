import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from '../../store/comment';
import { fetchArticle } from '../../store/article';
import { useHistory, useParams } from 'react-router-dom'


const EditComment = ( article ) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);



  const commentParam = useParams();
  const commentId = commentParam.id;
  console.log(commentId)
  const comment = useSelector((state) => state.comment[commentId])
  // const article = useSelector((state) => state.article[articleId]);

  const [content, setContent] = useState(comment?.content);
  const [errors, setErrors] = useState([]);
  // useEffect(() => {
  //   const validationErrors = [];
  //   if (content.length > 255)
  //     return validationErrors.push(
  //       "Please limit content to 255 characters or less!"
  //     );
  //   setErrors(validationErrors);
  //   // dispatch(fetchArticle(article_id))
  // }, [content]);

  const editComment = async (e) => {
    e.preventDefault();

    const updatedComment = {
      id: commentId,
      article_id: article.id,
      user_id: sessionUser.id,
      content,
    };

    let editedComment;

    try {
      editedComment = await dispatch(updateComment(updatedComment)).then(() => fetchArticle(article.id)).then(() => history.push(`/articles/${article.id}`))
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
