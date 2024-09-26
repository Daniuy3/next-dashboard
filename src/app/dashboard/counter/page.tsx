import { CartCounter } from "@/app/components/shoppingCart/index.";

export const metadata = {
  title: "Counter",
  description: "Counter page",
};

export default function CounterPage  () {
  
  return (
    <main className="flex flex-col items-center justify-center w-full h-full">
        <span className="font-bold">Productos en el carrito</span>
        <CartCounter value={20} />
    </main>
  )
}

