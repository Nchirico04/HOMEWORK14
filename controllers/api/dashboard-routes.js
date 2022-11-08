const router = require('express').Router();
const res = require('express/lib/response');
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all posts for dashboard

// all of these routes are prefixed with '/api/dashboard'
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      user_id: req.session.user_id
    },
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
  Post.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      'content',
      'created_at',
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
    res.render('new-post');
});


router.post("/users", async (req, res)=>{
  try {
    const newUser=(User.create(req.body))
    res.status(200).json(newUser)
    
  } catch (error) {
    res.status(400).json(error)
  }
})

router.post("/login", (req, res) => {
  console.log(req.body);

  // Query the Database for the exisiting USERNAME
    // we should get an user back 

  // logic to signing in a user / password hashing 
  // add the user to req.session.user = userInfo
  

  res.status(200).json({ success: true })
  //res.redirect('/api/dashboard');
})



module.exports = router;