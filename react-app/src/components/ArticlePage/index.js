import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { fetchComments } from '../../store/comment'
import { Redirect, useHistory, NavLink } from 'react-router-dom'
import { removeArticle } from '../../store/article'
import DeleteArticle from '../DeleteArticle'
import './ArticlePage.css'

const ArticlePage = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const articleParam = useParams();

  const articleId = articleParam.id

  console.log('articleID-------------------->', articleId)

  const sessionUser = useSelector((state) => state.session.user);

  const article = useSelector((state) => state.article[articleId]);
  console.log('article--------------------->', article)



  useEffect(() => {
    dispatch(fetchArticle(articleId));
  }, [dispatch]);


  if (sessionUser.id) {
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
                  {comment?.user_id}
                </div>
              </div>
            ))}
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className=''>
          <div className=''>
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
                  {comment?.user_id}
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
