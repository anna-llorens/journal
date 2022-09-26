##  Journal

React application that contains a list and a detail view of news articles:

- The left side with the list of news articles.
   * When you click on one of the articles in the list, the content is shown in the other section and that article is marked as read.
- The right side with a detailed view of the current active article, or an empty view if none is selected.


<p align="center">
  <img src="fe_hiring_challenge.png">
</p>

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


