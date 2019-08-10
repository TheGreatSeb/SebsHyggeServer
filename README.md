# SebsHyggeServer
This project is a Vue site for a minecraft server. The production site can be found at [SebsHyggeServer](play.teamferal.com).

## Features
 * Shows the servers ip with copy on click
 * Shows stats about the minecraft server and the machine hosting
 * Shows the currently online players
 * Shows the time offline people last visited the server
 * Link to the accompanying Discord server
 * A [Dynmap](https://github.com/webbukkit/dynmap/tree/master) popup window
 * A live chat with Minecraft authentication [WIP]
 * Shows the [Mojang status](https://wiki.vg/Mojang_API#API_Status) if there are any problems

## Project setup
To use this project [node.js](https://nodejs.org/en/) is required. Once that and NPM is installed run `npm install`.
For development and getting a live-preview of the site with hot-reloads use `npm run serve`. 
For production use `npm run build`. This compiles and minimises all files into the dist folder.
Development automatically lints files, but `npm run lint` can also be used to lint and auto-fix files.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
