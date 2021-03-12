import * as React from 'react'
import { RandgeDefinition, TokenDefinition } from '../components/Code'

interface GuideFile {
  name: string
  language: string
  raw: string
  tokens?: TokenDefinition[]
  meta?: Record<string, any>
}

interface RootStep {
  title: string
  content?: JSX.Element
  steps: Step[]
}

interface Step {
  title: string
  file: string
  lines: RandgeDefinition[]
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
  const [activeStepIndex, setActiveStepIndex] = React.useState(null)
  const [activeParentStepIndex, activeChildStepIndex] =
    activeStepIndex?.split(',') || []

  return {
    file: files[activeFile],
    step: steps[activeParentStepIndex]?.steps[activeChildStepIndex],
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

          setActiveStepIndex(null)
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
          const index = `${parentIndex},${stepIndex}`
          const isActive = activeStepIndex === index

          return {
            title: step.title,
            active: isActive,
            file: files[step.file],
            content: step.content,
            goto() {
              if (isActive) {
                setLines(null)
                setActiveStepIndex(null)
                return
              }

              if (step.file !== activeFile) {
                setActiveFile(step.file)
              }

              setLines(step.lines)
              setActiveStepIndex(index)
            },
          }
        }),
      }
    }),
  }
}
