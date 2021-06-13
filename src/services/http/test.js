/**
 * Services for testing
 *
 * Use https://reqres.in/api/
 */
import { Http } from './index';

// Get Users
export const getUsers = () => Http.get('users?delay=3');
