import { FaHeart } from "react-icons/fa6";
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
        icon: <BsBook size={25}/>
    },
    {   
        title: 'Counter',
        subtitle: 'Local State',
        path: '/dashboard/counter',
        icon: <BsClipboard2Plus   size={25}/>
    },
    {   
        title: 'Pokemons',
        subtitle: 'Ver listado de Pokemones',
        path: '/dashboard/pokemons',
        icon: <MdOutlineCatchingPokemon size={25}/>
    },
    {   
        title: 'Favorites',
        subtitle: 'Listado de Pokemones Favoritos',
        path: '/dashboard/favorites',
        icon: <FaHeart size={25}/>
    }
]