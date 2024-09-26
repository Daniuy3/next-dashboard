
import { BsBook, BsClipboard2Plus  } from "react-icons/bs";
import { MdOutlineCatchingPokemon } from "react-icons/md";

interface SideBarMenuItemProps {
    title: string,
    subtitle?:string,
    path: string
    icon: JSX.Element
}

export const pages : SideBarMenuItemProps[] = [
    {
        title: 'DashBoard',
        subtitle: 'Data Overview',
        path: '/dashboard/main',
        icon: <BsBook/>
    },
    {
        title: 'Counter',
        subtitle: 'Local State',
        path: '/dashboard/counter',
        icon: <BsClipboard2Plus  />
    },
    {
        title: 'Pokemons',
        subtitle: 'Ver listado de Pokemones',
        path: '/dashboard/pokemons',
        icon: <MdOutlineCatchingPokemon/>
    }
]