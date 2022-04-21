from flask_wtf import FlaskForm
from wtforms import TextAreaField, SubmitField
from wtforms.validators import DataRequired, Length

class CommentForm(FlaskForm):
  content = TextAreaField('content', validators=[DataRequired(), Length(min=1, max=255)])
  submit = SubmitField('submit')
