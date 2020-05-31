# Portfolio for developers

[![Deploy with Vercel](https://vercel.co/button)](https://vercel.co/new/project?template=https://github.com/lavinske/gatsby-portfolio)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.co?utm_source=lavinske)

## Theme

[Gatsby-theme-portfolio](https://github.com/lavinske/gatsby-theme-portfolio)

## Features by Smakosh

- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.co/?utm_source=smakosh)
- Or with Netlify, check [Netlify branch](https://github.com/smakosh/gatsby-portfolio-dev/tree/netlify)
- A contact form protected by Google Recaptcha
- Can be deployed with one click
- Functional components with ~~Recompose~~ React Hooks! ~~ready to migrate to React hooks!~~
- Fetches your Github pinned projects with most stars (You could customize this if you wish)

## Features by Maxine :

- Dark / Light Mode with Theme UI
- [Theme UI](https://theme-ui.org) Integrated
- Easy color customization
- Theme installation support

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers) [Original by Smakosh]

## Structure

```bash
.
├── data
│   └── config              # SEO related tags
├── src
│   └── assets              # Assets
│   │   │── icons             # icons
│   │   │── illustrations     # illustrations from (undraw.co)
│   │   └── thumbnail         # cover of your website when it's shared to social media
│   ├── components          # Components
│   │   │── common            # Common components
│   │   │── landing           # Components used on the landing page
│   │   └── theme             # Header & Footer
│   └── pages               # Pages
│   └── gatsby-plugin-theme-ui	# Theme UI customization and configuration page     
└── static                  # favicon & Netlify redirects
```

## Prerequisites

### Online

1. Create an account at [Formik](https://formik.com/?utm_source=lavinske) and grab your form endpoint url
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=gatsby-portfolio)
4. Click [![Deploy with Vercel](https://zeit.co/button)](https://zeit.co/new/project?template=https://github.com/lavinske/gatsby-portfolio) and pass in your:
  
  - Formik form endpoint
  - Google recaptcha public key
  - Github token

To Vercel's now secrets UI form.

### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=lavinske)
2. Install [Yarn](https://yarnpkg.com/en/)
3. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Run `cp .env.development.template .env.development`
5. Run `yarn && yarn start`

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

Otherwise, you will have to do the following:

1. Add your secrets one by one using the [Now CLI](https://vercel.co/docs/now-cli)
2. Run `now`


### Deploying locally to be uploaded to your Web Hosting

1. Make sure you got `npm`, `yarn`, and `gatsby` installed globally in your CMD / Terminal 
2. Create copy of `.env.development` and rename it to `.env.production`
3. Make sure you fill the file with your secrets (Recaptcha, Github, etc.)
4. Do `npm install` to install all of the prerequisites.
5. Do `gatsby develop` to develop your Gatsby page locally with Hot Build
6. After you finished with that, do `gatsby build`
7. Upload the `/public` folder to your `/public_html` folder in FTP / File Manager

### Clean the cache

This removes the `.cache/` & `public/` folders

```bash
yarn reset
```

## Built with

- Adobe XD
- Gatsby
- React & GraphQL
- Formik
- Google recaptcha
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Contributors

- [Ajay NS](https://github.com/ajayns) https://github.com/smakosh/gatsby-portfolio-dev/pull/3
- [Ryan Lee](https://github.com/drdgvhbh) https://github.com/smakosh/gatsby-portfolio-dev/pull/6
- [David](https://github.com/davidavz) https://github.com/smakosh/gatsby-portfolio-dev/pull/8
- [Léu Almeida](https://github.com/LeuAlmeida) https://github.com/smakosh/gatsby-portfolio-dev/pull/21
- [Kudakwashe Mupeni](https://github.com/2wce) https://github.com/smakosh/gatsby-portfolio-dev/pull/20
- [sasannnn](https://github.com/sasannnn) https://github.com/smakosh/gatsby-portfolio-dev/pull/22
- [Michael Seifarth](https://github.com/Kageetai) https://github.com/smakosh/gatsby-portfolio-dev/pull/27
- [Smakosh](https://smakosh.com)
- [Maxine](https://lav.my.id)

## Support

If you love this Gatsby template and want to support me, you can do so through my GitHub profile.
