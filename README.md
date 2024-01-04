# Personal Website

Welcome to Lily's [personal website](https://FabulousLily.com)!

## Features

- Built with modern JavaScript, using tools and frameworks like [create-react-app](https://github.com/facebook/create-react-app), [React-Router](https://reactrouter.com/), and SCSS.
- Automated workflows via [GitHub Actions](https://github.com/features/actions).
- And more!

## Dependencies

Ensure you have [node](https://nodejs.org/) >= v16. Optionally, use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) to manage node versions.

## Setup and Running Yourself

1. Clone the repository:

    ```bash
    git clone git://github.com/Original-Lily/CVsite.git
    cd CVsite
    ```

2. (Optional) Ensure you're on Node v16 or higher:

    ```bash
    nvm install
    node --version
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the application:

    ```bash
    npm start
    ```

By default, the application should be available at [http://localhost:3000/](http://localhost:3000/).

## Deploying

### Static Export

For a static export without deploying to GitHub Pages:

- Remove or disable `.github/workflows/github-pages.yml`.
- Execute:

    ```bash
    npm run predeploy
    ```

This will generate a static version in `CVsite/build/` which you can host or deploy to a CDN.

## Acknowledgements

- Initial template from [Future Imperfect](https://html5up.net/future-imperfect) by [@ajlkn](https://github.com/ajlkn) for [HTML5 UP](html5up.net).

- React template from [personal-site](https://github.com/mldangelo/personal-site) by [@mldangelo](https://github.com/mldangelo)