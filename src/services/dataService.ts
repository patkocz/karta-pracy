import { collection, doc, getDocs } from 'firebase/firestore/lite';
import { DBDocument } from '../core/enums';
import { IWorkCard } from '../core/interfaces';
import { db } from '../firebase';


export const addEmployee = async () => {

};

export const addCustomer = async () => {

}

export const getAllWorkCards = async () => {
	try {
		const coll = DBDocument.WorkCard.toString();
		console.log(coll)
		const snapshot = await getDocs(collection(db, coll));

		console.log(snapshot)

		return snapshot.docs.map(doc => doc.data() as IWorkCard);
	} catch (error) {
		console.log(error);
	}
}
