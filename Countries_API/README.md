# Countries API Project

The Countries API project is a web application built with ReactJS that allows users to browse, search, and filter information about countries from around the world. Leveraging a RESTful API to fetch data, the application provides comprehensive details about each country, including population, region, capital, languages, and more. This project demonstrates the use of React's powerful features, such as hooks, state management, routing, and reusable components, to create a dynamic and responsive user experience.

## Demonstration

- Visit the URL for demonstration [Project](https://www.youtube.com/watch?v=3JZaZKSXZAI)
## Table of Contents

- Introduction
- Project Overview
- Getting Started
- Project Structure
- What are the concepts involved?

## Introduction

This project involves the use of countries api available from this url (https://restcountries.com/) .

## Projects Overview

This project allows us to search countries , view them individually and also filter them regionwise. This provides with regions such as Asia, Africa, Antarctica, America, Europe and Oceania.

## Getting Started

To get started with any of the projects, follow the instructions below.

- Prerequisites
  - Node.js (v14 or higher)
  - npm or yarn
  - parcel

## Running the Project

To start the development server for the selected project,
_clone the repository_ and run:

- npm run  
  _or_
- yarn start

This will run the app in development mode. Open http://localhost:1234 to view it in the browser.

## Project Structure

1. Index.html : Root file containing the root component and placeholder of the entire React project.
2. Index.jsx : Contains the routing information as well as which files to be rendered at what path.
3. App.jsx : File containing the main components Header and the Outlet which shall be further divided into Countries and CountryDetails component.
4. Components/\* : This folder creates different files which are individual components responsible for the different functionalities.

- Countries : responsible for display of different countries
- CountryCard : responsible for display of an individually country card. Also can navigate to countrydetails page as the individual country card is linked to the respective country's details.
- Error : For displaying the error page when the url is invalid or we have hit an unknown area in our api.
- Header : For display of the header and also responsible for light/dark theme in the project.
- Home : Holds different countries , searchbar, list of values for different filters and also country details.
- LOV : Options for different filters
- SearchBar : For searching different countries.

5. CustomHooks : This folder contains custom hook "useFilter" for filtering the region of the countries.

## What are the concepts involved?

1. useState Hook : State management, state Immutability
2. Learnt Context API : Same can be used for toggling the themes. Currently themes are manipulated using the react-router-dom outlet context hook. And directly the styling is applied on the App.jsx file allowing the entire app's theme to remain uniform. However individual pages can be manipulated using the context api.
3. Use of parcel bundler.
4. use of module.css files to individually style the pages.
5. Making a custom hook.
6. Prop drilling and sharing data between the child components as well as between the parent and the child component.
7. Using the useEffect Hook for controlling the rendering of a component based on changes in different variables/state.
