import Image from "next/image"
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <header>
{/* Top nav */}
        <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
            <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                <Image 
                src=' https://links.papareact.com/f90'
                width={150}
                height={40}
                objectFit="contain"
                className='cursor-pointer'
                />
            </div>

            {/* Search */}
            <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500" >
                <input className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4" type="text"/> 
                <SearchIcon className="h-12 p-4"/>
            </div>
            {/* right */}
            <div className="text-white flex items-center test-xs space-x-6 mx-6 whitespace-nowrap">
                <div className="link">
                    <p>Hello Hamza Ibrahim</p>
                    <p className="font-extrabold md:text-sm"> Account & Lists</p>
                </div>

                <div className="link">
                    <p>Returns</p>
                    <p className="font-extrabold md:text-sm">& Orders</p>
                </div>
                <div className="relative link flex items-center">
                {/* <ShoppingCartIcon h-10 /> */}
                {/* added svg cos "flex wasnt working on shoppingcart" */}
                <svg class="h-10 w-10 "> <ShoppingCartIcon h-10 /> </svg> 
                <p className="hidden md:inline font-extrabold md:text-sm mt-2">Basket</p>
                </div>
            </div>
        </div>

{/* Bottom nav */}
        <div>
            
        </div>
        </header>
    )
}

export default Header