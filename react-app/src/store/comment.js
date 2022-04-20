//action variables
const GET_COMMENTS = 'events/getComments';
const CREATE_COMMENT = 'events/createComment';
const EDIT_COMMENT = 'events/editComment'
const DELETE_COMMENT = 'events/deleteComment';


//action creators
const getComments = comments => {
  return {
    type: GET_COMMENTS,
    comments
  }
}

const createComment = comment => {
  return {
    type: CREATE_COMMENT,
    comment
  }
}

const editComment = comment => {
  return {
    type: EDIT_COMMENT,
    comment
  }
}

const deleteComment = id => {
  return {
    type: DELETE_COMMENT,
    id
  }
}

//thunk

export const fetchComments = (article_id) => async dispatch => {
  const res = await fetch(`/api/articles/${article_id}/comments`);

  if (res.ok) {
    const comments = await res.json();
    dispatch(getComments(article_id, comments.comments));
  }
}


export const createNewComment = (article_id, comment) => async dispatch => {
  const res = await fetch(`/api/comments/${article_id}/new`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(createComment(data));
  } else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred with this request. Please resolve and try again.']
  }
};


export const updateComment = (comment) => async dispatch => {
  const res = await fetch(`/api/comments/${comment.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(comment),
  });

  if (res.ok) {
    const editedComment = await res.json()
    dispatch(editComment(editedComment))
  } else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred with this request. Please resolve and try again.']
  }
};

export const removeComment = (comment) => async dispatch => {
  const res = await fetch(`/api/comment/${comment.id}/delete`, {
    method: 'delete'
  });
  if (res.ok) {
    const removedComment = await res.json();
    await dispatch(deleteComment(removedComment))
    return removedComment;
  }
  return false;
}



//reducer
const commentReducer = (state = {
    allComments: {},
}, action) => {
  switch (action.types) {
    case GET_COMMENTS: {
      const newAllComments = {};
      action.comments.forEach((comment) => {
        newAllComments[comment.id] = comment;
      });
      return {...state, allComments: newAllComments};
    }

    case CREATE_COMMENT: {
      const newComments = {};
      newComments[action.comment.id] = action.comment;
      return {...state, allComments: newComments}
    }

    case DELETE_COMMENT: {
      const newState = { ...state };
      delete newState[action.id];
      return newState
    }

    case EDIT_COMMENT:
      return {
        ...state,
        [action.comment.id]: action.comment
      }
    default:
      return state;
  }
};


export default commentReducer;
