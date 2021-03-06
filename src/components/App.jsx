
// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={window.exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={window.exampleVideoData}/>
//     </div>
//   </div>
// );
//Credentials key: AIzaSyCCFySszTAc7O1MjHwXFJbbyI5cX3w8Gyo
class App extends React.Component { 
  
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onSubmitHandler = this.onClickHandler.bind(this);
    this.state = {
      currentVideo: window.exampleVideoData[0],
      allVideo: window.exampleVideoData,
    };
  }
  onClickHandler(props) {
    this.setState({currentVideo: props});          
  }
  
  onSubmitHandler(props) {
    console.log('ddddddddddddd' + props);
    //this.setState({allVideo: props});
  }

 

  render() {
    return (
      <div>
        <Nav handleSubmit={this.onSubmitHandler}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.allVideo} handleClick={this.onClickHandler}/>
     </div>
   </div>);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
