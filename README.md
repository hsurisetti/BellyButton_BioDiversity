
# Belly Button Bio-Diversity

## Objective

 The objective of the project is to create an interactive dashboaard to visualize the bacteria data of each volunteer and display the respective demographic information and identify the top 10 bacterial species in their belly buttons. Based on this information,  we would be able to identify what species are found which could help in the making of Improbable Beef.

## This project demonstrates 
    
  - Make Data Visualization possible through providing interactive charts which are more accessible and also provide the ability to customize it.
  - Manilpulate , parse and transform the data in JSON format.
  - Demostrate the HTML Bootstraping capabilities
  - Deploy the interactive chart into Github.


The project has been deployed to : https://hsurisetti.github.io/BellyButton_BioDiversity

## Software : JavaScript, Plotly, D3.js, HTML BootStrap, GitHub

## Demographic Information 
 The Demographic information is displayed in the left , with the default volunteer pre-selected. When the user selects a new volunteer ID(Test Subject ID) the demographic information of that volunteer is displayed.

  <img src="https://github.com/hsurisetti/BellyButton_BioDiversity/blob/main/screenshots/DemographicInfo.png" width=100 />

## Top 10 Bacterial Species
   
  The horizontal bar chart has been created to display the top 10 bacterial species which will display the sample values and their corresponding labels along with the hover information when the volunterr ID is selected from the dropdown menu
  The image has been generated with the help of plotly function to trace the object with layout.

 <img src="https://github.com/hsurisetti/BellyButton_BioDiversity/blob/main/screenshots/BarChart.png" width=400 />

## Belly Button Washing Frequency

  A Guage Chart has been generated to demonstrate Belly button washing frequency upon selection of Volunteer ID. Volunteer's weekly washing frequnecy is displayed as a measure from 0-10.

<img src="https://github.com/hsurisetti/BellyButton_BioDiversity/blob/main/screenshots/GaugeChart.png" width=400 />

## Bacterial Cultures per sample

  The bacterial cultures per sample is displayed as a bubble chart based of Volunteer ID which will display the bubbles based of otu ids and sample values as x and y axis respectively.
 <img src="https://github.com/hsurisetti/BellyButton_BioDiversity/blob/main/screenshots/BubbleChart.png" width=500 />

## Customize Dashboard
  
The Dashboard has been customized with the below features using HTML Bootstraping
  - Added an image to the jumbotron
  - Added a background color the webpage
  - Added custom font with contrast for colors as the title and description.
  - Added information about each graph visualization under each graph
  - Added a footer note in the end for further reading about this topic


