from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SelectField, SubmitField
from wtforms.validators import DataRequired, Length, ValidationError
# from app.models import Article


def check_image(form, field):
  url = field.data
  if url and (url.endswith('.jpg') or url.endswith('.jpeg') or url.endswith('.png') or url.endswith('.gif')):
    raise ValidationError('This image is not in the appropriate format! Please submit either a .jpg, .jpeg, .png, or .gif file!')


class ArticleForm(FlaskForm):
  title = StringField('title', validators=[DataRequired(), Length(min=0, max=40)])
  image = StringField('image', validators=[DataRequired(), check_image])
  content = TextAreaField('content', validators=[DataRequired()])
  category = SelectField('category', choices=["Open Water", "Advanced","Rescue", "Master", "Gear"], validators=[DataRequired()])
  submit = SubmitField('submit')
