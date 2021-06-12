import { useState, useEffect } from 'react'
import { UsersIcon, StarIcon } from '@heroicons/react/outline'
import dart from '../images/dart.png'
import me from '../images/me.jpg'

const ProfileSummary = () => {

    const [followers, setFollowers] = useState(null)
    const [following, setFollowing] = useState(null)

    useEffect(() => {
        const randomniser1 = Math.floor(Math.random() * 100) + 1
        const randomniser2 = Math.floor(Math.random() * 100) + 1
        setFollowers(randomniser1)
        setFollowing(randomniser2)
    }, [])

    return (
        <div className='px-4 text-gray-200'>
            <div className='flex items-center py-1 mb-7'>
                <div className='w-2/12 border border-solid border-gray-700 rounded-full'>
                    <img  className='rounded-full' src={me} alt='my_avatar' />
                </div>

                <div className='px-4'>
                    <h1 className='text-2xl font-semibold'>Lawal Nurudeen</h1>
                    <p className='text-gray-400 text-xl font-thin'>Nurmalee</p>
                </div>
            </div>

            <p className='flex items-center bg-transparent border border-solid border-gray-700 rounded-md text-xs mb-3 py-0.5 pb-1 px-2 cursor-pointer hover:text-blue-400'> <img src={dart} alt="dart" className='h-6 pr-1'/> Focusing</p>

            <p className='mb-4'>Fast-paced front end developer with massive skills using REACT & CSS (and their relatives) for user interface and experience management</p>

            <button className='bg-gray-800 sm:bg-gray-700 bg-opacity-50 sm:bg-opacity-70 hover:bg-opacity-100 border border-solid border-gray-100 border-opacity-20 hover:border-opacity-70 rounded-md w-full p-1.5 text-sm mb-7 font-semibold transition duration-300'>Edit profile</button>

            <div className='text-sm text-gray-400 flex items-center'>
                <span className='cursor-pointer flex items-center pr-1 hover:text-blue-400'>
                    <UsersIcon className='h-4 pr-1' /> 
                    <p><b>{followers}</b> {followers === 1 ? 'follower' : 'followers'} </p> 
                </span> &#183;
                <span className='cursor-pointer px-1 hover:text-blue-400'> 
                    <p><b>{following}</b> following </p>
                </span> &#183;
                <span className='cursor-pointer flex items-center pl-1 hover:text-blue-400'> 
                    <StarIcon className='h-4 pr-1' />
                    <b>29</b>
                </span>
            </div>

        </div>
    )
}

export default ProfileSummary
