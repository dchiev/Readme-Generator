# Readme Generator - Dan Chiev
<img src=".\repo_readme_assets\gif1.gif" width="300"> <img src=".\repo_readme_assets\gif2.gif" width="300">

Link to repo: https://github.com/dchiev/Readme-Generator

Before you run the application, run ``npi install`` to install required dependencies.

## Description


This application provides a usable readme in whatever application your building. Just answer a few questions and the CLI will generate a readme.md, with the appropiate license, for your application. 


## Process 

1. We first select the proper requirements for inquirer, fs, and the generateMarkdown.js file. 

2. We then create a object of input questions via inquirer prompts. 

3. At the beginning of the function ``init ()``, we have switch, breaks, and a default to select the proper badge depending on the user's selction. 

4. After all the questions are answered, we run ``fs.writeFileSync`` to generate the readme.md. 

## Contact Info 

Contact Dan Chiev at danchiev2@grouptwo.com or visit github.com/dchiev to see more of my work.
