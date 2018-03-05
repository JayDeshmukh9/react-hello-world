import React from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './src/search_bar.jsx';
import VideoList from './src/video-list.jsx';
import VideDetail from './src/video-detail.jsx';

const API_KEY = '#' 	

class App extends React.Component {
   
   constructor(props) {
   	super(props);
   	this.state={  
   		videos : [],
   		selectedVideo:null,
   	};
      this.videoSearch("tony stark");
   }

   videoSearch(term) {
      YTSearch({key:API_KEY,term:term},(videos) => {
         this.setState({
            videos:videos,
            selectedVideo:videos[2]
         });
      });
   }

   render() {
      return (
         
         <div>
            <SearchBar onSearchTermChange = {
                  term => this.videoSearch(term)
               }
            />
            <VideDetail video={this.state.selectedVideo} />
            <VideoList 
            	onVideoSelect={
                  selectedVideo => this.setState({selectedVideo})
               }
            	videos={this.state.videos}
            />
         </div>
      );
   }
}
export default App;
