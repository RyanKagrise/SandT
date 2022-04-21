from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
from app.forms import CommentForm
# from random import randint

comment_routes = Blueprint('comments', __name__)

# get all comments


# # get one comment
# @comment_routes.route('/<int:comment_id>')
# def get_one_comment(comment_id):

#   comment = Comment.query.filter(Comment.id == comment_id).one()
#   print('comment------------------>', comment)
#   return comment.to_dict()

# create one comment
@comment_routes.route('/<int:article_id>/new', methods=['POST'])
def create_comment(article_id):

  form = CommentForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    comment = Comment(
      article_id=article_id,
      user_id=current_user.id,
      content=form.data["content"]
  )

    db.session.add(comment)
    db.session.flush()
    db.session.commit()

    return comment.to_dict();
  return {'errors': error_handling(form.errors)}, 400




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
@comment_routes.route('/<int:comment_id>/delete/', methods=['DELETE'])
def delete_comment(comment_id):

  comment = Comment.query.filter(Comment.id == comment_id).first()

  db.session.delete(comment)
  db.session.commit()

  return f"Deleted Comment: {comment_id}"
