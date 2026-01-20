import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

    const { atoken, doctors, getAllDoctors } = useContext(AdminContext)

    useEffect(() => {
        if (atoken) {
            getAllDoctors()
            
        }
    }, [atoken])

    return (
        <div>
            doctor list
        </div>
    )
}

export default DoctorsList
