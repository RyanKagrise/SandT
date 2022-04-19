import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { fetchArticle } from '../../store/article'
import { Redirect, NavLink, useHistory } from 'react-router-dom'
import { fetchComments } from '../../store/comment'

// const Comments = () => {

//   let history = useHistory();
//   const dispatch = useDispatch();
//   const articleParam = useParams();

//   const articleId = articleParam.id

//   const sessionUser = useSelector((state) => state.session.user);

//   const article = useSelector((state) => state.article[articleId]);

//   return (
//     <>
//       <div key={comment.id}>
//         {comment?.content}
//       </div>
//     </>
//   )
// }

// export default Comments;
