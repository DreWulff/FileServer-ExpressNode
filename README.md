# ***[WIP]*** File Server - Express.js
## Description
Serverside app for managing clients requests for downloading and updating different sets of files.  
Written in JavaScript with the Express framework for the Node environment.

> [!WARNING]
> This is a work-in-progress, and even though it works, it carries huge security risks.

## Setup
Clone this repository in any folder with the following command:
```
git clone https://github.com/DreWulff/FileServer-ExpressNode
```
To install Node.js make sure to follow the instructions in [How to Install Node.js](https://nodejs.org/en/learn/getting-started/how-to-install-nodejs).

Having Node installed, to install the packages needed to run the server run:
```
npm install
```

## Docker Setup
It is highly recommended to run the app in Docker, as to avoid conflicts with different installed versions of Node and packages for different applications.

To setup and run a Docker container with the app execute the next commands:  
* `build`: This command prepares a container of name `file-download-server`, downloading its required images and resources, and copying the app's files into the container following the sequence defined in the `Dockerfile`.
```
docker build -t file-download-server .
```
* `run`: This command runs the `file-download-server` container, connecting the container's port `3000` to the host's port `3000`.
```
docker run -p 3000:3000 -d file-download-server
```
