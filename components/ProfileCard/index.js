'use client'

import Image from 'next/image'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ProfileCardInfo } from './ProfileCardInfo'
// import { ProfileCardInfo } from './ProfileInfo'
// import { SpotifyNowPlaying } from './SpotifyNowPlaying'

export function ProfileCard() {
  let ref = useRef(null)
  let [style, setStyle] = useState({})

  let onMouseMove = useCallback((e) => {
    if (!ref.current || window.innerWidth < 1280) return

    let { clientX, clientY } = e
    let { width, height, x, y } = ref.current.getBoundingClientRect()
    let mouseX = Math.abs(clientX - x)
    let mouseY = Math.abs(clientY - y)
    let rotateMin = -15
    let rotateMax = 15
    let rotateRange = rotateMax - rotateMin

    let rotate = {
      x: rotateMax - (mouseY / height) * rotateRange,
      y: rotateMin + (mouseX / width) * rotateRange,
    }

    setStyle({
      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
    })
  }, [])

  let onMouseLeave = useCallback(() => {
    setStyle({ transform: 'rotateX(0deg) rotateY(0deg)' })
  }, [])

  useEffect(() => {
    let { current } = ref
    if (!current) return
    current.addEventListener('mousemove', onMouseMove)
    current.addEventListener('mouseleave', onMouseLeave)
    return () => {
      if (!current) return
      current.removeEventListener('mousemove', onMouseMove)
      current.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [onMouseLeave, onMouseMove])

  return (
    <div
      className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 xl:mb-0 xl:hover:scale-[1.15]"
      style={{ perspective: '600px' }}
      ref={ref}
    >
      <div
        style={style}
        className="flex flex-col overflow-hidden bg-white shadow-cyan-100/50 transition-all duration-200 ease-out xl:rounded-lg xl:shadow-lg"
      >
        <Image
          src={'/static/images/xr.jpg'}
          alt="avatar"
          priority
          width={1158}
          height={1622}
          style={{
            objectPosition: '50% 16%',
            objectFit: 'cover',
            width: '100%',
            aspectRatio: '14/15',
          }}
        />
        <div className="px-6 py-4">
          <h3 className="text-xl font-semibold text-gray-800 ">
            Rui Xu (徐瑞)
          </h3>
          <h5 className="py-2 text-gray-700 ">Master Student</h5>
          <ProfileCardInfo />
        </div>

        <span className="h-1.5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
      </div>
    </div>
  )
}
