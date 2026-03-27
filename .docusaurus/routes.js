import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/IlmStack/__docusaurus/debug',
    component: ComponentCreator('/IlmStack/__docusaurus/debug', '298'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/config',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/config', '02d'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/content',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/content', '164'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/globalData',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/globalData', '4b2'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/metadata',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/metadata', '78f'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/registry',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/registry', 'c4e'),
    exact: true
  },
  {
    path: '/IlmStack/__docusaurus/debug/routes',
    component: ComponentCreator('/IlmStack/__docusaurus/debug/routes', '352'),
    exact: true
  },
  {
    path: '/IlmStack/markdown-page',
    component: ComponentCreator('/IlmStack/markdown-page', 'c8d'),
    exact: true
  },
  {
    path: '/IlmStack/docs',
    component: ComponentCreator('/IlmStack/docs', 'cbf'),
    routes: [
      {
        path: '/IlmStack/docs',
        component: ComponentCreator('/IlmStack/docs', '555'),
        routes: [
          {
            path: '/IlmStack/docs',
            component: ComponentCreator('/IlmStack/docs', '693'),
            routes: [
              {
                path: '/IlmStack/docs/devops/docker',
                component: ComponentCreator('/IlmStack/docs/devops/docker', '878'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IlmStack/docs/intro',
                component: ComponentCreator('/IlmStack/docs/intro', '888'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/IlmStack/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/congratulations', '43c'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/create-a-blog-post', '731'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/create-a-document', '07e'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/create-a-page', 'd34'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/deploy-your-site', '5e7'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/IlmStack/docs/tutorial-basics/markdown-features', '163'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/IlmStack/docs/tutorial-extras/manage-docs-versions', '96f'),
                exact: true
              },
              {
                path: '/IlmStack/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/IlmStack/docs/tutorial-extras/translate-your-site', '4b9'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/IlmStack/',
    component: ComponentCreator('/IlmStack/', 'b81'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
