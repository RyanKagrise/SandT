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

    # db.session.add(article10)
    # db.session.add(article11)
    # db.session.add(article12)


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
