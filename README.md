# A Software Crafter's Journey

> Blog, NuxtJS, VueJS, Markdown

## How to post a new article

### Create your blog post
- Create a markdown file
  - with `.md` extension
  - use `-` instead of space (eg. `your-article-name.md`)
- Write your blog post into the previously created markdown file

*See more on markdown format :
[Mastering Markdown - Github Guides](https://guides.github.com/features/mastering-markdown/)*

### Publish on the blog
- **Fork** the repository (https://github.com/lelionvert/a-software-crafter-s-journey)
- Checkout a branch (eg. `article/you-article-name`)
- **Add** your article (markdown file) in the `articles` folder
    - Add meta datas on top of your markdown file within 3 dashs (Mandatory for the article to be visible on the home page)
        - Available meta datas: title, author, published_date, description, tags
          - tags should be separated with commas
        - Example :
        ```
        ---
        title: Ton Code fait partie du patrimoine culturel
        author: Jordan Nourry
        published_date: 29 Mai 2018
        description: Tout le monde revient de la Devoxx France avec des étoiles plein les yeux. Après cette 7ème édition, tous les développeurs reviennent avec un tas d’idées de refactoring qui vont changer la face du monde. Les projets du bassin parisien n’ont qu’à bien se tenir !!
        tags: Devoxx, Futur, France, Code, Engineering
        ---
        ```
    - (Recommended) Put your article file into subfolders (eg. `~/articles/2019/12/your-article-name.md`)
        - A folder to indicate the year of publication
        - A second folder to indicate the month of publication
- **Commit** your changes into your branch
- Make a **pull request** from your forked branch into `master` (https://github.com/lelionvert/a-software-crafter-s-journey/compare)
- Wait for **merge approval**, then **merge** on `master`
- The changes will be automatically deployed (through a git hooks within the web server)

## Build Setup

``` bash
# clone this repository
$ git clone https://github.com/lelionvert/a-software-crafter-s-journey.git

# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).
