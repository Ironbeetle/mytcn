import Image from "next/image";
import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
    <div className="w-screen h-full overflow-scroll flex flex-col items-center justify-center bg-green-800">
      <Dashboard />
    </div>
  );
}
