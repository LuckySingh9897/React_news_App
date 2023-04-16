import React from 'react'

const Newsitem =(props)=> {

 
    let  {title, description,imageUrl,newsUrl,author,date ,source}=props;
    return (
      <div className="my-3">
       <div className="card" >
  <img src={imageUrl?imageUrl:"https://images.moneycontrol.com/static-mcnews/2023/03/Intro-new-1-682x435.jpg"} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h6 className="card-title">{title?title:"News"}   <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex :'1',left:'90%'}}>
   {source}
    
  </span></h6>
    <p className="card-text">{description?description:"Click on Read more to know more"}</p>
    <p className="card-text"><small className="text-muted">By {!author?"Unknown" :author} on {new Date (date).toGMTString()}</small></p>
    <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary btn-dark" >Read More</a>
  </div>
</div>
      </div>
    )

}

export default Newsitem
