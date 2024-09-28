"use client";

import { IoCafeOutline } from "react-icons/io5";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {

  const {count} = useAppSelector(state => state.counter)
  
  return (
    <div className="flex flex-wrap p-2 space-y-3">
      <SimpleWidget
        label="Contador"
        subtitle="Productos Agregados"
        icon={<IoCafeOutline size={50} />}
        title={count.toString()}
        href="/dashboard/counter"
      />
    </div>
  );
}

