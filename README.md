# simple-apollo-server-graphql-lambda-ui
A Simple Book Search Application using [React JS](https://reactjs.org/docs/getting-started.html), a JavaScript library to make awesome UI by Facebook, [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/).

This application uses [React JS](https://reactjs.org/docs/getting-started.html) component oriented UI creation paradigm. All components are written in [JSX](https://reactjs.org/docs/jsx-in-depth.html) and ES6 style and are
combined to get a single build for production purpose using [Webpack 5](https://webpack.js.org/concepts/).

ES6 `module` creation along with `import /export` is used. [Babel](https://babeljs.io/docs/en/babel-preset-react) is used to _transpile_ all [JSX](https://reactjs.org/docs/jsx-in-depth.html) code to vanilla JavaScript code. To install all the dependecies `npm` is used.

Back end is implemented using [Node JS](https://nodejs.org/en/docs), [Express JS](https://expressjs.com/en/api.html) and [MongoDB](https://docs.mongodb.com/). [Atlas](https://www.mongodb.com/cloud/atlas), the _Cloud_ version of [MongoDB](https://docs.mongodb.com/) is used. Real time communication is done using [Socket.io](https://www.npmjs.com/package/socket.io)

For UI creation [HTML5](https://www.w3schools.com/html/html5_intro.asp) and [CSS3](https://www.w3schools.com/css/) are used. [Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout), the new feature of [CSS3](https://www.w3schools.com/css/) is used for layout creation purpose.

This is a _responsive web application_ for viewing in both Mobile and Desktop.

## Features

1. Code is rewritten with [React JS 18](https://reactjs.org/docs/getting-started.html) and [Node JS 18](https://nodejs.org/en/docs/)
2. Latest features of JavaScript i.e. ES6, ES7, ES8 is used
3. [React JS Hooks](https://reactjs.org/docs/hooks-intro.html) are used with Functional components
4. ES8 `async/await` is used

<br/>

<ol start=5>
 <li> This is Simple Chat Application </li>
 <li> It is a Full Stack Application </li>
</ol>

7. All the book details, authors and publication detils are stored in the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas). This is a _free/ shared_ account on [Atlas](https://www.mongodb.com/cloud/atlas). **So Please use it wisely**

<ol start=8>
 <li>Login as well as Logout feature is added </li>
 <li>Error will be shown if the credentials are not correct</li>
</ol>

10. _for simplicity passwords are not encrypted_

<!---
<ul>
 <li> Real time communication is supported using <a href="https://www.npmjs.com/package/socket.io">Socket.io</a>
 <li> Rooms with users are supported </li>
 <li> Conversation of a specific rooms will be shown on clicking the corresponding room</li>  
</ul>

- _for mobile screen user can go to the rooms page by clicking the `<-` icon at the end of the screen_
- Multiline message can be send by hitting `Ctrl + ENTER`
- To send a message hit `ENTER` key

<ul>
 <li> Online / Offline status are shown by the <i>violet dot</i> </li>
 <li> Read / Unread status of conversation is supported
 <li> All the conversation are stored in the database i.e. <i>persistant</i>
 <li> All the timestamps are shown in <i>UTC</i> format to taken into cross browser differences
</ul>

-->
## Installation

Clone the repository:

```
git clone git@github.com:anijitsahu/simple-apollo-server-graphql-lambda-ui.git
```

Navigate inside the directory:

```
cd simple-apollo-server-graphql-lambda-ui
```

Install all the necessary dependecies

```
npm install
```

Now run the server:

```
npm run serve
```

### Login to book search

---

1. Open web browser and type`http://localhost:8080` in the address bar to load the application 
2. In one browser login with username `admin` and password `admin123`


**Test users**

| Username | Password  |
| -------- | --------- |
| admin   | admin123 |


_tested with latest versions of <img src="screenshots/chrome.png" width="20px" title="Google Chrome">[Google Chrome](https://www.google.com/chrome/) and <img src="screenshots/firefox.png" width="25px" title="Firefox Developer edition">[Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)_

## Screenshots

Some screens of the application is given below for better understanding.

Desktop as well as Mobile version of the screenshots are given side by side.

<p> Login Screen <br/> 
 <img src="screenshots/desktop 1.png" width="590px" title="Login screen"/>
 <img src="screenshots/mobile 1.png" width="190px" title="Login screen"/> 
</p>
 
 <p> Entering credentials <br/> 
 <img src="screenshots/desktop 2.png" width="590px" title="Entering credentials screen"/>
 <img src="screenshots/mobile 2.png" width="190px" title="Entering credentials screen"/> 
</p>

<p> After submitting credentials <br/> 
 <img src="screenshots/desktop 3.png" width="590px" title="After submitting credentials screen"/>
 <img src="screenshots/mobile 3.png" width="190px" title="After submitting credentials screen"/> 
</p>

<p> If credentials are not correct <br/> 
 <img src="screenshots/desktop 4.png" width="590px" title="If credentials are not correct screen"/>
 <img src="screenshots/mobile 4.png" width="190px" title="If credentials are not correct screen"/> 
</p>

<p> After a successful login  <br/> 
 <img src="screenshots/desktop 5.png" width="590px" title="After a successful login screen"/>
 <img src="screenshots/mobile 5.png" width="190px" title="After a successful login screen"/> 
</p>

<p> When a new user joins <br/> 
 <img src="screenshots/desktop 6.png" width="590px" title="When a new user joins screen"/>
 <img src="screenshots/mobile 6.png" width="190px" title="When a new user joins screen"/> 
</p>

<p> When a new user joins (2nd browser) <br/> 
 <img src="screenshots/desktop 7.png" width="590px" title="When a new user joins (2nd browser) screen"/>
 <img src="screenshots/mobile 7.png" width="190px" title="When a new user joins (2nd browser) screen"/> 
</p>

<p> Sender type some message <br/> 
 <img src="screenshots/desktop 9.png" width="590px" title="Sender type some message screen"/>
 <img src="screenshots/mobile 9.png" width="190px" title="Sender type some message screen"/> 
</p>

<p> Receiver's room is updated <br/> 
 <img src="screenshots/desktop 10.png" width="590px" title="Receiver's room is updated screen"/>
 <img src="screenshots/mobile 10.png" width="190px" title="Receiver's room is updated screen"/> 
</p>

<p> Logout functionality <br/> 
 <img src="screenshots/desktop 11.png" width="590px" title="Logout functionality screen"/>
 <img src="screenshots/mobile 11.png" width="250px" title="Logout functionality screen"/> 
</p>
