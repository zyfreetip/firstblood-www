<img src='/resources/img/main/logo_shield_b.jpg' width = '22.5%'>

# FirstBlood.io Home Page
Repository responsible for FirstBlood.io new home page, newly designed UI integrates with  <br>demo screenshots,blog &amp; forum articles and alpha signup collector. 

# Resources Used
`Bootstrap v3.3.7` [(http://getbootstrap.com)]("http://getbootstrap.com")<br>
`Node.js & npm`<br>
`http-server package`<br>
`font-awesome`

##Installing Node.js (if you don't have it)

If you're using OS X or Windows, the best way to install Node.js is to use one of the installers from the Node.js download page. If you're using Linux, you can use the <a href ="https://nodejs.org/en/download/">installer</a>, or you can check <a href = "https://github.com/nodesource/distributions">NodeSource's binary distributions</a> to see whether or not there's a more recent version that works with your system.
    
Test: Run `node -v`. <br>
The version should be higher than `v0.10.32`.

##Updating npm

Node comes with npm installed so you should have a version of npm. <br>However, npm gets updated more frequently than Node does, so you'll want to make sure it's the latest version.<br>

    $ npm install npm@latest -g

# Install & Test Locally

    $ git clone https://github.com/Firstbloodio/firstblood-www.git

First, install this light-weight http server node

    $ sudo npm install http-server
    
-OR install globally, if required*

    $ sudo npm install http-server
    
Access the directory that you cloned this git in

    $ cd [YOURFOLDERNAME]
    
Serve the website

    $ http-server    
   
Load from local browser

    type `localhost:8080` or `http://127.0.0.1:8080` into your browser 
    




