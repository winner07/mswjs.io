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
      className={`my-4 px-4 py-3 border border-${color}-300 bg-${color}-50 text-${color}-900 text-sm font-medium rounded-lg`}
    >
      {children}
    </div>
  )
}
