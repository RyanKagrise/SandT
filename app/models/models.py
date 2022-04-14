from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from sqlalchemy import DateTime
from sqlalchemy.sql import func


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    #relationships
    articles = db.relationship("Article", back_populates="author")
    comment = db.relationship("Comment", back_populates="owner")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email
        }

class Article(db.Model):
    __tablename__ = "articles"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    title = db.Column(db.String(40), nullable=False, unique=True)
    image = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    category = db.Column(db.String(20))
    created_at = db.Column(DateTime(timezone=True), server_default=func.now())

    #relationships
    author = db.relationship("User", back_populates="articles")
    comments = db.relationship("Comment", back_populates="article", cascade="all, delete")

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'image': self.image,
            'content': self.content,
            'category': self.category,
            'created_at': self.created_at,
            'comments': [comment.to_dict() for comment in self.comments]
        }

class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    article_id = db.Column(db.Integer, db.ForeignKey("articles.id"))
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"))
    content = db.Column(db.String(255), nullable=False)
    created_at = db.Column(DateTime(timezone=True), server_default=func.now())

    #relationships
    article = db.relationship("Article", back_populates="comments")
    owner = db.relationship("User", back_populates="comment")

    def to_dict(self):
        return {
            'id': self.id,
            'article_id': self.article_id,
            'user_id': self.user_id,
            'content': self.content,
            'created_at': self.created_at,
        }
