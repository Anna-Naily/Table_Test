import firebase from 'firebase';

import { ref, onUnmounted } from 'vue';
const config = {
  apiKey: 'AIzaSyDbLTCWPlxl9qjrWZHa1Ya_5-PqeAALuSk',
  authDomain: 'owndatabase-b8213.firebaseapp.com',
  databaseURL: 'https://owndatabase-b8213-default-rtdb.firebaseio.com',
  projectId: 'owndatabase-b8213',
  storageBucket: 'owndatabase-b8213.appspot.com',
  messagingSenderId: '799039618835',
  appId: '1:799039618835:web:bc974ab2901872e69fa4e6',
  measurementId: 'G-2HQ0GEC8J8'
};

const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();

const usersCollection = db.collection('users');

export const createUser = user => {
  return usersCollection.add(user);
};

export const getUser = async id => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).update(user);
};

export const deleteUser = id => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot(snapshot => {
    users.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(close);
  return users;
};
