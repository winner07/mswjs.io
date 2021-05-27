import * as React from 'react'
import { IconType } from 'react-icons'

interface Props {
  children: React.ReactNode
  color?: string
  icon?: IconType
}

export function SidebarGroup({
  children,
  color,
  icon: Icon,
}: Props): JSX.Element {
  return (
    <h4 className="mb-2 flex items-center space-x-2 text-black text-sm font-extrabold uppercase">
      {Icon ? (
        <span
          className={`flex items-center justify-center w-6 h-6 bg-${color}-500 text-white rounded-md`}
        >
          <Icon size={14} />
        </span>
      ) : null}
      <span>{children}</span>
    </h4>
  )
}
