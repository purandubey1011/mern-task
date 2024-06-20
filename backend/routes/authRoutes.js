const express = require('express');
const router = express.Router();
const {register,login,logout,getUser,programCards,carddetail} = require('../controllers/authController');

router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);
router.get('/user', getUser);
router.post('/program-card', programCards);
router.post('/program-card/:id', carddetail);

module.exports = router;
