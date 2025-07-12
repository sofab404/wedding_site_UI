'use client'
import React, {useEffect, useState} from 'react';
import Navbar from '@/components/navbar';
import { useRouter } from 'next/navigation';
import CryptoJS from "crypto-js";

export default function MainPage() {
    const router = useRouter();
    const [cellNumber, setCellNumber] = useState("");
    const [routeToPage, setRouteToPage] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("") 
    const [invalidResponse, setInvalidResponse] = useState(false);
    const [invalidCell, setInvalidCell] = useState(false);

    const toggleRoute = async() => {
        const regex = /^\d+$/;
        if(!regex.test(cellNumber)) {
            setInvalidResponse(true)
            setRouteToPage(false)
        } else {
            const apiResponse = await fetch("http://localhost:4000/post1", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({phone: cellNumber})
            })
            const serverResponse = await apiResponse.json()
            console.log(serverResponse)

            if(serverResponse.length > 0 || serverResponse.message)
            {
                setRouteToPage(true)
            }
            else{
                setInvalidResponse(false)
                setInvalidCell(true)
            }

            }
        }

    

    const updateCellNumber = (e) => {
        setCellNumber(e.target.value)
    }

    useEffect(() => {
        if(!routeToPage) {
            return
        }
        else {
            if(!(cellNumber.length === 0)) {
                setLoadingMessage("Loading your details...")
                

                // encrypting cell number
                const subsEnc = { "+": "-", "/": "_", "=": "~" };
                const encryptedCell = CryptoJS.AES.encrypt(cellNumber, "ILoveSohel").toString();
                const cipher = encryptedCell.replace(/[+/=]/g, c => subsEnc[c])

                router.replace(`/rsvp/${cipher}`)
            }
        }
    }, [router, routeToPage])
    return (

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-15">
        <Navbar />

        <div className='grid'>
        <label className='text-[20px] text-center'>Please Enter Your Phone Number for RSVP!</label> <br></br>
        <input className="rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-base placeholder-gray-500 placeholder-italic shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:outline-none text-center" 
            type="tel" 
            required
            onChange={(e) => updateCellNumber(e)}>
        </input>
        {invalidResponse ? <p className='text-red-600 text-center'>Please enter phone number with only digits and no dashes!</p>: <></>}
        {invalidCell ? <p className='text-red-600 text-center'>Invalid Entry! Number does not exist in our database. <br></br>Please try another number</p>: <></>}
        
            
        <br></br>
        <button className="text-[20px] cursor-pointer border border-black-300 bg-white hover:bg-gray-200" onClick={toggleRoute}>Enter</button>
        <p className='text-center'>{loadingMessage}</p>
        </div>

    </div>
    )
}