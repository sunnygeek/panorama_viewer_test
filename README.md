# Basic panorama image viewer
- This is a very basic panorama 360 image viewer that utilizes the open source Pannellum Panorama Viewer, just to test the viability of a self-hosted vs a SAAS solution.
- The image to be used is defined in line #3 of the 'viewer.js' file where a local or url path for an image can be specified.

## Installation:
- Clone the repository
- Create a python virtual environment in project directory
- Install requirements: `pip install flask`

## Usage
- I use a live server tool/extension in VS Code to host the index.html file so the image specified in the viewer.js file is automatically loaded and displayed within the VS Code preview or an external browser.
- Make sure to match the panorama image type with the specified type in the 'viewer.js' line #2 which can be changed for different image types (see the Pallennum Panorama Viewer documentation)