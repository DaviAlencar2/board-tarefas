import Link from "next/link";
import {FaUserCircle} from "react-icons/fa";

export default function Header() {

    return(
        <header className="bg-black text-white pt-6">
            <nav>
                <ul className="flex justify-evenly items-center">
                    <Link href={"/"}>
                        <li> Tarefas➕</li>
                    </Link>
                    
                    <li className="border-white p-2 rounded-md ">
                       
                        <button className="flex items-center gap-2">
                            <span><FaUserCircle className="text-xl"/></span>
                            Login
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}