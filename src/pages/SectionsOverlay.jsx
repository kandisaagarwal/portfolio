import { Scroll, useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function SectionsOverlay() {
  const scroll = useScroll()
  const sectionsRef = useRef([])

  useFrame(() => {
    const offset = scroll.offset // between 0 and 1
    const totalSections = sectionsRef.current.length

    sectionsRef.current.forEach((el, i) => {
      const sectionStart = i / totalSections
      const sectionEnd = (i + 1) / totalSections
      const progress = (offset - sectionStart) / (sectionEnd - sectionStart)

      // Fade & scale effect
      const opacity = 1 - Math.min(Math.abs(progress) * 2, 1)
      el.style.opacity = opacity
      el.style.transform = `scale(${1.3 - opacity * 0.1})`
    })
  })

  return (
    <Scroll html>
      {sections.map((sec, i) => (
        <div
          key={i}
          ref={el => (sectionsRef.current[i] = el)}
          style={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'white',
            padding: '2rem',
            boxSizing: 'border-box',
            transition: 'opacity 0.1s, transform 0.1s',
          }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>{sec.title}</h1>
          <div style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
            {sec.content}
          </div>
        </div>
      ))}
    </Scroll>
  )
}
