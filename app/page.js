import HomeComponent from "@/components/homeComponent";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-15">
      <Navbar></Navbar>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <HomeComponent />

        <div className="flex gap-4 items-center flex-col sm:flex-row">

        </div>
      </main>
      {/* <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <p>Test Footer</p>
      </footer> */}
    </div>
  );
}
