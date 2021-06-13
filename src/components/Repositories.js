import Repository from "./Repository"
import repositories from '../PageResources/repositories'


const Repositories = () => {
    return (
        <div className='px-4 py-6 grid gap-4'>
            <div className='flex items-center justify-between'>
                <h1 className='text-white'>Popular repositories</h1>
                <h1 className='text-sm text-gray-400 cursor-pointer hover:text-blue-400'>Customize your pins</h1>
            </div>

            {repositories.map((repository, repoIdx) => <Repository key={repoIdx} {...repository} />)}
        </div>
    )
}

export default Repositories
