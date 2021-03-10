import * as React from 'react'

export const PageHeader: React.FC = ({ children }) => {
  return (
    <header className="bg-gray-lightest py-8 dark:bg-gray-darkest">
      <div className="container">{children}</div>
    </header>
  )
}
