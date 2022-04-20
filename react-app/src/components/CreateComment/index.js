import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { ErrorMessage } from '../utils/ErrorMessage'
import { createNewComment } from '../../store/comment'
import * as sessionActions from '../../store/session';
import './CreateComment.css'

const createComment = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const [content, setContent] = useState("");
  const [errors, setErrors] = useState([]);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    const validationErrors = [];
    if (content.length > 255)
      return validationErrors.push(
        "Please limit content to 255 characters or less!"
      );
    setErrors(validationErrors);
  }, [title]);

  const handleSubmit = async (e) => {
    e.preventDefault();


    let createdArticle;

    try{
      createdArticle = await dispatch(createNewArticle(newArticle)).then(() => history.push('/articles'));
    } catch (error) {
      console.log(error)
    }
  }
}
