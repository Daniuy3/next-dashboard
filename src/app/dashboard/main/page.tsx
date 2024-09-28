import { SimpleWidget } from "@/app/components";

export const metadata = {
  title: "DashBoard",
  description: "DashBoard page",
};

export default function MainPage() {
  return (
    <div className="text-black ml-2">
      <div className="mt-2 ">
        <h1 className=" text-4xl font-bold" style={{lineHeight: 1}}>
          Dash<span className="text-indigo-500" >Board</span>
        </h1>
        <p style={{lineHeight:1}} className="font-semibold">Informacion General</p>
      </div>
      <div className="flex flex-wrap p-2 space-y-3">
        <SimpleWidget />
      </div>
    </div>
  );
}
