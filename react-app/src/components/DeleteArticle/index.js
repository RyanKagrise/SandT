import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle, fetchArticles } from '../../store/article'
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

    try{
      destroyedArticle = await dispatch(removeArticle(payload)).then(async() => await dispatch(fetchArticles())).then(() => history.push('/articles'));
    } catch (error) {
     console.log('error in delete')
    }
  }


  return (
    <>
      <button
        type='submit'
        onClick={destroyArticleButton}
        className='delete-article'
      >
        Delete Article
      </button>
    </>
  )
}


export default DeleteArticle;
