import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { Redirect, useHistory, NavLink } from 'react-router-dom'
import { removeArticle } from '../../store/article'
import DeleteArticle from '../DeleteArticle'

import './ArticlePage.css'

const ArticlePage = () => {

  let history = useHistory();
  const dispatch = useDispatch();
  const articleParam = useParams();

  const [loaded, setLoaded] = useState(false);

  const articleId = articleParam.id

  console.log('articleID-------------------->', articleId)

  const sessionUser = useSelector((state) => state.session.user);

  const article = useSelector((state) => state.article[articleId]);
  console.log('article--------------------->', article)


  useEffect(() => {
    dispatch(fetchArticle(article));
    setLoaded(true);
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  if (sessionUser.id) {
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
        </div>
        <NavLink className='standard-link' exact to={`/articles/${article?.id}/edit`}>
          Edit Article
        </NavLink>
        <DeleteArticle />
      </>
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
        </div>
      </>
    )
  }
}
export default ArticlePage;
