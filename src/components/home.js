import React from 'react';
import MovieTile from './tiles/movieTile';
import SeriesTile from './tiles/seriesTile';

const Home = () => {
  return(
    <div
      style={{
        display:'flex',
        justifyContent:'center',
        flexDirection:'row',
      }}
    >
      <MovieTile />
      <SeriesTile />
    </div>
  )
}

export default Home;