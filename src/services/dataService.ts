import { addDoc, collection, doc, getDocs, Timestamp } from 'firebase/firestore/lite';
import { DBDocument } from '../core/enums';
import { IWorkCard } from '../core/interfaces';
import db from '../firebase';

const WorkCardsCollectionRef = () => collection(db, DBDocument.WorkCard);

export const addEmployee = async () => {

};

export const addCustomer = async () => {

}


export const getAllWorkCards = async (): Promise<IWorkCard[] | undefined> => {
	try {
		const snapshot = await getDocs(WorkCardsCollectionRef());

		return snapshot.docs.map(doc => doc.data());
	} catch (error) {
		console.log(error);
	}
}

export const addWorkCard = async (data: IWorkCard) => {
	try {
		return await addDoc<IWorkCard>(collection(db, 'workCards'), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
}
