const User = require('../models/User');
// const bcrypt = require('bcryptjs');
const passport = require('passport');

let programcards = [
    {
        id:'1',
        poster:"https://imgs.search.brave.com/FN6dd6xaUvMb7yVRniOZ4qi72XIe-3BcpKiSEH-p1uY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5yZWFscHl0aG9u/LmNvbS9tZWRpYS9y/ZWFscHl0aG9uLWxv/Z28uNjU1ZGEwODFi/ZGYxLnBuZw",
        title:"100 Days of Code: The Complete Python Pro BootcampMaster Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!Rating: 4.7 out of 5303417 reviews58.5 total hours638 lecturesAll LevelsCurrent price: ₹499Original price: ₹3,099",
        description:"Master Python by building 100 projects in 100 days. Learn data science, automation, build websites, games and apps!" ,
        rating:4.7,
        price:"499",
        author:"john doe",
        language:"English"
    },
    {
        id:'2',
        poster:"https://imgs.search.brave.com/rrY3RbN1yRgp_byMh1TBhPQmiBB8YD29IFbmkSXtsEk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA0LzE4LzY3LzYz/LzM2MF9GXzQxODY3/NjMyNF9oNnV0RlFX/Z2dxd2tEaTdHZ1NK/V3NtUzh6Wmg3a0Ni/SS5qcGc",
        title:"The Complete Python Bootcamp From Zero to Hero in Python",
        description:"Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games" ,
        rating:4.3,
        price:"399",
        author:"anney doe",
        language:"English"
    },
    {
        id:'3',
        poster:"https://imgs.search.brave.com/T_aIAIfycH8QOWS9TqOkQoHTdDAAw-kAKeKdKcsevDk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/Z2Vla3dpcmUuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDI0/LzA0L2F3cy1zaWdu/LmpwZw",
        title:"Ultimate AWS Certified Solutions Architect Associate SAA-C03",
        description:"Full Practice Exam | Learn Cloud Computing | Pass the AWS Certified Solutions Architect Associate Certification SAA-C03!" ,
        rating:4.9,
        price:"699",
        author:"stew swith",
        language:"English"
    },

]

// Register new user
exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        user = new User({
            username,
            email,
            password,
        });
        await user.save();
        res.send('User registered successfully');
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// Login user
exports.login = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) throw err;
        if (!user) return res.status(400).json({ msg: 'Invalid credentials' });
        req.logIn(user, (err) => {
            if (err) throw err;
            console.log(user)
            res.json({ msg: 'Logged in successfully', user });
        });
    })(req, res, next);
};

// Logout user
exports.logout = (req, res) => {
    req.logout(() =>{

        res.json({ msg: 'Logged out successfully' });
    });
};

// Get user data
exports.getUser = (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: 'No user authenticated' });
    }
    res.json(req.user);
};
// Get program card
exports.programCards = (req, res) => {
       
    res.json(programcards);
};

exports.carddetail = (req,res)=>{
    let card = programcards[req.params.id-1]
    res.json({card,user:req.user})
}
