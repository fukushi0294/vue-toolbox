import {Auth} from "aws-amplify";

export default {
    namespaced: true,
    state: {
        authenticated: false,
        username: null,
        userId: '',
        token: ''
    },
    mutations: {
        isAuthenticated(state, data) {
            state.authenticated = data;
        },
        setUser(state, cognitoUser) {
            state.username = cognitoUser.username;
        }
    },
    actions: {
        signUp: async function (context, payload) {
            try {
                const result = await Auth.signUp(payload);
            } catch (error) {
                console.log('error signing up:', error);
            }
        },
        signIn: async function ({commit}, payload) {
            try {
                await Auth.signIn(payload);
            } catch (error) {
                console.log('error signing in', error);
            }

            const credentials = await Auth.currentCredentials();
            const authenticated = credentials.authenticated;
            commit("authenticated", authenticated);
            if (authenticated) {
                commit("userId", credentials.identityId);
                commit("token", credentials.sessionToken);
            }
        },
        signOut: async function signOut() {
            try {
                await Auth.signOut();
            } catch (error) {
                console.log('error signing out: ', error);
            }
        }
    }
}