import { useRef, useState } from 'react'
import './AboutVideo.css'

function AboutVideo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    const v = videoRef.current
    if (!v) return
    if (playing) {
      v.pause()
    } else {
      v.play()
    }
    setPlaying(!playing)
  }

  return (
    <section className="ab-video">
      <video
        ref={videoRef}
        className="ab-video__el"
        src="/abstract-green-futuristic-background-2023-11-27-04-58-09-utc.mp4"
        loop
        playsInline
        onClick={toggle}
      />

      {!playing && (
        <button className="ab-video__play" onClick={toggle} aria-label="Воспроизвести">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <polygon points="6,4 20,12 6,20" fill="white" />
          </svg>
        </button>
      )}
    </section>
  )
}

export default AboutVideo
