import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_layout/deploy')({
  component: () => <div>Hello /_layout/publishing!</div>,
})
