import { initializeApp } from 'firebase/app';
import { addDoc, collection, getDocs, getFirestore, Timestamp } from 'firebase/firestore/lite';
import { IWorkCard } from './core/interfaces';

const app = initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const db = getFirestore(app);

export const getData = async () => {
	const testCol = collection(db, "users");
	const usersSnapshot = await getDocs(testCol);
	const usersList = usersSnapshot.docs.map((doc) => doc.data());

	return usersList;
};

export const addWorkCard = async (data: IWorkCard) => {

	try {


		const ref = await addDoc<IWorkCard>(collection(db, 'workCards'), {
			...data,
			timestamp: Timestamp.now()
		});

		console.log(`document with id ${ref.id} was added`);

		return ref;
	} catch (error) {
		console.log(error)
	}
}

export default {};
