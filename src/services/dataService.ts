import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp } from 'firebase/firestore/lite';
import { DBDocument } from '../core/enums';
import { ICustomer, IEmployee, IWorkCard } from '../core/interfaces';
import db from '../firebase';

const WorkCardsCollectionRef = () => collection(db, DBDocument.WorkCard);

export const getAllWorkCards = async (): Promise<IWorkCard[] | undefined> => {
	try {
		const snapshot = await getDocs(WorkCardsCollectionRef());

		return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
	} catch (error) {
		console.log(error);
	}
}

export const getWorkCardById = async (id: string): Promise<IWorkCard | undefined> => {
	const docRef = doc(db, DBDocument.WorkCard, id);

	try {
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			return { id: docSnap.id, ...docSnap.data() }
		} else {
			console.log(`No document with ID: ${id}`)
		}
	} catch (error) {
		console.error(error);
	}
}

export const addWorkCard = async (data: IWorkCard) => {

	try {
		return await addDoc(collection(db, 'workCards'), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
}

export const addEmployee = async (data: IEmployee) => {
	try {
		return await addDoc(collection(db, DBDocument.Employee), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
};



export const addCustomer = async (data: ICustomer) => {
	try {
		return await addDoc(collection(db, DBDocument.Employee), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
}
