import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify'

export const AdminContext = createContext();

const AdminContextProvider = ({ children }) => {
    const [atoken, setAtoken] = useState(() => localStorage.getItem('atoken') || '')
    const [doctors, setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const getAllDoctors = async () => {
        try {
            const { data } = await axios.post(backendUrl + '/api/admin/all-doctors', {}, {
                headers: {
                    Authorization: `Bearer ${atoken}`
                }
            })
            if (data.success) {
                setDoctors(data.doctors)
                console.log(data.doctors)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const changeAvailablity = async (docId) => {
        try {
            const { data } = await axios.post(backendUrl + 'api/admin/change-availablity', { docId }, {
                headers: {
                    Authorization: `Bearer ${atoken}`
                }
            })
            if (data.success) {
                toast.success(data.message)
                getAllDoctors()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
        }
    }

    const value = {
        atoken,
        setAtoken,
        backendUrl,
        doctors,
        getAllDoctors,
        changeAvailablity,
    }

    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminContextProvider;