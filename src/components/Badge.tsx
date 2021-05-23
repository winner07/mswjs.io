import * as React from 'react'

interface Props extends React.HTMLProps<HTMLDivElement> {
  icon: JSX.Element
}

export const Badge: React.FC<Props> = ({
  icon,
  children,
  className,
  ...divProps
}) => {
  return (
    <div
      className={[
        'inline-flex items-center justify-center w-10 h-10 bg-gradient-to-tl from-orange-500 to-orange-300 text-white rounded-xl shadow-orange',
      ]
        .concat(className)
        .filter(Boolean)
        .join(' ')}
      {...divProps}
    >
      {icon}
    </div>
  )
}
