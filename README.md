# Sonar React Take-Home Challenge

## Overview

To complete this challenge, you will need to write a simple React web app, and submit it as a pull request, or a branch on your own fork of this repo. We will be assessing your approach to composing a simple web app with a set of screens and an API feed.

Try to spend no more than ~3 hours on this challenge.

## The Challenge

Build a web page with 3 screens that displays information about both movies and series. You'll need to read in a JSON file with the data, filter it, and use the relevant fields.

Please include a short `README` with any setup instructions, and any tests or other documentation you created as part of your solution. Feel free to use any React scaffolding library like [create-react-app](https://github.com/facebook/create-react-app), or set it up from scratch. You can bring in any additional 3rd-party libraries you'd like.

## Details

Build the following 3 pages with React:

- A "Home" page
- A "Series" page
- A "Movies" page

### Home Page

This will be the `index.html` screen. This page will display 2 tiles, which link to the "Series" page and the "Movies" page.

### Series and Movies Pages

For each page, fetch the JSON feed then:

- Display the first 20 entries
- Where the entry has a `releaseYear` >= 2010
- Sorted by title in alphanumeric order (numbers before letters, then A-Z)

Fetch the JSON feed using the object in `movieFeed.js`.

For the series page, `programType` should equal `series`.

For the movies page, `programType` should equal `movies`.

For each entry, display the title, and the poster art (`images` -> `Poster Art` -> `url`).

Please also add basic loading and error states for each page.

## Assumptions

You can assume you do not need to support mobile browsers or legacy browsers without features such as `flexbox`.
