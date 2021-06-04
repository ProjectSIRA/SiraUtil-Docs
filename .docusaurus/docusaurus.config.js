export default {
  "title": "SiraUtil Documentation",
  "tagline": "The best modding utility for Beat Saber",
  "url": "https://docs.sira.pro",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "projectsira",
  "projectName": "sirautil-docs",
  "themeConfig": {
    "navbar": {
      "title": "SiraUtil",
      "logo": {
        "alt": "SIRA Logo",
        "src": "img/logo.png"
      },
      "items": [
        {
          "type": "doc",
          "docId": "intro",
          "position": "left",
          "label": "Guide",
          "activeSidebarClassName": "navbar__link--active"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\Users\\Auros\\Documents\\Programming\\Beat Saber\\SIRA\\sirautil-docs\\sidebars.js",
          "editUrl": "https://github.com/ProjectSIRA/SiraUtil-Docs/tree/main"
        },
        "theme": {
          "customCss": "C:\\Users\\Auros\\Documents\\Programming\\Beat Saber\\SIRA\\sirautil-docs\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};