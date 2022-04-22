import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { useDispatch, useSelector } from "react-redux";
import { updateComment } from '../../store/comment';
import { fetchArticle } from '../../store/article';




const EditComment = ({ article, comment }) => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState();
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);


  // useEffect(() => {
  //   const validationErrors = [];
  //   if (content.length > 255)
  //     return validationErrors.push(
  //       "Please limit content to 255 characters or less!"
  //     );
  //   setErrors(validationErrors);
  //   // dispatch(fetchArticle(article_id))
  // }, [content]);

  const editComment = async (e) => {
    e.preventDefault();

    const updatedComment = {
      article_id: article.id,
      user_id: sessionUser.id,
      content,
    };

    let editedComment;

    try {
      editedComment = await dispatch(updateComment(updatedComment)).then(() => fetchArticle(article.id))
      setShowModal(false)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <button onClick={() => setShowModal(true)} className=""> Edit </button>
      {showModal && (
      <Modal onClose={() => setShowModal(false)} >
        <div className=''>
          <div className=''>
            <div className=''>Edit Comment</div>
          </div>
          <form onSubmit={editComment}>
            <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div>
            <div className=''>
              <label htmlFor='content'>Edit Comment</label>
              <textarea
                name='content'
                style=''
                placeholder='Edit Comment'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </div>
            <div className=''>
              <div id=''>
                <button className='' type='submit'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
      )}
    </>
  )
};


export default EditComment;
