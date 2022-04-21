import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { fetchComments, createNewComment } from '../../store/comment'
import { Redirect, useHistory, NavLink } from 'react-router-dom'
import { removeArticle } from '../../store/article'
import { ErrorMessage } from '../utils/ErrorMessage'
import DeleteArticle from '../DeleteArticle'
import CreateComment from '../CreateComment'
import EditComment from '../EditComment'
import './ArticlePage.css'

const ArticlePage = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const articleParam = useParams();

  const articleId = articleParam.id

  const sessionUser = useSelector((state) => state.session.user);
  // const comments = useSelector((state) => state.article.comments)

  const article = useSelector((state) => state.article[articleId]);

  useEffect(() => {
    dispatch(fetchArticle(articleId));
    dispatch(fetchComments(articleId));
  }, [dispatch]);




  if (sessionUser?.id == article?.user_id) {
    return (
      <div className='page-container'>
        <div className=''>
          <div className='article-container'>
            <h2 className=''>{article?.title}</h2>
            {article ? <img className='' src={article?.image} alt='' /> : null}
            <p className=''>{article?.content}</p>
            <p className=''>Category: {article?.category}</p>
            <p className=''>Created At: {article?.created_at}</p>
          </div>
        </div>
        <div className='edit-delete-buttons'>
          <NavLink className='standard-link' exact to={`/articles/${article?.id}/edit`}>
            Edit Article
          </NavLink>
          <DeleteArticle />
        </div>
        <div className='comment-box'>
        {article?.comments?.map((comment) => (
              <div key={comment.id} className='comment'>
                <div>
                  {comment?.content}
                </div>
                <div>
                  {comment?.owner}
                </div>
                <div>
                </div>
              </div>
            ))}
        </div>
        <CreateComment />
      </div>
    )
  } if (sessionUser) {
    return (
      <>
        <div className='page-container'>
          <div className='article-container'>
            <h2 className=''>{article?.title}</h2>
            {article ? <img className='' src={article?.image} alt='' /> : null}
            <p className=''>{article?.content}</p>
            <p className=''>Category: {article?.category}</p>
            <p className=''>Created At: {article?.created_at}</p>
          </div>
          <div className='comment-box'>
            {article?.comments?.map((comment) => (
              <div key={comment.id}>
                <div>
                  {comment?.content}
                </div>
                <div>
                  {comment?.owner}
                </div>
              </div>
            ))}
          </div>
          <div>

          </div>
          <CreateComment />
        </div>
      </>
    )
  } else {
    return (
      <>
        <div className='page-container'>
          <div className='article-container'>
            <h2 className=''>{article?.title}</h2>
            {article ? <img className='' src={article?.image} alt='' /> : null}
            <p className=''>{article?.content}</p>
            <p className=''>Category: {article?.category}</p>
            <p className=''>Created At: {article?.created_at}</p>
          </div>
          <div className='comment-box'>
            {article?.comments?.map((comment) => (
              <div key={comment.id}>
                <div>
                  {comment?.content}
                </div>
                <div>
                  {comment?.owner}
                </div>
              </div>
            ))}
          </div>
          <div>

          </div>
        </div>
      </>
    )
  }
}
export default ArticlePage;
