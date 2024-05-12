function SearchBar() {
    return (
        <form className="max-w-lg mx-auto mt-10">
            <div className="relative w-3/4 mx-auto">
                <input 
                type="search" 
                className="block p-2.5 w-full regular tracking-wider z-20 text-base bg-white rounded-lg border bg-white placeholder-black" 
                placeholder="Search your best movie" 
                required 
                />
                <button type="submit" className="absolute top-0 end-0 p-2.5 text-white font-medium h-full rounded-e-lg  hover:bg-orange-700 focus:outline-none bg-orange-600">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </div>
        </form>
    )

}

export default SearchBar;
