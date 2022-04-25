from app.models import db, User, Article, Comment


# Adds a demo user, you can add other users here if you want
def seed_all():

    # user seeds

    demo = User(
        username='Demo', email='demo@aa.io', password='password')

    marnie = User(
        username='marnie', email='marnie@aa.io', password='password')

    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password')


    # article seeds

    article1 = Article(
        user_id=1, title='Beginner Need To Knows', image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010131059-australia-best-beaches-cossies-beach-cocos3.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Open Water')

    article2 = Article(
       user_id=1, title='Easy Shore Tips', image='https://dynaimage.cdn.cnn.com/cnn/q_auto,w_900,c_fill,g_auto,h_506,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181010112111-australia-best-beaches-tasmania-wineglass-bay-c-jason-charles-hill.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Open Water')

    article3 = Article(
       user_id=1, title='Drift With Ease', image='https://wpcdn.us-east-1.vip.tn-cloud.net/www.hawaiimagazine.com/content/uploads/2021/02/gettyimages-967082682-1024x680.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Advanced')

    article4 = Article(
       user_id=1, title='Navigating Night Dives', image='https://www.hawaiimagazine.com/content/uploads/2021/02/gettyimages-1126318486-scaled.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Advanced')

    article5 = Article(
       user_id=1, title='Wreck Diving For Dummies', image="https://obp-web-image-library.s3-us-west-2.amazonaws.com/Custom+Journeys/Hawaii's+Big+Island+%26+Maui/Hero+Images/BigIslandMaui_hawaii.jpg", content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Advanced')

    article6 = Article(
       user_id=1, title='Rescue Ready', image="https://obp-web-image-library.s3-us-west-2.amazonaws.com/Custom+Journeys/Hawaii's+Big+Island+%26+Maui/Hero+Images/BigIslandMaui_Maui.jpg", content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Rescue')

    article7 = Article(
       user_id=2, title='Buddy Not Breathing', image='https://twofishdivers.com/wp-content/uploads/2019/03/PADI-Rescue3.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Rescue')

    article8 = Article(
       user_id=2, title='Teaching Those Around Us', image='https://scubadivinglovers.com/wp-content/uploads/2020/08/A-Quick-Guide-to-Scuba-Diving-in-Crystal-River-Florida.jpg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Master')

    article9 = Article(
       user_id=2, title='Dive Buddy Checklists', image='https://cjdfarvg8e-flywheel.netdna-ssl.com/wp-content/uploads/2020/03/scuba-diving-in-florida-768x512.jpeg', content='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Erat imperdiet sed euismod nisi porta lorem. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Curabitur vitae nunc sed velit dignissim sodales ut. Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Enim tortor at auctor urna nunc id cursus. Scelerisque viverra mauris in aliquam sem fringilla ut morbi. Consequat interdum varius sit amet mattis vulputate enim nulla. Arcu felis bibendum ut tristique et egestas quis. Metus vulputate eu scelerisque felis imperdiet proin. Ornare aenean euismod elementum nisi quis eleifend quam adipiscing vitae. Urna nunc id cursus metus aliquam. Tellus orci ac auctor augue mauris. Donec et odio pellentesque diam. Lorem ipsum dolor sit amet consectetur adipiscing elit.', category='Master')


    #comment seeds

    comment1 = Comment(
       article_id=1, user_id=1, content='This was really helpful!')

    comment2 = Comment(
       article_id=1, user_id=2, content='Great advice for folks who are new!')

    comment3 = Comment(
       article_id=1, user_id=1, content='Definitely! I learned a lot from this!')

    comment4 = Comment(
       article_id=2, user_id=1, content='We dive from the shore a lot and this will be our new go to strategy!')

    comment5 = Comment(
       article_id=2, user_id=3, content='I would agree with the author! Great tips guys!')

    comment6 = Comment(
       article_id=2, user_id=2, content='Understanding the conditions is a pivotal part of the experience! Great advice!')

    comment7 = Comment(
       article_id=3, user_id=1, content='Awesome piece! Love the insight!')

    comment8 = Comment(
       article_id=3, user_id=2, content='I really love how you framed this concept. Keep up the good work!')

    comment9 = Comment(
       article_id=3, user_id=3, content='Does anyone know of any additional resources I should check out along these lines?')

    comment10 = Comment(
       article_id=4, user_id=3, content='Great piece!')

    comment11 = Comment(
       article_id=4, user_id=2, content='This is an essential piece a lot of people do not realize!')

    comment12 = Comment(
       article_id=4, user_id=1, content='I wonder if my dive buddy knows he has been doing it all wrong lol')

    comment13 = Comment(
       article_id=4, user_id= 2, content='Thanks for the helpful tidbits!')

    comment14 = Comment(
       article_id=5, user_id=2, content='I have actually experienced this before! Glad to see awareness is being brought forward!')

    comment15 = Comment(
       article_id=5, user_id=1, content='I had something similar happen in Aruba, thank god I knew what to do!')

    comment16 = Comment(
       article_id=5, user_id=3, content='Crazy to me that some ppl still do not do these basic safety steps...')

    comment17 = Comment(
       article_id=6, user_id=1, content='As a new diver this piece was very helpful!')

    comment18 = Comment(
       article_id=6, user_id=2, content='I need to get a refresher and get back in the water!')

    comment19 = Comment(
       article_id=7, user_id=3, content='I amm gonna send this article to my friends, great informational article!')

    comment20 = Comment(
       article_id=8, user_id=1, content='Great piece!')


    # users add/commit

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


    # articles add/commit

    db.session.add(article1)
    db.session.add(article2)
    db.session.add(article3)
    db.session.add(article4)
    db.session.add(article5)
    db.session.add(article6)
    db.session.add(article7)
    db.session.add(article8)
    db.session.add(article9)

    db.session.commit()
    # db.session.add(article10)
    # db.session.add(article11)
    # db.session.add(article12)


   # comments add/commit
    db.session.add(comment1)
    db.session.add(comment2)
    db.session.add(comment3)
    db.session.add(comment4)
    db.session.add(comment5)
    db.session.add(comment6)
    db.session.add(comment7)
    db.session.add(comment8)
    db.session.add(comment9)
    db.session.add(comment10)
    db.session.add(comment11)
    db.session.add(comment12)
    db.session.add(comment13)
    db.session.add(comment14)
    db.session.add(comment15)
    db.session.add(comment16)
    db.session.add(comment17)
    db.session.add(comment18)
    db.session.add(comment19)
    db.session.add(comment20)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_all():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE articles RESTART IDENTITY CASCADE;')
    db.session.execute('TRUNCATE comments RESTART IDENTITY CASCADE;')
    db.session.commit()
