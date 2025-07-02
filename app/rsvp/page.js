import React from 'react';
import Navbar from '@/components/navbar';

export default function MainPage() {
    return (

        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-15">
        <Navbar />
        <p>please enter your phone number here </p>

    </div>
    )
}