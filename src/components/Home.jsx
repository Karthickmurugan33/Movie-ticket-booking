import React from "react";
import style from "./style/home.module.css";
import { Link } from "react-router-dom"
import MovieList from "./movieDetails/MovieList";

const Home = () => {

  return (
    <div>
      <header className={`${style.head}`}>
        <h3>BOOK YOUR MOVIES</h3>
        <Link to={"/english"}> <button className={`${style.btn}`}>English Movies</button></Link>
        <Link to={"/tamil"}> <button className={`${style.tbtn}`}>Tamil Movies</button></Link>

      </header>
      <h1> It All Starts Here!</h1>
      <div className={`${style.allmovies}`}>
        <div>
          <iframe width="400" height="200" src="https://www.youtube.com/embed/NmzuHjWmXOc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write;
          encrypted-media; gyroscope; picture-in-picture;
            web-share"  ></iframe>
          <p>The Shawshank Redemption</p>
          <button><Link to={"/kantara"} >  <div className={`${style.movies}`}>
            BOOK
          </div></Link></button>
        </div>
        <div>
          <iframe width="400" height="205" src="https://www.youtube.com/embed/i96VS_z8y7g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
          encrypted-media; gyroscope; picture-in-picture;
           web-share" ></iframe>
          <p>The Godfather</p>
          <button><Link to={"/pathan"} >  <div className={`${style.movies}`}>
            BOOK
          </div></Link></button>
        </div>
        <div>
          <iframe width="400" height="205" src="https://www.youtube.com/embed/qN3wfuPYTI4" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          <p>Leo</p>
          <button><Link to={"/fastandfurious"} >  <div className={`${style.movies}`}>
            BOOK
          </div></Link></button>
        </div>
        <div>
          <iframe width="400" height="205" src="https://www.youtube.com/embed/x8-7mHT9edg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
         gyroscope; picture-in-picture; web-share" ></iframe>
          <p>pursuit of happiness</p>

          <Link to={"/book"} >   <button className={`${style.movies}`}>
            BOOK
          </button></Link>
        </div>




      </div>
    </div >
  );
};

export default Home;
