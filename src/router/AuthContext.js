import {Auth} from 'aws-amplify';

export default class AuthContext {
    loggedIn;
    #instance;

    static isLoggedIn(){
        const instance = this.getInstance();
        return instance.loggedIn;
    }

    static getInstance(){
        if(this.instance === null) {
            this.instance = new AuthContext();
            this.loggedIn = false;
        }
        return this;
    }

    async signUp(params) {
        try {
            await Auth.signUp(params);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    async signIn(params) {
        try {
            await Auth.signIn(params);
            this.loggedIn = true;
        } catch (error) {
            console.log('error signing in', error);
        }
    }

    async signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

}