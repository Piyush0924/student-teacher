import React from 'react'

function Header({ name, style }) {
    return (
        <div className={`h-12 w-full ${style} flex justify-center items-center`}>
            
            <p className="text-white text-2xl">{name}</p>
          </div>
    )
}

export default Header