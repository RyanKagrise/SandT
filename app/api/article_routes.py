from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
from random import randint

article_routes = Blueprint('articles', __name__)

# get all articles



# get one article



# create one article



# edit one article



# delete one article
