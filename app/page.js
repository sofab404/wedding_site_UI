"use client"
import HomeComponent from "@/components/homeComponent";
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import "./globals.css";

export default function Home() {
  return (

<>

      <main className="flex flex-col gap-[10px] items-center">
        <p className="text-center text-[18px] md:text-[22px] pb-2">Countdown To Our Love Celebration! </p>
            <FlipClockCountdown to={new Date("2025-10-05T18:00:00").getTime()}/>


        <div className="border-2 md:border-none  border-purple-400">
            <HomeComponent />
            <br></br>
            <div className="flex gap-4 flex-col border-2 border-purple-400 md:border-none text-center">
            <span className="">October 5th, 2025 at 6pm</span>
            </div>
        </div>
      </main>
      </>
  );
}

// Deployment