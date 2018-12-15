# simple-viewer
Example, which describes how Javascript and JSON files can be bundled locally and uploaded automatically to a PlayCanvas Project. The final result can be observed [here](https://launch.playcanvas.com/676862?debug=true).

It uses the [playcanvas-webpack-plugin](https://github.com/whydoidoit/playcanvas-webpack-plugin) package. For more information about how to setup such a project, please read the following description: [babel-playcanvas-template](https://github.com/3d-web-applications/babel-playcanvas-template).

## Requirements
- At least 1 [PlayCanvas Account](https://playcanvas.com/). It does not matter which account type you choose<sup>1</sup>.
- An empty PlayCanvas project. After uploading your Javascript bundle to this project, you must attach all 4 provided scripts to the camera entity. See this [PlayCanvas Project](https://playcanvas.com/editor/scene/676862) for instance.
- Text or code editor, e.g. [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/) including NPM
- After cloning this project, navigate into the new directory and enter <i>npm install</i> to install all required <i>node_modules</i>. Furthermore navigate into <i>upload</i> and open <i>EXAMPLE.config.json</i>. Modify all entries and save your changes. Then rename the file to <i>config.json</i>.

## Footnotes
1. Available PlayCanvas account types: Free/Personal/Organziation
