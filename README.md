## Coding Challenge

> ### ⚠️ Read it first!
> The purpose of this challenge is to give us an idea about your coding skills.
> At New Work we value well structured and tested code. Semantic HTML, modern and responsive CSS, a consistent coding style and a structured code base are important to us.
> I know... you probably love to code (we also love it!). But please, read this file until the end and make sure you understand the requirements before you start coding! If you have any questions, just let us know!

### Challenge
Build a Javascript application that contains a list and a detail view of news articles.
The application should be built with two columns and behave like this:

- The left side with the list of news articles.
   * When you click on one of the articles in the list, the content is shown in the other section and that article is marked as read.
- The right side with a detailed view of the current active article, or an empty view if none is selected.

The final app should look somewhat similar to the mockup below, but as long as you meet the criteria described above, you can build it in whichever way you find appropriate.

<p align="center">
  <img src="fe_hiring_challenge.png">
</p>

## Tech Requirements

- Use React to build this application.
  * If you think it makes it easier for you, start with create-react-app(https://github.com/facebook/create-react-app).
- Please do the layout and styling with your own CSS (pre-processors are allowed). Don't use any component libraries like bootstrap or material-ui.
- Please do **not** use Redux for app state management. We'd like to see simpler and more modern approaches like hooks and React Context for this.
- We value good code structure (naming of variables, files/folders, separation of concerns, etc.) and consistent coding style (hint: you may use a linter).
- Testing your code is important, we'd like to see some meaningful tests (full coverage not required).
- Use this README to document what you've built. Make sure that the person that reviews this code understands your choices and challenges:
  * Outline your reasoning behind technical choices (architecture, third party libs, etc.)
  * Explain technical trade-offs
  * Anything you skipped due to time constraint?
  * What would you add if you had additional time for this project?

## Basic Tooling & API

To get you started in the right direction, we give you a couple of yarn scripts. But feel free to improve and extend it as you go through the assignment.

```sh
> cd api
> yarn install
> yarn api       # run API on 0.0.0.0:8000
```

The API serves the endpoint you'll need:

```sh
/v1/news?q=      # get the list of articles
```

Or if you want to use GraphQL

```sh
query GetNewsArticles($title: String){
  articles(title: $title) {
    author
    title
    description
    url
    urlToImage
    publishedAt
    content
  }
}
```

It is not mandatory to run with this server or to use this API, but we highly recommend it. If you really want to use another API, please give a good reason in the [Development Journal](#development-journal) section. If you feel the need to change the API or add something, feel free to do so.

> The data was obtained through newsapi.org

### Not challenging enough?

- Add a search functionality for the list view so we can reach certain articles easier.
- We're showing too many articles on a single page. Implement pagination using client-side routing, so we only see 10 articles at a time.
- We like tidy code! Configure linting for your JavaScript and CSS files (you can use style guides like [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)).
- Let's say we need our application to support IE11. To a reasonable extent, ensure we can support modern Javascript in not-so-modern browsers.
- We all know designers love animations, so try adding some CSS animations.
- Anything else you'd like to show us? :)

### Notes

- The total working time should be around 6 hours. Focus on completing the [Tech Requirements](#tech-requirements) first and only then move to the [Not challenging enough?](#not-challenging-enough) section. This last section is not mandatory, but with that done we can get more information on your coding skills.
- We'd like to see how familiar you're with React and React features, but if you think you'll need another framework please explain shortly in the documentation section.
- In general, we'd rather see something simple you understand than something fancy you can't explain.
- Please don't use something you already developed.

Happy coding & good luck! 🚀

---
## Development Journal

This web application renders a list of Articles with the article previewer. 

### ⚙️ Requirements
- Node 14+
- Yarn 1.22+

### 🚀 Getting started 
To start the local server:
```sh
> cd api
> yarn && yarn api    # install dependecies and run the app 
```

To start the React app:

```sh
> cd journal
> nvm use               # load the node version used
> yarn && yarn start    # install dependecies and run the app 
```

### 📝 Main features
- Show a list of articles to read
- Article preview
- Notifications for new/unread articles
- Search articles by title
- Responsive design
- Keyboard navigation

### 🧪 Testing
To run the frontend Unit tests:
```sh
> cd journal         
> yarn test           # install dependecies and run the app 
```
### 🙆‍♀️ Code challenges
- Learning how to use GraphQl with Apollo Client. 
- Build a frontend app without having desings. 


### ℹ️ Technologies 
#### Client:
- [React](https://reactjs.org/) React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.

- [Apollo-client](https://www.apollographql.com/): Apollo is a platform for building a supergraph, a unified network of all your data, services, and capabilities that connects to your application clients (such as web and native apps). At the heart of the supergraph is a query language called GraphQL.

- [Sass/Scss](http://sass-lang.com/): Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more. It's translated to well-formatted, standard CSS using the command line tool or a web-framework plugin.

- [Eslint](https://eslint.org/): Find and fix problems in your JavaScript code. ESLint statically analyzes your code to quickly find problems.

- [classnames](https://www.npmjs.com/package/classnames): A simple JavaScript utility for conditionally joining classNames together.

#### Server
- [nodemon](https://yarnpkg.com/package/nodemon): nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

- [uuid](https://www.npmjs.com/package/uuid): Universally Unique Identifier. Used to generate id to Articles. 


### 📁 Folder structure
```sh
src/
|– components/  # app ui components
|– context/ 
|  |– articles/ # graphQL Articles querys, Articles context
|– spec/        # UT mock data, function helpers
|– static/     
|   |– images/  # svg, png files.
```

### 💥 Future improvements

- Github actions to automatically run Eslint and UT
#### Server: 
- Add UT
- Connect to a db like prisma or MongoDB

#### Client
- Add a burguer menu to show/hide the Articles list on small screens. 
- Add more UT
- Display unread articles first.
- Add dark theme. 
- Add src/css folder and split utils.scss with mixins, colors, animations, etc
- Better error handling of server requests. Example: Add a custom hook with a stwich case of the possible errors.
...

### ⏳ Task log

| Date     |  Task          | Description                                                     |
|----------|:--------------:|----------------------------------------------------------------:|
| 18/09/22 | Project setup  | Read requirements, setup React, added library dependencies      |
| 19/09/22 | Article card   | Added and styled ArticleCard component                          |
| 19/09/22 | GraphQL        | Read documentation about GraphQL and Apollo                     |
| 20/09/22 | Article List   | Fetch Articles data from the server and display it on the cards |
| 21/09/22 | Improve app    | Refactor css, folders, split components, reuse code...          |
| 22/09/22 | Notifications  | Add notifications to new articles                               |
| 23/09/22 | Improve app    | Add header,  added UT, refator css                              |             
| 25/09/22 | Search         | Added search feature                                            |                                   
| 25/09/22 | Readme         | Upate readme. 

### ✍️ Authors

[Anna Llorens](https://github.com/symphony-annaLlorens)


