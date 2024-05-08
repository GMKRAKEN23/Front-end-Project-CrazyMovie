function NavBarBottom() {
    
    return (
        <div className="fixed bottom-0 z-50 w-full h-16 -translate-x-1/2 bg-white border left-1/2 border-gray-600 ">
            <div className="grid h-full grid-cols-3 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-white group">
                    <svg className="w-7 h-7 mb-1 text-black group-hover:text-orange-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                </button>
                <div className="flex items-center justify-center">
                    <button data-tooltip-target="tooltip-new" type="button" className="inline-flex items-center justify-center w-10 h-10 font-medium hover:bg-white rounded-full focus:outline-none">
                        <svg className="w-8 h-8 text-black hover:text-orange-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" strokeWidth="2">
                            <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                    </button>
                </div>
                <button data-tooltip-target="tooltip-profile" type="button" className="inline-flex flex-col items-center justify-center px-5">
                <svg  width="30px" height="30px" version="1.1" viewBox="0 0 12 12"  xmlns="http://www.w3.org/2000/svg"><g><path d="M9.3005371,6.5351563C8.4776001,7.4294434,7.3084106,8,6,8S3.5223999,7.4294434,2.6994629,6.5351563   C1.3145142,7.2350464,0.5,8.6131592,0.5,10.5V12h11v-1.5C11.5,8.6131592,10.6854858,7.2350464,9.3005371,6.5351563z" fill="#1D1D1B"/><circle cx="6" cy="4" fill="#1D1D1B" r="3.5"/></g></svg>
                    <span className="sr-only">Profile</span>
                </button>

            </div>
        </div>

    )
}

export default NavBarBottom