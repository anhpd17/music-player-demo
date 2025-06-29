import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
import app from "./firebaseConfig.js";

// Initialize Firebase Authentication
const auth = getAuth(app);

// Google Sign In
export const signInWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        // Return user information
        return {
            user: result.user,
            success: true,
        };
    } catch (error) {
        console.error("Error signing in with Google: ", error);
        return {
            error: error.message,
            success: false,
        };
    }
};

// Email/Password Registration
export const registerWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );
        return {
            user: userCredential.user,
            success: true,
        };
    } catch (error) {
        console.error("Error registering with email/password: ", error);
        return {
            error: error.message,
            success: false,
        };
    }
};

// Email/Password Sign In
export const signInWithEmailPassword = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return {
            user: userCredential.user,
            success: true,
        };
    } catch (error) {
        console.error("Error signing in with email/password: ", error);
        return {
            error: error.message,
            success: false,
        };
    }
};

// Sign Out
export const signOutUser = async () => {
    try {
        await signOut(auth);
        return {
            success: true,
        };
    } catch (error) {
        console.error("Error signing out: ", error);
        return {
            error: error.message,
            success: false,
        };
    }
};
