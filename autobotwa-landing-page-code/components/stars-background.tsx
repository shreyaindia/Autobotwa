"use client"

export function StarsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => {
          const size = Math.random() * 2 + 1
          const left = Math.random() * 100
          const top = Math.random() * 100
          const delay = Math.random() * 3

          return (
            <div
              key={i}
              className="absolute rounded-full bg-white animate-stars"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${left}%`,
                top: `${top}%`,
                animationDelay: `${delay}s`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
