import HomeComponent from "@/components/homeComponent";
import Navbar from "@/components/navbar";

export default function Home() {
  return (

      <main className="flex flex-col gap-[32px] border-2 row-start-2 items-center md:border-none sm:items-start">
        <HomeComponent />

        <div className="flex gap-4 w-full items-center flex-col border-2 md:border-none flex-row">

        </div>
      </main>

  );
}
