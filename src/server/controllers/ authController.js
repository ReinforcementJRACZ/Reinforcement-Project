//includes authentication logic- user registration, login, and Google OAuth handling
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// Below is assuming User is exported from models.js
import User from '../models/models.js';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Signup logic
export const signup = async (req, res) => {
	const { username, email, password } = req.body;

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser)
			return res.status(400).json({ message: 'User already exists.' });

		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({
			username,
			email,
			password: hashedPassword,
		});

		res
			.status(201)
			.json({ message: 'User created successfully!', user: newUser });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Internal server error.', error: err.message });
	}
};

// Login logic
export const login = async (req, res) => {
	const { email, password } = req.body;

	try {
		const user = await User.findOne({ email });
		if (!user) return res.status(404).json({ message: 'User not found.' });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch)
			return res.status(400).json({ message: 'Invalid credentials.' });

		const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
		res.json({ token, user });
	} catch (err) {
		res
			.status(500)
			.json({ message: 'Internal server error.', error: err.message });
	}
};

// Google OAuth callback
export const googleCallback = (req, res) => {
	// User information from Passport.js
	const { user } = req;
	res.status(200).json({
		message: 'Successfully authenticated with Google',
		user,
	});
};
