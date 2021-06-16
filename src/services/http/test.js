/**
 * Services for testing
 *
 * Use https://reqres.in/api/
 */
import { Http } from './index';

// Get Users
export const getUsers = (page = 1) => Http.get(`users?page=${page}&delay=3`);

// Get User
export const getUser = () => Http.get('users/2?delay=3');
