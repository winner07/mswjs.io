declare module '*.svg' {
  const Icon: React.FC<React.SVGProps<SVGSVGElement>>
  export default Icon
}

declare module '!!raw-loader!*' {
  const content: string
  export default content
}
