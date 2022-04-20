import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchArticles } from '../../store/article';
import './LandingPage.css'


const LandingPage = () => {
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
      <div>
        <div className='site-title'> Welcome To Scuba & Travel!
        </div>
        <p className='Landing-title'> Check out our newest articles! </p>
        <div className='div-container'>
          <ul className='Landing-Container'>
            {articlesArray.slice(-4).map((article) => (
              <NavLink
                to={`/articles/${article.id}`}
                key={article.id}
                className='Landing-link'
                style={{ textDecoration: "none", padding: 10, marginTop: 0 }}
              >
                <h3 className=''>{article?.title}</h3>
                {article ? <img className='LandingImage' src={article?.image} alt='' /> : null}
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
      <footer className='footer'>
        <a href='https://github.com/RyanKagrise'>
          <img className='github' src='https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' alt='' />
        </a>
        <div className='footer-text'>
          Meet The Site's Creator!
        </div>
        <a href='https://www.linkedin.com/in/ryan-kagrise-27893551/'>
          <img className='github' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Linkedin_icon.svg/640px-Linkedin_icon.svg.png' alt='' />
        </a>
      </footer>
    </>
  )
}



export default LandingPage;
