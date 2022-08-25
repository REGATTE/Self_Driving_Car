
# selfdrivingcars DOCS

This repository consists of documentation for all software's built for Self Driving Car.


## Authors

- **GCS:** [@REGATTE](https://github.com/REGATTE)

## Installation - Demo - Deployment

#### Clone the repo
```
$ cd <path/to/repo>
$ npm i
```
#### Local Developlment
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.
```
$ npm start
```
#### Production Website
This command generates static content into the build directory and can be served using any static contents hosting service.
```
$ npm build
```

The page would be hosted on github-pages privately.


## Development

#### Menu Bar Tab
To create a new **Tab Item** in menu bar, go to [docusaurus.config.js](/docusaurus.config.js), add the following under *`items`*.

```
        {
          type: 'doc',
          docId: '    ',
          //name of the md file, that going to shown without the '.md' in the end
          label: '    ',
          //name to be displayed on the menu-bar
          position: 'left',
        },
```

#### Sidebar Tabs
To create a new list in the sidebar of a new page.

Go to [sidebars.js](/sidebars.js) & add the following

```
  docs_n: [ // n -> any int value that are not used yet
    // add all Heading & Sub-heading of the sidebar 
    // Sidebar list 1
    {
      type: 'category',
      label: 'Getting Started', // Heading of the Sidebar first list
      collapsed: false,         // if the sidebar is open or closed.
      items: ['suite_index','suite_GettingStarted/offBoardCompute'], // Sub-heading (Heading of all files included )
    },
  ],
```

To create more lists in the sidebar, do the following:
```
  docs_n: [ // n -> any int value that are not used yet
    // add all Heading & Sub-heading of the sidebar 
    // Sidebar list 1
    {
      type: 'category',
      label: 'Getting Started', // Heading of the Sidebar first list
      collapsed: false,         // if the sidebar is open or closed.
      items: ['suite_index','suite_GettingStarted/offBoardCompute'], // Sub-heading (Heading of all files included )
    },
    // Add the following below for next list
    // Sidebar list 2
    {
      type: 'category',
      label: 'Next list',       // Heading of the Sidebar second list
      collapsed: false,         // if the sidebar is open or closed.
      items: ['suite_index','suite_GettingStarted/offBoardCompute'], // Sub-heading (Heading of all files included )
    },    
  ],

```
#### Algolia
To update search indices, clear the older search index on Algolia. 
```
$ npm run build
```
& push the updates 
once the website is live, in another terminal window, 
run docker script to access sitemap and initiate search
```
$ cd /to/work/folder

$ docker run -it --env-file=.env -e "CONFIG=$(cat /path/to/config.json | jq -r tostring)" algolia/docsearch-scraper
```
