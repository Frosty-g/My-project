import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from './models/userModels.js';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;
const router = express.Router();
const SECRET_KEY = "Frosty_Secret";

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));
app.use(express.json());

app.use("/", router);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});


// Connect to MongoDB
mongoose.connect('mongodb+srv://Frosty:Glaineamoni@cluster1.ihwj6th.mongodb.net/?appName=Cluster1')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log("MongoDB connection error: ", err.message));

// User Registration
router.post('/register', async (req, res) => {
    const { name, email, password } =req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', name: newUser.name });
});

// User Login
router.post('/login', async (req, res) => {
    const { email, password } =req.body;
    const user = await User.findOne({ email });
    if (!user) res.status(404).json({ message: 'User not found' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: "Login successful", token, name: user.name });
});

// Protected Route
router.get('/profile' , (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(403).json({ message: 'No token' });
    const token = authHeader.split(' ')[1];

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(401).json({ message: 'Invalid token' });
        res.json({ message: 'Access Granted', user });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

export default router;