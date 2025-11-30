"use client"

export function SpaceVideoBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Canvas-based animated starfield background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/space-background.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/70" />

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
    </div>
  )
}
