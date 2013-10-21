Concerts-Around-World for Artist
==================

Midterm Project for ITP 404 - Modern Web Tech
Technologies - javascript, google Maps Javascript API, eventful API, Handlebar

Create a single page web application that plots concerts for a musiciian of your choice  on a Google Map via the Eventful.com API. Beneath the map will be a list of all the concerts from the same data pulled from the Eventful API. Feel free to use a different musician.

Your page will render a Google Map when the page loads. Once the page is loaded, your app will make a JSONP request to the Eventful JSONP endpoint below. This endpoint will return a list of concerts and wrap the response data in a callback function named processJSONP. With this data, I want you to iterate over the list of events and plot each event on the Google Map. Each event has a latitude and longitude property for you to use. You will also create a list of the concerts from this same Eventful API data using client-side templating. 

Eventful API JSONP endpoint
http://api.eventful.com/json/events/search?c=music&app_key=API_KEY&page_number=1&date=Future&keywords=limp+bizkit&callback=processJSONP

To get started:

Create the following files:
index.html
main.js
styles.css

Google Maps
Create your own API key to be used in requests to the Eventful API. Visit here for instructions.
Load a Google Map on the page and set the center of the map to: 36.05178307933835, 42.49737373046878
When the page loads, I want your application to make a JSONP request to the Eventful API endpoint above. Iterate over the data contained in the events.event property, which is an array of events, and plot a custom image map marker for each event on the Google Map.
Concert List
Render a list of the concert data next to the map using a client-side templating library of your choice. 
You must display the following data fields:
title (this should a link to the URL specified in the url property)
description
venue_address
city_name
country_name
display an image contained in image.medium
Style your page so that the list of concerts is displayed in a readable, organized way. You should have a Google Map that is roughly 600px for one column and the other column will be a list of all the concerts and should be roughly 400px. Feel free to adjust the sizing to make it look to your liking.

