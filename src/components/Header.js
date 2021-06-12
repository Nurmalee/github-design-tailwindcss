import { GitHub } from '@material-ui/icons';
import { MenuIcon, BellIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-3 py-4 bg-gray-900' >
            <MenuIcon className='text-white h-7' />
            <GitHub className='text-white' style={{fontSize: '33'}} />
            <BellIcon className='text-white h-5' />
            
        </div>
    )
}

export default Header
