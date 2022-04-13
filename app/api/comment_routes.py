from flask import Blueprint, request
from flask_login import login_required, current_user
from ..models import db, User, Article, Comment
from random import randint

comment_routes = Blueprint('comments', __name__)

# get one comment



# get all comments



# create one comment



# edit one comment



# delete one comment
