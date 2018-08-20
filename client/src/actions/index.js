import { TOGGLE_AUTH, FETCH_USERS, ADD_USER, DELETE_USER, SIGN_IN_USER } from './types';
import axios from 'axios';


export const userSignIn = (user, callback) => {

	const sigInUserResponse = axios
	.post('/api/signin', { ...user })
	.then(res => {
		console.log(res.data);
		callback(res.data.msg);
		return res;
	})

	return {
		type: SIGN_IN_USER,
		payload: sigInUserResponse
	};
}


// Deleting Single User from Database
export const deleteUser = (userId, callback) => {

	const deleteUserResponse = axios
	.delete(`/api/deleteuser/${userId}`)
	.then(res => {
		console.log(res.data)
		callback(res.data.msg);
	})

	return {
		type: DELETE_USER,
		payload: deleteUserResponse
	}
}


// Adding New User
export const addUser = (user, callback) => {

	// start storing user in database
	const userResponse = axios
	.post('/api/adduser', { ...user })
	.then(res => { 
		callback(res.data.msg); 
		console.log(res.data);
	});

	return {
		type: ADD_USER,
		payload: userResponse
	}
}


// Toggle Authentication
export const toggleAuthentication = (authState) => {
	return {
		type: TOGGLE_AUTH,
		payload: authState
	}
}


// Fetching Emails
export const fetchUsers = () => {

	// const response = axios.get('https://jsonplaceholder.typicode.com/users')
	const response = axios.get('/api/users')

	return {
		type: FETCH_USERS,
		payload: response
	};
}