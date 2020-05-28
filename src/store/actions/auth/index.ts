import { signInSchema, signUpSchema } from '../../schemas/auth';
import { Credentials, NewUser } from '../../../types';

export const signIn = (credentials: Credentials) => {
  // return (dispatch, getState, { getFirebase }) => {
  //   const { error } = signInSchema.validate(credentials);
  //   if (error) {
  //     dispatch({ type: 'SIGN_IN_ERROR', errorMessage: error.message })
  //     return;
  //   }
  //   const firebase = getFirebase();
  //   firebase.auth().signInWithEmailAndPassword(
  //     credentials.emailAddress,
  //     credentials.password
  //   ).then(() => {
  //     dispatch({ type: 'SIGN_IN_SUCCESS' })
  //   }).catch((error: Error) => {
  //     dispatch({ type: 'SIGN_IN_ERROR', errorMessage: error.message })
  //   })
  // }
};

export const signOut = () => {
  // return (dispatch, getState, { getFirebase }) => {
  //   const firebase = getFirebase();
  //   firebase.auth().signOut().then(() => {
  //     dispatch({ type: 'SIGN_OUT_SUCCESS' })
  //   })
  // }
};

export const signUp = (newUser: NewUser) => {
  // return (dispatch, getState, { getFirebase, getFirestore }) => {
  //   const { error } = signUpSchema.validate(newUser);
  //   if (error) {
  //     dispatch({ type: 'SIGN_UP_ERROR', errorMessage: error.message })
  //     return;
  //   }
  //   const firebase = getFirebase();
  //   const firestore = getFirestore();
  //   firebase.auth().createUserWithEmailAndPassword(
  //     newUser.emailAddress,
  //     newUser.password
  //   ).then((response) => {
  //     return firestore.collection('users').doc(response.user.uid).set({
  //       name: newUser.name,
  //     })
  //   }).then(() => {
  //     dispatch({ type: 'SIGN_UP_SUCCESS' })
  //   }).catch((error: Error) => {
  //     dispatch({ type: 'SIGN_UP_ERROR', error })
  //   })
  // }
};
