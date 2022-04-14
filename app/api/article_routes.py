from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
from random import randint

article_routes = Blueprint('articles', __name__)

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
@article_routes.route('/', methods=['POST'])
def create_article():

  data = request.get_json(force=True)

  article = Article(
    user_id=current_user.id,
    title=data["title"],
    image=data["image"],
    content=data["content"],
    category=data["category"]
  )

  db.session.add(article)
  db.session.flush()
  db.session.commit()

  return article.to_dict()

# edit one article
@article_routes.route('/<int:article_id>', methods=['PUT'])
def edit_article(article_id):

  article = Article.query.get(article_id)

  data = request.get_json(force=True)

  article.title = data.title
  article.image = data.image
  article.content = data.content
  article.category = data.category

# print the edited data

  db.session.commit()

  return article.to_dict()

# delete one article
