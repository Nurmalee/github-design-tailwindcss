import { StarIcon } from '@heroicons/react/outline'

const Repository = ({title, desc, majorLang}) => {
    return (
        <div className='p-4 border border-solid border-gray-100 border-opacity-20 rounded-md bg-gray-800 sm:bg-transparent bg-opacity-50'>
            <h1 className='text-sm font-medium text-blue-400 mb-3 cursor-pointer hover:underline'>{title}</h1>

            <p className='text-xs text-gray-400'>{desc}</p>

            <h2 className='text-sm text-gray-400 flex items-center mt-5 '> 
                <span className='flex items-center pr-4'>
                    <p className='h-3 w-3 rounded-full mr-1 bg-yellow-300'></p>
                    <p className='text-xs capitalize'>{majorLang}</p>
                </span>
                <span className='flex items-center hover:text-blue-400 cursor-pointer'> 
                    <StarIcon className='h-4 pr-1' /> 
                    <p className='text-xs'>1</p>
                </span>
            </h2>
        </div>
    )
}

export default Repository
