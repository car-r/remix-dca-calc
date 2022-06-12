import { Link } from "@remix-run/react"


export default function SideBar({ toggle, isOpen}) {
    return (
        <div className={
            isOpen ? `min-h-screen absolute z-50 w-full  transform transition duration-200 ease-in-out md:hidden `
            : `min-h-screen absolute z-50 w-full inset-y-0 transform -translate-y-full transition duration-300 ease-in-out md:hidden`
        }
        onClick={toggle}
        >
            <nav className="py-4 bg-white shadow-sm hover:cursor-pointer">
            <div className="flex flex-col px-4">
                <Link to='/' >
                    <p className="font-bold text-2xl p-2 cursor-pointer">DCA Calc</p>
                </Link>
                <div className="flex flex-col font-semibold">
                <Link  
                    to='/calculator/bitcoin'>
                    <p
                        className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300 cursor-pointer'
                    >
                        BTC Calculator
                    </p>
                </Link>
                <Link 
                    to='/calculator/stocks'>
                    <p
                        className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300 cursor-pointer'
                    >
                        Stock Calculator
                    </p>
                </Link>
                <Link 
                    to='/calculator/bitcoin'>
                    <p
                        className='p-2 rounded-md border border-white hover:bg-neutral-200 hover:ease-in-out hover:duration-300 cursor-pointer'
                    >
                        About
                    </p>
                </Link>
                </div>
            </div>
        </nav>
        </div>
    )
}