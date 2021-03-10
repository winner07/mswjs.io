import * as React from 'react'

interface GuideFile {
  name: string
  language: string
  raw: string
}

interface LineToken {
  start: number
  end: number
}

interface RootStep {
  title: string
  content?: JSX.Element
  steps: Step[]
}

interface Step {
  title: string
  file: string
  lines: LineToken[]
  content?: JSX.Element
}

interface UseGuideProps {
  files: Record<string, GuideFile>
  steps: RootStep[]
}

export function useGuide({ files, steps }: UseGuideProps) {
  const [activeFile, setActiveFile] = React.useState(() => {
    return Object.keys(files)[0]
  })
  const [lines, setLines] = React.useState(null)
  const [activeStep, setActiveStep] = React.useState(null)

  return {
    file: files[activeFile],
    files: Object.keys(files).map((key) => {
      const file = files[key]
      const isActive = activeFile === key
      return {
        ...file,
        key,
        active: isActive,
        goto() {
          if (!isActive) {
            setActiveFile(key)
          }

          setActiveStep(null)
          setLines(null)
        },
      }
    }),
    lines,
    steps: steps.map((step, parentIndex) => {
      return {
        title: step.title,
        content: step.content,
        steps: step.steps.map((step, stepIndex) => {
          const index = `${parentIndex}${stepIndex}`
          const isActive = activeStep === index

          return {
            title: step.title,
            active: isActive,
            content: step.content,
            goto() {
              if (isActive) {
                setLines(null)
                setActiveStep(null)
                return
              }

              if (step.file !== activeFile) {
                setActiveFile(step.file)
              }

              setLines(step.lines)
              setActiveStep(index)
            },
          }
        }),
      }
    }),
  }
}
