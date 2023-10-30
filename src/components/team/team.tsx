'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'

// Css
import styles from './team.module.css'

// Utils
import { members } from '../../utils/team'

  // For a future developer reviewing this code

  // This is not actually my carousell, but an inspiration from https://camillemormal.com/

  // If you have any trouble understanding how this works, watch this youtube video https://www.youtube.com/watch?v=PkADl0HubMY&ab_channel=Hyperplexed

  // There is a fix in the code so it adapts to a restricted movement that involves the 'maxPercentage'

export default function Team() {
  // Create a reference for the track element
  const trackRef = useRef<HTMLUListElement>(null)

  // Tracking the width of the device and track
  let windowWidth: number
  let trackWidth: number

  //  Tracking the maximum percentage of movement for the track
  let maxPercentage: number

  // Track the coordinates of the mouse
  let mouseDown: number = 0

  // Track of the percentages
  let percentage: number
  let prevPercentage: number = 0
  let nextPercentage: number

  // useEffect to set up event listeners and handle cleanup

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Define the width of the device
    windowWidth = window.innerWidth

    // Define the width of the track
    if (trackRef.current) {
      trackWidth = trackRef.current.clientWidth
    }

    // Calculate the maximum percentage
    const offset = Math.floor(
      (windowWidth * 100) / trackWidth
    )

    // REVIEW THIS LOGIC PLEASE
    maxPercentage = (103 - offset) * -1

    // Add event listeners
    window.addEventListener('mousedown', handleOnDown)
    window.addEventListener('touchstart', handleOnDown)
    window.addEventListener('mouseup', handleOnUp)
    window.addEventListener('touchend', handleOnUp)
    window.addEventListener('mousemove', handleOnMove)
    window.addEventListener('touchmove', handleOnMove)

    // Cleanup: Remove event listeners when the component unmounts
    return () => {
      window.removeEventListener('mousedown', handleOnDown)
      window.removeEventListener('touchstart', handleOnDown)
      window.removeEventListener('mouseup', handleOnUp)
      window.removeEventListener('touchend', handleOnUp)
      window.removeEventListener('mousemove', handleOnMove)
      window.removeEventListener('touchmove', handleOnMove)
    }
  }, [])

  const handleOnDown = (e: MouseEvent | TouchEvent) => {
    // The coordinates at the moment of clicking
    if (e instanceof MouseEvent) {
      mouseDown = e.clientX
    } else if (e.touches && e.touches.length > 0) {
      mouseDown = e.touches[0].clientX
    } else {
      mouseDown = 0
    }
  }

  const handleOnMove = (e: MouseEvent | TouchEvent) => {
    // If coordinates are 0, quit the function
    if(mouseDown === 0) return

    // The distance the mouse traveled
    let mouseDelta: number

    if (e instanceof MouseEvent) {
      mouseDelta = Math.floor(mouseDown) - e.clientX
    } else if (e.touches && e.touches.length > 0) {
      mouseDelta = Math.floor(mouseDown) - e.touches[0].clientX
    } else {
      mouseDelta = 0
    }

    // Calculate the amount of distance relative to the device's screen size,
    // the mouse has to travel in order to move the whole track
    const maxDelta = windowWidth * 4

    // Calculate the percentage of the track that needs to move with the mouse movement
    percentage = (mouseDelta / maxDelta) * -100

    const nextPercentageUnconstrained = Math.floor(
      Math.floor(prevPercentage) + percentage
    )

    // Calculate the next percentage constrained between 0 and maxPercentage
    nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0), maxPercentage
    )

    // Update the percentage
    percentage = nextPercentage

    if (trackRef.current) {
      trackRef.current.animate({
        transform: `translate(${nextPercentage}%, 0%)`
      }, { duration: 1200, fill: "forwards" });
    }
  }

  const handleOnUp = () => {
    // Reset mouseDown to 0
    mouseDown = 0

    // Update prevPercentage
    prevPercentage = percentage
  }

  return (
    <section className={styles.team_container}>
      <section className='section-grid'>
        <span className='h5'>
          OUR TEAM
        </span>

        <h2 className='h2 white'>
          The people that makes this possible
        </h2>

        <h3 className='h3 off-white'>
          They devoted their time, effort, and resources to give people the education they deserve.
        </h3>
      </section>

      <div className={styles.team_track_container}>
        <ul
          ref={trackRef}
          className={styles.team_track}
        >
          {members.map((e, index) => (
            <li
              key={index}
              className={styles.team_track_boxes}
            >
              <div>
                <Image
                  src={`/assets/${e.image}.jpg`}
                  alt={e.name}
                  width={400}
                  height={400}
                  draggable='false'
                  loading='eager'
                />
              </div>

              <span className='blue'>
                {e.name}
              </span>

              <span className='h5 off-white'>
                {e.role}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
