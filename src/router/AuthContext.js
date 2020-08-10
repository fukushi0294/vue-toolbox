import {Auth} from 'aws-amplify';

const AuthContext = {
    loggedIn: false,
    signUp: async function(params) {
        try {
            await Auth.signUp(params);
        } catch (error) {
            console.log('error signing up:', error);
        }
    },
    signIn: async function(params) {
        try {
            await Auth.signIn(params);
            this.loggedIn = true;
        } catch (error) {
            console.log('error signing in', error);
        }
    },
    signOut: async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }
};

export default AuthContext;