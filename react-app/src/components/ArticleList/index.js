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
        <p className='PageTitle'> Instructional Articles Home Page </p>
        <div className=''>
          <ul className='Container'>
            {articlesArray.map((article) => (
              <NavLink
                to={`/articles/${article.id}`}
                key={article.id}
                className=''
                style={{ textDecoration: "none", padding: 10, marginTop: 0 }}
              >
                <h3 className=''>{article?.title}</h3>
                {article ? <img className='articleImage' src={article?.image} alt='' /> : null}
                {/* <p className=''>Date: {article?.image}</p> */}
                {/* <div className=''>{article?.content}</div> */}
                <div className=''>Category: {article?.category}</div>
                <div className=''>Created At: {article?.created_at}</div>
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
