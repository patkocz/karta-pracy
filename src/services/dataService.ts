import { addDoc, collection, doc, getDoc, getDocs, setDoc, Timestamp, updateDoc } from 'firebase/firestore/lite';
import { DocumentType } from '../core/enums';
import { ICustomer, IEmployee, IWorkCard } from '../core/interfaces';
import db from '../firebase';

const WorkCardsCollectionRef = () => collection(db, DocumentType.WorkCard);

export const getAllWorkCards = async (): Promise<IWorkCard[] | undefined> => {
	try {
		const snapshot = await getDocs(WorkCardsCollectionRef());

		return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
	} catch (error) {
		console.log(error);
	}
}

export const getWorkCardById = async (id: string): Promise<IWorkCard | undefined> => {
	const docRef = doc(db, DocumentType.WorkCard, id);

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
	const customer = data.customer;

	try {
		if (customer) {

			customer.id
				? await updateCustomer(customer)
				: await addCustomer(customer);
		}

		return await addDoc(collection(db, 'workCards'), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
}

export const updateWorkCard = async (data: IWorkCard) => {
	if (data.id) {
		const docRef = doc(db, DocumentType.WorkCard, data.id);

		try {
			await updateDoc(docRef, { ...data });
		} catch (error) {
			console.log(error);
		}
	}
}

export const addEmployee = async (data: IEmployee) => {
	try {
		return await addDoc(collection(db, DocumentType.Employee), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
};

export const updateEmployee = async (data: IEmployee) => {

	if (data.id) {
		const docRef = doc(db, DocumentType.Employee, data.id);

		try {
			await updateDoc(docRef, { ...data })
		} catch (error) {
			console.log(error)
		}
	}
};



export const addCustomer = async (data: ICustomer) => {
	try {
		return await addDoc(collection(db, DocumentType.Employee), {
			...data,
			timestamp: Timestamp.now()
		});
	} catch (error) {
		console.log(error)
	}
}

export const updateCustomer = async (data: ICustomer) => {
	if (data.id) {
		const docRef = doc(db, DocumentType.Customer, data.id);

		try {
			await updateDoc(docRef, { ...data })
		} catch (error) {
			console.log(error)
		}
	}
}
