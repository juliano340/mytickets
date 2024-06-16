import React from 'react'
import {ReactNode} from 'react'

export default function Container({children}: {children: React.ReactNode}) {
  return (
    <div className="w-full max-w-6xl mx-auto px-2">
      {children}
    </div>
  )
}
