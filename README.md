# Sonar React Take-Home Challenge

## Overview

To complete this challenge, you will need to write a simple React web app, and provide us the source files to be built. The purpose of this challenge is to assess your skills and approach to composing a simple web app given a set of screens and an API feed.

This challenge is expected to take about ~3 hours.

## The Challenge

You will be building a web page with 3 screens that displays information about both movies and series. You'll need to read in a JSON file with the data, filter it, and use the relevant fields.

Please include a short `README` with any setup instructions, and any tests or other documentation you created as part of your solution. Feel free to use any React scaffolding library like [create-react-app](https://github.com/facebook/create-react-app), or set it up from scratch.

## Details

You will need to build the following 3 pages with React:

- A "Home" page
- A "Series" page
- A "Movies" page

### Home Page

This will be the `index.html` screen. You will need to display 2 tiles, which link to the "Series" page and the "Movies" page.

### Series and Movies Pages

For each page you will need to fetch the JSON feed, then:

- Display the first 20 entries
- Where the entry has a `releaseYear` >= 2010
- Sorted by title in alphanumeric order (numbers before letters, then A-Z)

For the series page, `programType` should equal `series`.

For the movies page, `programType` should equal `movies`.

For each entry, you should display the title, and the poster art (`images` -> `Poster Art` -> `url`).

Please also add basic loading and error states for each page.

## Assumptions

You can assume not need to support legacy browsers without features such as `flexbox`. You can also not worry about supporting mobile browsers.
