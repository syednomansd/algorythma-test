import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/searchBar';
import VideoDetail from './components/videoDetail';
import VideoHistory from './components/videoHistory';

const API_KEY = "AIzaSyD1v6nWzVhaa1LrrG8cdTsE-T4ojOzOG80";


// Create a new component class. This component should produce some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      history: []
    };

     this.videoSearch('https://www.youtube.com/watch?v=cJgEFywFXkw');
  }

  videoSearch (term) {
    this.setState(prevState => ({
      history: [...prevState.history, { "name": term }]
    }))
    YTSearch({key: API_KEY, term: term}, (videos) =>{
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const { selectedVideo, history } = this.state;
    const videoSearch = _.debounce((term)=> {this.videoSearch(term)}, 400);
    return (
      <div>
        <SearchBar onTermChange={videoSearch}/>
        <VideoDetail video={selectedVideo} />
        <VideoHistory history={history} />
      </div>
    );
  }
}

// Take this component's generated HTML and put it on the page (component instance, target)
ReactDOM.render(<App />, document.getElementById('app'));
