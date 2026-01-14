import {LoaderIcon} from 'lucide-react'

function Loader() {
  return (
    <div className='min-h-screen w-full z-10 flex items-center justify-center'>
        <LoaderIcon className='size-12 animate-spin' />
    </div>
  )
}

export default Loader
