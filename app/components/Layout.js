import Footer from "./Footer";
import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="flex flex-col mx-auto bg-neutral-100 min-h-screen">
            <NavBar toggle={toggle} isOpen={isOpen}/>
            <SideBar toggle={toggle} isOpen={isOpen}/>
                {children}
            <Footer />
        </div>
    )
}