import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '822'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '19d'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '147'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '007'),
            routes: [
              {
                path: '/category/general-settings',
                component: ComponentCreator('/category/general-settings', '5c0'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/advertisement',
                component: ComponentCreator('/GeneralSettings/advertisement', 'a31'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/app-deployment',
                component: ComponentCreator('/GeneralSettings/app-deployment', '3b1'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/deeplink',
                component: ComponentCreator('/GeneralSettings/deeplink', '584'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/firebase',
                component: ComponentCreator('/GeneralSettings/firebase', '2f6'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/firebase-billing',
                component: ComponentCreator('/GeneralSettings/firebase-billing', 'f90'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/iap',
                component: ComponentCreator('/GeneralSettings/iap', 'a28'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/notifications',
                component: ComponentCreator('/GeneralSettings/notifications', '371'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/packagename',
                component: ComponentCreator('/GeneralSettings/packagename', '25e'),
                exact: true,
                sidebar: "generalSidebar"
              },
              {
                path: '/GeneralSettings/setupFlutter',
                component: ComponentCreator('/GeneralSettings/setupFlutter', 'cee'),
                exact: true,
                sidebar: "generalSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
