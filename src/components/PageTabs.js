const PageTabs = () => {
    return (
        <div>
            <ul className='flex items-center text-white capitalize text-sm px-4 py-1 text-gray-400 bg-gray-800 sm:bg-gray-700 bg-opacity-50 sm:bg-opacity-70 mt-10 cursor-pointer'>
                <li className='px-4 py-1 hover:text-gray-300'>overviews</li>
                <li className='px-4 py-1 hover:text-gray-300'>repositories</li>
                <li className='px-4 py-1 hover:text-gray-300'>projects</li>
                <li className='px-4 py-1 hover:text-gray-300'>packages</li>
            </ul>
            
        </div>
    )
}

export default PageTabs
