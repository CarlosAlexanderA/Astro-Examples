import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"

export const Pause = ({ width, height, color }) => (
  <svg role="img" width={width} height={height} aria-hidden="true" viewBox="0 0 16 16"><path fill={color | "currentColor"} d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)
export const Play = ({ width, height, color }) => (
  <svg role="img" width={width} height={height} aria-hidden="true" viewBox="0 0 16 16"><path fill={color | "currentColor"} d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export function Player() {
  const { isPlaying, setIsPlaying } = usePlayerStore(state => state)
  const [currentSong, setCurrentSong] = useState(null)
  const audioRef = useRef()


  useEffect(() => {
    audioRef.current.src = "/music/1/Amy Winehouse - Back To Black.mp3"

  }, [])
  const handleClick = () => {
    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
      audioRef.current.volume = 0.1
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div className="flex flex-row justify-between w-full px-4 z-50">
      <div>CurrentSong...</div>
      <div className="grud place-content-center gap-4 flex-1">
        <div className="flex justify-center">
          <button onClick={handleClick} className="bg-white rounded-full p-2">{isPlaying ? <Pause width={24} height={24} color={'black'} /> : <Play width={24} height={24} color={'black'} />}</button>
          <audio ref={audioRef} />
        </div>
      </div>
      <div>Volumen</div>
    </div>
  )
}
