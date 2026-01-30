import { createContext, useEffect, useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';

export const AppContext = createContext();

export const AppContextProvider = (props) => {

    const currencySymbol = '$';
    const BackendUrl = import.meta.env.VITE_BACKEND_URL

    const [doctors, setDoctors] = useState([])
    const [token, setToken] = useState()


    const getDoctorsData = async () => {
        try {
            const { data } = await axios.get(BackendUrl + '/api/doctor/list')
            if (data.success) {
                setDoctors(data.doctors)
                toast.success(data.message)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message)
        }
    }

    const value = {
        doctors,
        currencySymbol,
        token,
        setToken,
        BackendUrl,
    }

    useEffect(() => {
        getDoctorsData()
    }, [])

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}