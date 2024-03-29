import { useState } from 'react'
import '../styles/pseudostyles.css'

const tabs = ['overview', 'repositories', 'projects', 'packages']

const PageTabs = () => {
    const [traceIdx, setTraceIdx] = useState(0)

    const monitorSetIdx = (id) => {
        setTraceIdx(id)
        console.log(id);
    }

    return (
        <div className='sticky top-0 left-0'>
            <ul className='flex items-center text-white capitalize text-sm px-4 text-gray-400 bg-gray-800 sm:bg-gray-700 bg-opacity-50 sm:bg-opacity-70 mt-8 cursor-pointer border border-t-0 border-l-0 border-r-0 border-solid border-gray-500'>
                {tabs.map((tab, tabIdx) => {

                    let activeTab = '';
                    if(tabIdx === traceIdx){
                        activeTab = 'activeTab'
                    }

                    return (
                        <li 
                            key={tabIdx} 
                            className={activeTab + ' tabsAfter px-4 py-2.5 hover:text-gray-300'} 
                            onClick={() => monitorSetIdx(tabIdx)}>{tab}  
                            {tab === 'repositories' ? <span className='ml-2 p-0.5 px-2 text-xs rounded-xl bg-gray-800 sm:bg-gray-700'>14</span> : null}
                        </li>
                    )
                })}
            </ul>
            
        </div>
    )
}

export default PageTabs
