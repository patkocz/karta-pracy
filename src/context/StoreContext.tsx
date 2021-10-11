import React, { FC } from 'react';
import { IAppState } from '../core/interfaces';



export const StoreContext = React.createContext<IAppState>({});

export const StoreContextProvider: FC = ({children}) => {

	return (
		<StoreContext.Provider value={{}} >
			{children}
		</StoreContext.Provider>
	)
}
