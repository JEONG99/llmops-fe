import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/prompt-making')({
  component: () => <div>Hello /_layout/prompt-making!</div>,
})
