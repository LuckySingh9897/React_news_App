import React, { Component } from 'react'
import Newsitem from './Newsitem' 
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps={
    country:'in',
  pazesize:6,
  category:"general"  

}
static propTypes={
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string,
  apiKey:PropTypes.string
}
  articles=[
    
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    }
  ]
  constructor(props){
       super(props);
     
       this.state={
articles:[],
loading:false,
page:1,
totalResults:0
       }
  }
 async componentDidMount(){
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97ef0f49835b4d629716231db5e69718&page=1&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
     
    let data=await fetch(url);
    this.props.setProgress(50)
    let parsed_data= await data.json();
  
    this.setState({articles : parsed_data.articles,totalResults:this.state.totalResults,loading:false})
    this.props.setProgress(100)
  }

  fetchMoreData = async() => {
    this.setState({page: this.state.page+1})
     

    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97ef0f49835b4d629716231db5e69718&page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
     
    let data=await fetch(url);
    let parsed_data= await data.json();
    
    this.setState({articles : this.state.articles.concat(parsed_data.articles),totalResults:this.state.totalResults,loading:false})

  };
   jumptoPrevious= async()=>{
      console.log("Previous");

      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=97ef0f49835b4d629716231db5e69718&page=${this.state.page-1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})
     
    let data=await fetch(url);
    let parsed_data= await data.json();
    
    this.setState({page: this.state.page-1,articles : parsed_data.articles,loading:false})

   }
    capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
   }
   jumptoNext= async()=>{
    console.log("Next");
    if(!(this.state.page+1> Math.ceil(this.state.totalResults/6))){
      let url=`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey= 97ef0f49835b4d629716231db5e69718  &page=${this.state.page+1}&pagesize=${this.props.pagesize}`;
      this.setState({loading:true})

      let data=await fetch(url);
      let parsed_data= await data.json();
      
      this.setState({page: this.state.page+1,articles : parsed_data.articles,loading:false})
    }
 }
  render() {
    return (
      
      <>
        
      

       <h2 className='text-center' style={{margin:'34,0'}}>NEWS APP- Top  {this.capitalizeFirstLetter(this.props.category)} Headlines</h2> 
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >
 <div className='container my-3'>
        
        <div className="row">
             {this.state.articles.map((element)=>{
              return  <div className="col-md-4" key={element.url}>
              <Newsitem title={element.title!=null?element.title.slice(0,45):""} description={element.description!=null?element.description.slice(0,90):"" } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
              </div> 
               
             })}
            
            

        </div>
      
       
        
        
      </div>
      </InfiniteScroll>
   
      </>
     
    )
  }
}

export default News
