const router = require('express').Router();
const passport = require('passport');
const express = require('express');
const {models: {User} } = require('../db/index.js')

router.use(express.json());
router.use(passport.initialize());
router.use(passport.session());
router.use(express.urlencoded({extended: true}))

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.User.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
});


router.get('/api/users', (req, res, next) => {
  User.findAll({attributes: ["id", "email"]})
    .then(user => res.send(user))
    .catch(next)
});

router.post('/api/users', (req, res, next) => {
  User.create(req.body)
    .then(user => res.status(201).send(user))
    .catch(next)
});

router.post('/api/login', (req, res, next) => {
  User.findOne({where:{email: req.body.email}})
    .then(user => {
      if (!user){
        res.status(401).send('Email is not correct or registered');
      } else if (!user.correctPassword(req.body.password, user)){
        req.status(401).send('Incorrect password');
      } else {
        req.login(user, err => (err ? next(err) : res.json(user)));
      }
    })
    .catch(next)
});

router.post('/api/register', (req, res, next)=>{
  User.create(req.body)
    .then(user => {
      req.session.user = user
      req.login(user, err => (err ? next(err) : res.json(user)))
    })
    .catch(err => {
      if(err.name === 'SequelizeUniqueConstraintError'){
        res.status(401).send('User already xists');
      } else {
        next(err)
      }
    })
});


router.post('/logout', (req, res) => {
  req.logout()
  req.session.destroy()
  res.redirect('/')
})


module.exports = router
