from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
# from random import randint

comment_routes = Blueprint('comments', __name__)

# get all comments


# # get one comment
# @comment_routes.route('/<int:comment_id>')
# def get_one_comment(comment_id):

#   comment = Comment.query.filter(Comment.id == comment_id).one()
#   print('comment------------------>', comment)
#   return comment.to_dict()


# edit one comment
@comment_routes.route('/<int:comment_id>', methods=['PUT'])
def edit_comment(comment_id):
  data = request.get_json(force=True)
  comment = Comment.query.get(comment_id)
  if 'content' in data.keys():
      comment.content = data['content']

  db.session.commit()

  return comment.to_dict()


# delete one comment
@comment_routes.route('/<int:comment_id>', methods=['DELETE'])
def delete_comment(comment_id):

  comment = Comment.query.filter(Comment.id == comment_id).one()


  db.session.delete(comment)
  db.session.commit()

  return comment.to_dict()
