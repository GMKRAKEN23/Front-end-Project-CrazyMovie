# Front-End-Project-CrazyMovie
## Project CrazyMovie, a user-friendly movie app for everyone!
<div align="center">
  <img src="https://github.com/GMKRAKEN23/Front-end-Project-CrazyMovie/assets/149949090/7c0bd02f-7dd3-4bfa-9530-e1f77facb1d6" alt="Homepage_CrazyMovie";">
  <img src="https://github.com/GMKRAKEN23/Front-end-Project-CrazyMovie/assets/149949090/bddb5958-6736-41db-9b05-0d58dcc2ee61" alt="Détails_Movie_CrazyMovie";">
  <img src="https://github.com/GMKRAKEN23/Front-end-Project-CrazyMovie/assets/149949090/d20a54a9-84bb-4f56-8e99-d0938ca244e8" alt="Search_SCrazyMovie">
  <img src="https://github.com/GMKRAKEN23/Front-end-Project-CrazyMovie/assets/149949090/76546817-7c50-4c30-9c41-c1e3eda1f53e" alt="Watchlist">
</div>

## Description 
This application is exclusively designed as a React web application and will not be expanded to include a desktop version! 

Here is the link to the project hosted on Vercel : [Crazy Movie App](https://front-end-project-crazy-movie.vercel.app/)   

The CrazyMovie app is a web app built with React that allows users to follow movie news and search for information about any movie.

The application is divided into 5 principale parts

- Homepage
- Details movie
- Search movie
- Watchlist
- ErrorPage   
  
1. The Homepage contains 2 components: 
The Trending component which contains trending movies.
The ListMovies component which allows you to watch 3 categories of films:
a) popular films 
b) top rated 
c) upcoming films

2. The detailsMovie page allows you to see the most important details of the movie like :
a) rating
b) genre
c) release date
d) duration
e) preview

Note : I used the slice method (JavaScript) to limit the number of films to 18 for each section allowing a more simplified and easy search for the user.

3. The search movie page contains 2 components:
The SearchBar component allows you to search for any movie from an API call (TMDB).
The ContainerGenre component allows you to search for films in their respective categories. Each category contains a carousel that allows you to swipe to the right and choose the films that interest you the most.

4. CrazyMovie's Watchlist feature offers users the ability to create their own list of favorite movies. Browsing through the vast collection of movies offered by the app, users can add movies to the watchlist page with a single click. This allows them to keep track of which films they want to watch later or which they particularly enjoyed.
   
Once a movie is added to the watchlist, users can easily find it!

5. The errorPage displays an appropriate elegant message based on the HTTP error code : 400, 401, 404, 503. 

## Technologies
1. REACT.JS
2. JAVASCRIPT
4. TAILWIND CSS 
5. CANVA
6. CSS

## Librairies 
1. SWIPER.JS  
2. HAMBURGER-REACT
3. REACT-ROUTER-DOM

## API
1. The Movie Database (TMDB)
