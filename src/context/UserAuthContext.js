/** @format */

import { createContext, useContext, useState } from 'react';

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
	const [user, setUser] = useState('');

	function contact(data) {
		setUser(data);
	}

	return (
		<userAuthContext.Provider value={{ user, contact }}>
			{children}
		</userAuthContext.Provider>
	);
}

export function useUserAuth() {
	return useContext(userAuthContext);
}
