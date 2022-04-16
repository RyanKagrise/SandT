import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { useHistory } from 'react-router-dom'
import { removeArticle } from '../../store/article'
import './DeleteArticle.css'


const DeleteArticle = () => {
  const dispatch = useDispatch();
  let history = useHistory();
  const articleParam = useParams();

  const articleId = articleParam.id;

  const sessionUser = useSelector((state) => state.session.user);

  const destroyArticleButton = async (e) => {
    e.preventDefault();
    const payload = {
      userId: sessionUser.id,
      id: articleId
    }
    let destroyedArticle;
    destroyedArticle = await dispatch(removeArticle(payload))
      .catch(error => (console.log('error in delete')))

    if (destroyedArticle) {
      history.push('/articles');
    }
  }


  return (
    <>
      <button
        type='submit'
        onClick={destroyArticleButton}
        className='standard-link'
      >
        Delete Article
      </button>
    </>
  )
}


export default DeleteArticle;
