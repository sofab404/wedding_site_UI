import React from "react";
import Image from "next/image";

export default function Details() {
    return (
        <>
        <div className="grid md:grid-cols-2 gap-1">
                <Image
                height={270}
                width={600}
                src="/images/details_page_photo.png"
                alt="Eid Pic"
                ></Image>

            <div className="content-center">
                <p className="text-[33px] text-center">Our Reception Details</p>
                <br></br>
                <div className="text-[21px] text-center">
                    <p>Terrace on the Park</p>
                    <p>5211 111th Street Flushing Meadows Park</p>
                    <p>Queens, NY 11368</p>
                </div>

                <br></br>
                <div className="text-[21px] text-center">
                    <p>Parking located at Venue</p>
                    <p>For Directions to venue, text “TOP” to 208-216-1688</p>
                </div>

                <br></br>
                <div className="text-[21px] text-center">
                    <p>Dress Code: Light pastal colors</p>
                </div>

                <br></br>
                <div className="text-[24px] text-center">
                    Check back again for event schedule!
                </div>

            </div>

        </div>
        </>
    )
}