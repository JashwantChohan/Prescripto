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
            <h1>All Doctors</h1>
            <div className="">
                {
                    doctors.map((item, index) => {
                        return (
                            <div className="" key={index}>
                                <img src={item.image} alt="" />
                                <div className="">
                                    <p>{item.name}</p>
                                    <p>{item.speciality}</p>
                                    <div className="">
                                        <input type="checkbox" checked={item.available} />
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DoctorsList