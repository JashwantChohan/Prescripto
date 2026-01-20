import axios from 'axios';
import { createContext, useState } from 'react';

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [atoken, setAtoken] = useState(() => localStorage.getItem('aToken') || '')
    const [doctors, setDoctors] = useState([])
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        const doctors = await axios.get(backendUrl + '/api/admin/all-doctors')

    }

    const value = {
        atoken,
        setAtoken,
        backendUrl
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;