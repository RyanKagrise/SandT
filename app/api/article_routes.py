from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
from app.forms import ArticleForm
# from random import randint

article_routes = Blueprint('articles', __name__)

def error_handling(validation_errors):
  errors = []

  for field in validation_errors:
    for error in validation_errors[field]:
      errors.append(f'{field} : {error}')
  return errors


# get all articles
@article_routes.route('/')
def get_all_articles():

  articles = Article.query.all()

  return { "articles": [article.to_dict() for article in articles]}


# get one article
@article_routes.route('/<int:article_id>')
def get_one_article(article_id):

  article = Article.query.filter(Article.id == article_id).one()

  return article.to_dict()


# create one article
@article_routes.route('/add/', methods=['POST'])
# @login_required
def create_article():

  form = ArticleForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  if form.validate_on_submit():
    article = Article(
      user_id=current_user.id,
      title=form.data["title"],
      image=form.data["image"],
      content=form.data["content"],
      category=form.data["category"]
    )

    db.session.add(article)
    db.session.flush()
    db.session.commit()

    return article.to_dict()

  return {'errors': error_handling(form.errors)}, 400


# edit one article
@article_routes.route('/<int:article_id>', methods=['PUT'])
# @login_required
def edit_article(article_id):

  form = ArticleForm()
  form['csrf_token'].data = request.cookies['csrf_token']

  article_id = request.json['id']
  article = Article.query.get(article_id)

  if form.validate_on_submit() and article.user_id == current_user.id:
    article.title=form.data["title"],
    article.image=form.data["image"],
    article.content=form.data["content"],
    article.category=form.data["category"]

    db.session.add(article)
    db.session.flush()
    db.session.commit()

    return article.to_dict()

  return {'errors': error_handling(form.errors)}, 400


# delete one article
@article_routes.route('/<int:article_id>/delete', methods=['DELETE'])
# @login_required
def delete_article(article_id):

  article = Article.query.get(article_id)

  if article.user_id == current_user.id:
    db.session.delete(article)
    db.session.commit()
    return f"Deleted Article: {article_id}"
  else:
    return {'Error': 'Invalid Request'}, 401



### comments routes ##########################################
@article_routes.route('/<int:article_id>/comments/')
def get_all_comments(article_id):

  comments = Comment.query.filter(Comment.article_id == article_id).all()
  print(f'comments------------->', comments)


  return { "comments": [comment.to_dict() for comment in comments]}




# # create one comment
# @article_routes.route('/<int:article_id>/comments', methods=['POST'])
# def create_comment(article_id):
#   data = request.get_json(force=True)

#   comment = Comment(
#       article_id=article_id,
#       user_id=current_user.id,
#       content=data["content"]
#   )

#   db.session.add(comment)
#   db.session.flush()
#   db.session.commit()

#   return comment.to_dict();
