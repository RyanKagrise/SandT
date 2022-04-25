import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { fetchComments, removeComment } from '../../store/comment'
import { useHistory, NavLink } from 'react-router-dom'
// import { removeArticle } from '../../store/article'
// import { ErrorMessage } from '../utils/ErrorMessage'
import DeleteArticle from '../DeleteArticle'
import CreateComment from '../CreateComment'
import EditComment from '../EditComment'
import Footer from '../Footer'
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


  const destroyComment = async (e, comment) => {
    e.preventDefault();

    const payload = {
      id: comment.id,
    }

    let destroyedComment;
    try {
      console.log('payload ----------->', payload)
      destroyedComment = await dispatch(removeComment(payload)).then(() => dispatch(fetchArticle(articleId))).then(() => history.push(`/articles/${articleId}`));
      // .then(() => dispatch(fetchArticle(articleId))).then(() => history.push(`/articles/${articleId}`));
    } catch (error) {
      (console.log('error in delete'))
    }
  }

  const alterComment = (comment) => {
    if (sessionUser?.id === comment?.user_id) {
      return (
        <>
          <div className='comment-buttons-div'>
            <NavLink className='edit-comment' exact to={`/articles/${article.id}/comments/${comment.id}/edit`}>
              Edit Comment
            </NavLink>
            <button
              type='submit'
              onClick={(e) => destroyComment(e, comment)}
              className='edit-comment'
            >
              Delete Comment
            </button>
          </div>
        </>
      )
    }
  }

  const showComments = (comment) => {
    if (!comment) {
      return (
        <>
          This is it!
        </>
      )
    } else {
      return (
        <div className='comment-box'>
          <div>
            {comment?.content}
          </div>
          <div>
            {comment?.owner}
          </div>
        </div>
      )
    }
  }

  // const editCommentShow = (comment) => {
  //   if (sessionUser?.id === comment?.user_id) {
  //     return (
  //       <EditComment />
  //     )
  //   }
  // }


  if (!article) {
    return (
      <>
        <div className='page-not-found'>
          <div className='title-not-found'> Page Not Found!</div>
          <div className='explanation-not-found'>
            We apologize but it appears this article does not exist! Please check the url or search our home page for new articles!
          </div>
        </div>
      </>
    )
  } if (sessionUser?.id === article?.user_id) {
    return (
      <>
        <div className='page-container'>
          <div className=''>
            <div className='article-container'>
              <h2 className=''>{article?.title}</h2>
              {article ? <img className='article-image' src={article?.image} onError={(e) => e.target.src = 'https://fh-sites.imgix.net/sites/4921/2016/12/07115947/Dive-030619-1164.jpg'} /> : null}
              <p className=''>{article?.content}</p>
              <p className=''>Category: {article?.category}</p>
              {/* <p className=''>Created At: {article?.created_at}</p> */}
            </div>
          </div>
          <div className='edit-delete-buttons'>
            <NavLink className='edit-comment' exact to={`/articles/${article?.id}/edit`}>
              Edit Article
            </NavLink>
            <DeleteArticle />
          </div>
          <div className=''>
            {article?.comments?.map((comment) => (
              <div key={comment.id} className='comment'>
                {showComments(comment)}
                {/* <div>
                  {comment?.content}
                </div>
                <div>
                  {comment?.owner}
                </div> */}
                <div>
                  {alterComment(comment)}
                </div>
              </div>
            ))}
          </div>
          <CreateComment />
        </div>
        <Footer />
      </>
    )
  } if (sessionUser) {
    return (
      <>
        <div className='page-container'>
          <div className='article-container'>
            <h2 className=''>{article?.title}</h2>
            {article ? <img className='article-image' src={article?.image} onError={(e) => e.target.src = 'https://fh-sites.imgix.net/sites/4921/2016/12/07115947/Dive-030619-1164.jpg'} /> : null}
            <p className=''>{article?.content}</p>
            <p className=''>Category: {article?.category}</p>
            {/* <p className=''>Created At: {article?.created_at}</p> */}
          </div>
          <div className=''>
            {article?.comments?.map((comment) => (
              <div key={comment.id} className='comment'>
                {showComments(comment)}
                {/* <div>
                  {comment?.content}
                </div>
                <div>
                  {comment?.owner}
                </div> */}
                <div>
                  {alterComment(comment)}
                </div>
              </div>
            ))}
          </div>
          <div>

          </div>
          <CreateComment />
        </div>
        <Footer />
      </>
    )
  } else {
    return (
      <>
        <div className='page-container'>
          <div className='article-container'>
            <h2 className=''>{article?.title}</h2>
            {article ? <img className='article-image' src={article?.image} onError={(e) => e.target.src = 'https://fh-sites.imgix.net/sites/4921/2016/12/07115947/Dive-030619-1164.jpg'} /> : null}
            <p className=''>{article?.content}</p>
            <p className=''>Category: {article?.category}</p>
            {/* <p className=''>Created At: {article?.created_at}</p> */}
          </div>
          <div className=''>
            {article?.comments?.map((comment) => (
              <div key={comment.id} className='comment'>
                {showComments(comment)}
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </>
    )
  }
}
export default ArticlePage;
