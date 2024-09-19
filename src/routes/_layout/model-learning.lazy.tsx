import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/model-learning')({
  component: () => <div>Hello /_layout/model-learning!</div>,
})
