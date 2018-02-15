* npm init 
* globally install babel 
 	--npm install -g babel
	--npm install -g babel-cli
* add dependencies 
	--npm install webpack --save 
	--npm install webpack-dev-server --save
* Install react and add it to package.json
	--npm install react --save
	--npm install react-dom --save
* Install babel plugin's
	--npm install babel core 
	--npm install babel-loader
	--npm install babel-present-react
	--npm install babel-present-es2015
* Create following files in root dir
	--index.html
	--App.jsx
	--main.js
	--webpack.config.js
* Open webpack.config.js 
	--set entrypoint main.js
	--set port for dev server 
	--set babel loders to search for js files and use es2015
	--use es2015 and react preset 
* Open package.json
	--delete "test" : ....
	--add start command 
		--"start" : "webpack-dev-server --hot"
* Install webpack-dev-server
	--npm webpack-dev-server -g
* Open index.html
	--basic html boilerplate
	--add <div>
	--set its id = "app"
	--add <script type="text/javascript" src="index.js"></script>
* Open App.jsx (react component) 
	--import React from 'react'
	--create a App class 
		--extended from React.Component 
		--render()
			{
				return (<div>Hello World !</div>);
			};
	--export default App
* Import the above component and render it to our app element
	*Open main.js
		--import React from 'react'
		--import ReactDOM from 'react-dom'
		--import App from './App.jsx'
		--(render the  component to root element in index.html)
			--ReactDOM.render(<App /> , document.getElementById('app'));
* Run The server 
	--npm start 
* Open the browser / localhost


