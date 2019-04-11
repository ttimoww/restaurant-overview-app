# weather-app

This repository contains a react app to see all the restaurants in you local area or anywhere in the world.

## Requirements

For development, you will only need Node.js installed on your environement.

### Node

[Node](http://nodejs.org/) is really easy to install & now include [NPM](https://npmjs.org/).
You should be able to run the following command after the installation procedure
below.

    $ node --version
    v0.10.24

    $ npm --version
    1.3.21

## Install

    $ git clone https://github.com/ttimoww/restaurant-overview-app
    $ cd restaurant-overview-app
    $ npm install

    ## Start & watch

    $ npm start

## Simple build for production

    $ npm run build

## Update sources

Some packages usages might change so you should run `npm prune` & `npm install` often.
A common way to update is by doing

    $ git pull
    $ npm prune
    $ npm install

To run those 3 commands you can just do

    $ npm run pull

---

## Languages & tools

### HTML

- none

### JavaScript

- [shortid](https://www.npmjs.com/package/shortid) is used for generating simple id's.
- [React](http://facebook.github.io/react) is used for UI.
- [Google Map React](https://www.npmjs.com/package/google-map-react) is used for a faster and more simple google map implementation.
- [React Star Ratings](https://www.npmjs.com/package/react-star-ratings) is used for a simpler implementation of a star rating.

### CSS

- [node-sass](https://www.npmjs.com/package/node-sass) is used for writing better maintainable css.

