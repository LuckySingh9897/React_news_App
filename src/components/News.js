import React, { useState, useEffect} from 'react'
import Newsitem from './Newsitem' 
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {


  const [articles , setArticles]=useState([])
  const [loading , setLoading]=useState(true)
  const [page , setPage]=useState(1)
  const[ totalResults, setTotalresults]=useState(0)
  
  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const updateNews=async()=>{
  props.setProgress(10)
  let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=97ef0f49835b4d629716231db5e69718&page=1&pagesize=${props.pagesize}`;
  
   setLoading(true)
  let data=await fetch(url);
  props.setProgress(50)
  let parsed_data= await data.json();

 
  setArticles(parsed_data.articles)
  setTotalresults(parsed_data.totalResults)
  setLoading(false)
  props.setProgress(100)
}
useEffect(()=>{

updateNews();

},[])

 

 const fetchMoreData = async() => {
  
     
     
    let url=`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=97ef0f49835b4d629716231db5e69718&page=${page+1}&pagesize=${props.pagesize}`;
    setPage(page+1)
  
     
    let data=await fetch(url);
    let parsed_data= await data.json();
    

    setArticles(articles.concat(parsed_data.articles))
    setTotalresults(parsed_data.totalResults)
    

  };

  
    return (
      
      <>
        
      

       <h2 className='text-center' style={{margin:'34,0'}}>NEWS APP- Top  {capitalizeFirstLetter(props.category)} Headlines</h2> 
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={<Spinner/>}
        >
 <div className='container my-3'>
        
        <div className="row">
             {articles.map((element)=>{
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
 News.defaultProps={
  country:'in',
pazesize:6,
category:"general"  

}
 News.propTypes={
country:PropTypes.string,
pagesize:PropTypes.number,
category:PropTypes.string,
apiKey:PropTypes.string
}

export default News
