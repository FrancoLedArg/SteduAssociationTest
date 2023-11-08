'use client'

import React, { useState, useEffect } from 'react'

// Components
import ProgramsMobile from './mobile'
import ProgramsDesktop from './desktop'

export default function Programs() {
  const [isMobile, setIsMobile] = useState<boolean>()

  useEffect(() => {
    function device() {
      if(typeof window !== 'undefined') {
        return /Android|iPhone|iPad/i.test(navigator.userAgent) && navigator.maxTouchPoints > 0
      }
    }

    setIsMobile(device())
  }, [])

  if (isMobile) {
    return <ProgramsMobile/>
  } else {
    return <ProgramsDesktop/>
  }
}

