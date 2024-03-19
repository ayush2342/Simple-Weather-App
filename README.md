# Weather App

## Overview
The Weather App is a web application that provides real-time and forecasted weather information for a given location. It uses the Tomorrow.io API to fetch weather data.

## Features
- Display real-time weather information
- Display forecasted weather information for the next few days
- Support for providing location either as latitude and longitude or as a string

## Technologies Used
- React.js
- Tomorrow.io API
- JavaScript (ES6+)
- HTML5
- CSS3

## Getting Started
To run the Weather App locally, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running:
npm install

4. Start the development server by running:
npm start
5. Open your web browser and navigate to http://localhost:3000 to view the app.

## Usage
- Enter a location in the search bar to view weather information for that location.
- Real-time weather information will be displayed immediately.
- Forecasted weather information can be viewed for the next few days.

## API Key
This project uses the Tomorrow.io API to fetch weather data. You need to sign up for an API key on the Tomorrow.io website and replace the placeholder `YOUR_API_KEY` in the code with your actual API key.

## Troubleshooting
1. API Rate Limit Reached
Issue: Users might encounter errors related to reaching the API rate limit, resulting in failed requests.
Troubleshooting Steps:
Check if you've exceeded the API rate limit by making too many requests in a short period.
Consider optimizing your application to make fewer API requests, such as caching data or reducing unnecessary requests.
Verify if you're using the API key correctly and it's still valid. You might need to obtain a new API key if the current one has expired or reached its usage limit.

2. Incorrect Location Input
Issue: Users might input incorrect or invalid location information, leading to failed requests or inaccurate weather data.
Troubleshooting Steps:
Double-check the location input to ensure it's correctly formatted and matches a valid location.
Verify if you're providing latitude and longitude coordinates correctly if using that format.
If providing a location string, ensure it's spelled correctly and includes relevant details like city name and country.

3. Missing API Key
Issue: Users might forget to replace the placeholder API key in the code with their actual API key from Tomorrow.io.
Troubleshooting Steps:
Make sure you've signed up for an API key on the Tomorrow.io website and replaced YOUR_API_KEY in the code with your actual key.
Double-check the API key to ensure it's copied correctly and doesn't contain any typos or extra characters.


## Acknowledgements
- The Weather App was created by Ayush Sharma.
- Contact Number - 7814385173