from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
  content = TextAreaField('content', validators=[DataRequired()])
  submit = SubmitField('submit')
