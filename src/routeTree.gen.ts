/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()
const LayoutPromptMakingLazyImport = createFileRoute('/_layout/prompt-making')()
const LayoutPromptGalleryLazyImport = createFileRoute(
  '/_layout/prompt-gallery',
)()
const LayoutModelLearningLazyImport = createFileRoute(
  '/_layout/model-learning',
)()
const LayoutDeployLazyImport = createFileRoute('/_layout/deploy')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout/index.lazy').then((d) => d.Route))

const LayoutPromptMakingLazyRoute = LayoutPromptMakingLazyImport.update({
  path: '/prompt-making',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/prompt-making.lazy').then((d) => d.Route),
)

const LayoutPromptGalleryLazyRoute = LayoutPromptGalleryLazyImport.update({
  path: '/prompt-gallery',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/prompt-gallery.lazy').then((d) => d.Route),
)

const LayoutModelLearningLazyRoute = LayoutModelLearningLazyImport.update({
  path: '/model-learning',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/model-learning.lazy').then((d) => d.Route),
)

const LayoutDeployLazyRoute = LayoutDeployLazyImport.update({
  path: '/deploy',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() =>
  import('./routes/_layout/deploy.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/deploy': {
      id: '/_layout/deploy'
      path: '/deploy'
      fullPath: '/deploy'
      preLoaderRoute: typeof LayoutDeployLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/model-learning': {
      id: '/_layout/model-learning'
      path: '/model-learning'
      fullPath: '/model-learning'
      preLoaderRoute: typeof LayoutModelLearningLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/prompt-gallery': {
      id: '/_layout/prompt-gallery'
      path: '/prompt-gallery'
      fullPath: '/prompt-gallery'
      preLoaderRoute: typeof LayoutPromptGalleryLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/prompt-making': {
      id: '/_layout/prompt-making'
      path: '/prompt-making'
      fullPath: '/prompt-making'
      preLoaderRoute: typeof LayoutPromptMakingLazyImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutDeployLazyRoute: typeof LayoutDeployLazyRoute
  LayoutModelLearningLazyRoute: typeof LayoutModelLearningLazyRoute
  LayoutPromptGalleryLazyRoute: typeof LayoutPromptGalleryLazyRoute
  LayoutPromptMakingLazyRoute: typeof LayoutPromptMakingLazyRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutDeployLazyRoute: LayoutDeployLazyRoute,
  LayoutModelLearningLazyRoute: LayoutModelLearningLazyRoute,
  LayoutPromptGalleryLazyRoute: LayoutPromptGalleryLazyRoute,
  LayoutPromptMakingLazyRoute: LayoutPromptMakingLazyRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/deploy': typeof LayoutDeployLazyRoute
  '/model-learning': typeof LayoutModelLearningLazyRoute
  '/prompt-gallery': typeof LayoutPromptGalleryLazyRoute
  '/prompt-making': typeof LayoutPromptMakingLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/deploy': typeof LayoutDeployLazyRoute
  '/model-learning': typeof LayoutModelLearningLazyRoute
  '/prompt-gallery': typeof LayoutPromptGalleryLazyRoute
  '/prompt-making': typeof LayoutPromptMakingLazyRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/deploy': typeof LayoutDeployLazyRoute
  '/_layout/model-learning': typeof LayoutModelLearningLazyRoute
  '/_layout/prompt-gallery': typeof LayoutPromptGalleryLazyRoute
  '/_layout/prompt-making': typeof LayoutPromptMakingLazyRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/deploy'
    | '/model-learning'
    | '/prompt-gallery'
    | '/prompt-making'
    | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/deploy' | '/model-learning' | '/prompt-gallery' | '/prompt-making' | '/'
  id:
    | '__root__'
    | '/_layout'
    | '/_layout/deploy'
    | '/_layout/model-learning'
    | '/_layout/prompt-gallery'
    | '/_layout/prompt-making'
    | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/deploy",
        "/_layout/model-learning",
        "/_layout/prompt-gallery",
        "/_layout/prompt-making",
        "/_layout/"
      ]
    },
    "/_layout/deploy": {
      "filePath": "_layout/deploy.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/model-learning": {
      "filePath": "_layout/model-learning.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/prompt-gallery": {
      "filePath": "_layout/prompt-gallery.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/prompt-making": {
      "filePath": "_layout/prompt-making.lazy.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
