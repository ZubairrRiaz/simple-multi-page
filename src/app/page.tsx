import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-slate-300 h-[600px] flex flex-col justify-center items-center">
      <h1 className="font-bold text-3xl text-center">Top 4 Famous Quotes By Famous Peoples.</h1>
      <Link href={'/page1'}><button className="p-2 bg-blue-800 text-white mt-4">Click Here</button></Link>
      <br />
      <p>To Watch Quotes</p>
    </div>
  );
}
