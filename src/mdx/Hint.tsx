import * as React from 'react'

type HintMode = 'warning' | 'error'

function getBackgroundColor(mode: HintMode): string {
  switch (mode) {
    case 'warning': {
      return 'yellow'
    }

    case 'error': {
      return 'red'
    }

    default: {
      return 'blue'
    }
  }
}

export function Hint({
  children,
  mode,
}: {
  children: React.ReactNode
  mode: HintMode
}) {
  const color = getBackgroundColor(mode)
  return (
    <div
      className={`my-4 px-6 py-4 rounded-lg bg-${color}-50 text-gray-700 text-base`}
    >
      {children}
    </div>
  )
}
