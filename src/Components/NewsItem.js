//  in react whenever we use class based component we make use of constructor

//     here we are using the concept of destructuring as if this.props  is the objext to usme se ye dono pull krke title and description ke taur pe provide kra denge

import React from "react";

const  NewsItem =(props)=> {

    let { title, description, imageUrl, newsUrl ,author,date} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !imageUrl
                ? "https://fdn.gsmarena.com/imgroot/news/21/08/xiaomi-smart-home-india-annoucnements/-476x249w4/gsmarena_00.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-muted">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItem;

//  in react in class based components i have two ways to use the props
//  1st we can either use it directly using this.props.propname as passed
//  2nd we can use destructuring of the props as let{can write the name of the variable in it }=this.props and then we can use the sended
//  props directly using the name that we have used in the {}
