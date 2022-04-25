import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchArticles } from '../../store/article';
import './ArticleList.css'

const ArticleList = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => state.article);
  //const sessionUser = useSelector((state) => state.session.user);

  const articlesArray = Object.values(articles);
  // console.log('articles-------------------->', articles)
  // console.log('articlesArray-------------------->', articlesArray)


  useEffect(() => {
  dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <>
      <div className=''>
        <p className='PageTitleArticlesList'> Check out our entire collections of articles below! </p>
        <div className=''>
          <ul className='article-grid'>
            {articlesArray.map((article) => (
              <NavLink
                to={`/articles/${article.id}`}
                key={article.id}
                className='Articles-link'
                style={{ textDecoration: "none" }}
              >
                <h3 className=''>{article?.title}</h3>
                {article ? <img className='articleImage' src={article?.image} onError={(e) => e.target.src = 'https://fh-sites.imgix.net/sites/4921/2016/12/07115947/Dive-030619-1164.jpg'}/> : null}
                {/* <p className=''>Date: {article?.image}</p> */}
                {/* <div className=''>{article?.content}</div> */}
                <div className=''>Category: {article?.category}</div>
                {/* <div className=''>Created At: {article?.created_at}</div> */}
                {/* <div> Categories:
                  {article?.Categories?.map((category) => (
                  <p key={category?.id}>
                    {category?.type}
                  </p> */}
                  {/* ))}
                </div> */}
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ArticleList;
