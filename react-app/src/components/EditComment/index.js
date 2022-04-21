// import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory, useParams } from 'react-router-dom';
// import { ErrorMessage } from '../utils/ErrorMessage'
// import { updateComment } from '../../store/comment'
// import * as sessionActions from '../../store/session';
// import '../CreateComment/CreateComment.css'
// import { fetchArticle } from '../../store/article';

// const EditComment = () => {
//   let history = useHistory();
//   const dispatch = useDispatch();
//   const sessionUser = useSelector((state) => state.session.user);
//   const comment = useSelector((state) => state.comment)
//   // const comments = useSelector((state) => state.comments)
//   const articleParam = useParams();

//   const article_id = parseInt(articleParam.id)

//   // console.log('THIS RIGHT HEREEEEEEEEEEEE->>>>>', parseInt(articleId))

//   const [content, setContent] = useState("");
//   const [errors, setErrors] = useState([]);
//   const [errorMessages, setErrorMessages] = useState({});

//   useEffect(() => {
//     const validationErrors = [];
//     if (content.length > 255)
//       return validationErrors.push(
//         "Please limit content to 255 characters or less!"
//       );
//     setErrors(validationErrors);
//     // dispatch(fetchArticle(article_id))
//   }, [content]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedComment = {
//       article_id: article_id,
//       user_id: sessionUser.id,
//       content,
//     };

//     let editedComment;

//     try {
//       editedComment = await dispatch(updateComment(updatedComment)).then(() => dispatch(fetchArticle(article_id))).then(() => history.push(`/articles/${article_id}`));
//       // setContent("")
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   if (sessionUser.id == comment.user_id)
//     return (
//       <>
//         <form onSubmit={handleSubmit} className='form-container'>
//           <ul>
//             {errors.map((error, idx) => (
//               <li className='validationErrors' key={idx}>{error}</li>
//             ))}
//           </ul>
//           <div>
//             <ErrorMessage message={errorMessages.overall} />
//           </div>
//           <div className='form-container'>
//             <label className=''>
//               <div className='title-caption'>Add Comment Here!</div>
//               <textarea
//                 type='text'
//                 placeholder='Enter Comment Content'
//                 value={content}
//                 onChange={(e) => setContent(e.target.value)}
//                 required
//                 className='text-area'
//               />
//             </label>
//             <button
//               type='submit'
//               disabled={errors.length > 0}
//               className='create-button'
//             >
//               Edit Comment
//             </button>
//           </div>
//         </form>
//       </>
//     )
// }

// export default EditComment;
