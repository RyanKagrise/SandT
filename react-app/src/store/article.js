//action variables
const GET_ARTICLES = 'events/getArticles';
const GET_ARTICLE = 'events/getArticle';
const CREATE_ARTICLE = 'events/createArticle';
const EDIT_ARTICLE = 'events/editArticle'
const DELETE_ARTICLE = 'events/deleteArticle';



//action creators
const getArticles = articles => {
  return {
    type: GET_ARTICLES,
    articles
  }
}

const getArticle = article => {
  return {
    type: GET_ARTICLE,
    article
  }
}

const createArticle = article => {
  return {
    type: CREATE_ARTICLE,
    article
  }
}

const editArticle = editedArticle => {
  return {
    type: EDIT_ARTICLE,
    editedArticle
  }
}

const deleteArticle = id => {
  return {
    type: DELETE_ARTICLE,
    id
  }
}

// //referenced in session.js store
// export const deleteEvents = () => {
//   return {
//     type: DELETE_EVENTS
//   }
// }




//thunk action creators
export const fetchArticles = () => async dispatch => {
  const res = await fetch(`/api/articles/`);

  if (res.ok) {
    const articles = await res.json();
    dispatch(getArticles(articles.articles));
  }
}

export const fetchArticle = (id) => async dispatch => {
  const res = await fetch(`/api/articles/${id}`);

  if (res.ok) {
    const article = await res.json();
    dispatch(getArticle(article));
  }
}

export const createNewArticle = (article) => async dispatch => {
  const res = await fetch('/api/articles/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(article)
  });

  if(res.ok) {
    const data = await res.json();
    dispatch(createArticle(data));
  } else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred with this request. Please resolve and try again.']
  }
};


export const updateArticle = (article) => async dispatch => {
  const res = await fetch(`/api/articles/${article.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });

  if (res.ok) {
    const editedArticle = await res.json()
    dispatch(editArticle(editedArticle))
  } else if (res.status < 500) {
    const data = await res.json()
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred with this request. Please resolve and try again.']
  }
};

export const removeArticle = (article) => async dispatch => {
  const res = await fetch(`/api/articles/${article.id}/delete`, {
    method: 'delete'
  });
  if (res.ok) {
    const removedArticle = await res.json();
    await dispatch(deleteArticle(removedArticle))
    return removedArticle;
  }
  return false;
}


//reducer
const articleReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ARTICLES: {
      const newState = { ...state };
      action.articles.forEach((article) => {
        newState[article.id] = article;
      });
      return newState;
    }

    case CREATE_ARTICLE: {
      const newState = {
        ...state,
        [action.article.id]: action.article,
      };
      return newState;
    }

    case GET_ARTICLE: {
      return {
        ...state,
        [action.article.id]: {
          ...state[action.article.id],
          ...action.article,
        },
      };
    }

    case DELETE_ARTICLE: {
      const newState = { ...state };
      delete newState[action.id];
      return newState
    }

    case EDIT_ARTICLE:
      return {
        ...state,
        [action.editedArticle.id]: action.editedArticle
      }
    default:
      return state;
  }
};



export default articleReducer;
