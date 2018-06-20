import React, {Component} from 'react';
import movieFeed from './movieFeed'

class Series extends Component {
  constructor(props) {
    super(props);
    this.state= {
      series: []
    }
  }

componentDidMount() {  
  movieFeed
  .fetch()
  .then(res => {
    return res;
  })
  .then(data => {
    let filteredArr = [];
    let sortedAndFormatedArr = [];
    
    data.entries.map(ele => {
      if(ele.programType !== 'movie' && ele.releaseYear >= 2010) {
        filteredArr.push(ele);
        }
      })

    filteredArr.sort(function(a, b) {
      var titleA = a.title.toLowerCase();
      var titleB = b.title.toLowerCase();
      return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
    })
    .map((ele, i) => {
      sortedAndFormatedArr.push(
        <div key = {i}>
          <p>{ele.title}</p>
          <img src={ele.images['Poster Art'].url} style={{maxWidth: '50vw', maxHeight: '50vh' }} />
        </div>
      )
    })
      this.setState({series:sortedAndFormatedArr});
  })
  .catch(err => {
    console.log(err);
  })
}
  render() {
    return(
      <div>
        {this.state.series.slice(0,20)}
      </div> 
    )
  }
};

export default Series;