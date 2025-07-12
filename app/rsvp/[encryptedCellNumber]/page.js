'use client'
import React, {useState, useEffect} from "react";
import Navbar from "@/components/navbar";
import CryptoJS from "crypto-js";

export default function RSVP({params}) {
    const { encryptedCellNumber } = React.use(params)

    const subsDec = { "-": "+", "_": "/", "~": "=" };
    const cipherText = encryptedCellNumber.replace(/[-_~]/g, c => subsDec[c]);
    const decyptData = CryptoJS.AES.decrypt(cipherText, "ILoveSohel");
    const cellNumber = decyptData.toString(CryptoJS.enc.Utf8);

    const [rsvpFormFilled, setRsvpFormFilled] = useState(false);
    const [invitationName, setInvitationName] = useState("");
    const [fullName, setFullName] = useState("");
    const [potentialGuestCount, setPotentialGuestCount] = useState(0);
    const [totalGuestCount, setTotalGuestCount] = useState("Please Select Total Count");
    const [category, setCategory] = useState("solo");
    const [plusOne, setPlusOne] = useState();
    const [kidsAttend, setKidsAttend] = useState();
    const [canAttend, setCanAttend] = useState();
    const [disabled, setDisabled] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [invalidEntry, setInvalidEntry] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const apiResponse = await fetch("http://localhost:4000/post1", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({phone: cellNumber})
        })
        const serverResponse = await apiResponse.json()

        // set invitation name
        setInvitationName(serverResponse[0].invitation_name)

        // set category 
        if(serverResponse[0].count === 2) {
            setCategory("plusOne")
        } else if(serverResponse[0].count > 2) {
            setCategory("family")
            setPotentialGuestCount(serverResponse[0].count)
        }
        }
        fetchData();
    },[])

    const updateFullName = (e) => {
        setFullName(e.target.value)
    }

    const handleMainQuestion = (e) => { 
        setCanAttend(e.target.value === "true");
    }

    useEffect(() => {
        setDisabled(!canAttend)
    }, [canAttend])

    const handleGuestCount = (e) => {
        setTotalGuestCount(e.target.value)
    }

    const handlePlusOne = (e) => {
        setPlusOne(e.target.value === "true");
    }

    useEffect(() => {
        if(!category === "family") {
            setTotalGuestCount(plusOne ? 2 : 1);
        }
    }, [category, plusOne])

    const handleKidsQuestion = (e) => { 
        setKidsAttend(e.target.value === "true")
    }

    const toggleFormSubmit = async() => {
        if(fullName.length === 0 || canAttend === undefined)
        {
            setInvalidEntry(true);
        } else if(canAttend === true && ((category === "family" && totalGuestCount === "Please Select Total Count") || ((category == "plusOne") && plusOne === undefined) || kidsAttend === undefined))
        {
            setInvalidEntry(true);
        }
        else {
            const response = {
                cellNumber: cellNumber,
                fullName: fullName, 
                rsvp: canAttend, 
                totalAdultGuestCount: totalGuestCount,
                kids: kidsAttend
            }
    
            console.log("response submitted", response)
            setFormSubmitted(true);
            const apiResponse = await fetch("http://localhost:4000/post2", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(response)
            })

            const data = await apiResponse.json();
            console.log(data);
        }
    }
    
    
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
        <Navbar />

        <div className="grid text-[20px]">
            {rsvpFormFilled ? <p>You have already filled out your RSVP form. Please see details of event here:</p> :
                <>
                    {formSubmitted ? <><p>Thank you filling out the form!</p></> : <>
                    <p> Hello {invitationName}!</p>
                    <p className="text-center">Please fill out the form to RSVP to our event!</p>
                    <br></br>

                    <div className="grid gap-4"> 
                            <label className="col-start-1 row-start-1 content-center">Full Name: </label>
                            <input className="col-start-2 row-start-1 col-span-2 rounded-lg border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 text-base placeholder-gray-500 placeholder-italic shadow-sm focus:border-indigo-400 focus:ring-2 focus:ring-indigo-200 focus:outline-none"type="text" onChange={(e) => updateFullName(e) }></input>
                            
                            
                            <label className="col-start-1 row-start-2">Are you able to attend?</label>
                            <div className="col-start-2 row-start-2">
                                <input
                                    type="radio"
                                    name="attendOptions"
                                    value="true"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300"
                                    checked={canAttend === true}
                                    onChange={handleMainQuestion}
                                />
                                <span className="ml-2 text-gray-900">Yes</span>
                            </div>

                            <div className="col-start-3 row-start-2">
                                <input
                                    type="radio"
                                    name="attendOptions"
                                    value="false"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300 "
                                    checked={canAttend === false}
                                    onChange={handleMainQuestion}
                                />
                                <span className="ml-2 text-gray-900">No</span>
                            </div>

                            {category==="family" ?
                                <>
                                    <label className={`col-start-1 row-start-3 ${disabled ? 'opacity-50' : ''}`}>Including yourself, what is your total adult guest count? </label>
                                    <select onChange={handleGuestCount} disabled={disabled} className={`col-start-2 row-start-3 col-span-2 w-40 px-3 py-2 border border-black-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${disabled ? 'opacity-50' : ''}`}>
                                        <option>Please Select Total Count</option>
                                        {Array.from({length: potentialGuestCount}, (_,i) => i+1).map((x) => (
                                            <option key={x}>
                                                {x}
                                            </option>
                                        ))}
                                    </select>
                                </>: <>
                                    {category==="plusOne" ? 
                                        <>
                                            <label className={`col-start-1 row-start-3 ${disabled ? 'opacity-50' : ''}`}>Will you be bringing a plus one? </label>
                                            <div className="col-start-2 row-start-3">
                                                <input
                                                    type="radio"
                                                    name="plusOneOptions"
                                                    value="true"
                                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300"
                                                    disabled={disabled}
                                                    checked={plusOne === true}
                                                    onChange={handlePlusOne}
                                                />
                                                <span className="ml-2 text-gray-900">Yes</span>
                                            </div>

                                            <div className="col-start-3 row-start-3">
                                                <input
                                                    type="radio"
                                                    name="plusOneOptions"
                                                    value="false"
                                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300"
                                                    disabled={disabled}
                                                    checked={plusOne === false}
                                                    onChange={handlePlusOne}
                                                />
                                                <span className="ml-2 text-gray-900">No</span>
                                            </div> </> : <></>}
                                    </>}

                            <label className={`col-start-1 row-start-4 ${disabled ? 'opacity-50' : ''}`}>Will there be any children coming with you?</label>
                            <div className="col-start-2 row-start-4">
                                <input
                                    type="radio"
                                    name="kidsOptions"
                                    value="true"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300 "
                                    disabled={disabled}
                                    checked={kidsAttend === true}
                                    onChange={handleKidsQuestion}
                                />
                                <span className="ml-2 text-gray-900">Yes</span>
                            </div>

                            <div className="col-start-3 row-start-4">
                                <input
                                    type="radio"
                                    name="kidsOptions"
                                    value="false"
                                    className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-300 "
                                    disabled={disabled}
                                    checked={kidsAttend === false}
                                    onChange={handleKidsQuestion}
                                />
                                <span className="ml-2 text-gray-900">No</span>
                            </div>
                            
                    </div>

                    {invalidEntry ? <><p className="text-center text-red-600">Invalid Entry! Please fill all parts of the form that is required</p></> : <></>}
                    <br></br>
                    <button className="text-[20px] cursor-pointer border border-black-300 bg-white hover:bg-gray-200" onClick={toggleFormSubmit}>Submit</button>

                    </>}
            </>
            }
        </div>

                                    
    </div>
    )
}