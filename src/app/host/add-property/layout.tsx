import SvgComponent from '@/components/host/become-a-host/SvgComponent'
import React from 'react'

const layout = ({children}:{
    children:React.ReactNode
}) => {
  return (
    <div>
        <div>
              <SvgComponent />
        </div>
        {children}
    </div>
  )
}

export default layout 