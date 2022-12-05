import React from 'react';
import '../App.css';
// import {Link} from 'react-router-dom';
import { useState } from "react";
  
const ReadMore = ({ children }) => {
  const text = children
  const [isReadMore, setIsReadMore] = useState(true)
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }
  return (
    <p className="">
      {isReadMore ? text.slice(0, 300) : text}
      <span onClick={toggleReadMore} className="text-primary pointer">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  )
}

const StarRating = () =>{
  const rating = 3
  return(
    <div>
      {[...Array(3)].map((star) => {        
        return (         
          <span className="star"><i className="fa fa-star px-1"></i></span>        
        );
      })}
      {[...Array(2)].map((star) => {        
        return (         
          <span className="star"><i className="fa fa-star-o px-1"></i></span>        
        );
      })}
    </div>
  )
}

function Home() {
  return (
    <div className='px-5 py-3 bg-secondary'>
      <p className='h1 mb-4 text-center text-white'>Blogs</p>
      <div className='bg-white rounded-2'>
        <div className='bg-dark text-white  px-4  rounded-top'> 
          <span className='h4'>Zion Adventure Photog</span>
          <span className='float-end'><StarRating/></span>
          <p className='small text-capitalize text-secondary'>created by: Yashodhan Chaudhari on 10/03/2022</p>
        </div>
        <div className='px-4 py-1 justify'>
          <ReadMore >
            When you're first approaching the question of how to start a blog, check out Zion Adventure Photog. The blog has a dual purpose: owner Arika’s photography portfolio and establishing her expertise of the Zion area. With these, she’s able to make money blogging.  
            The blog’s ruggedly playful green and yellow color scheme evokes nature and sunshine. The blog’s homepage features visual testimonials of happy clients enjoying their adventures. She embeds her Instagram Feed directly onto her site, spreading the word about her service and drawing people deeper into her brand.
            The blog design mirrors its content in depth and expertise. Detailed posts provide detailed guidance on activities such as canyoneering and hiking. From the written content, it’s clear that Arika is an expert in her field, and the visuals confirm her photography skills.
          </ReadMore>
        </div>
        <div className='bg-dark text-white ps-4 pe-2 py-2 rounded-bottom'>
          <div class="row g-3">
            <div class="col-4">
              <input type="text" class="form-control form-control-sm mt-1" placeholder="Comment" aria-label="City"/>
            </div>
            <div class="col-6">
              <button type="submit" class="btn btn-secondary btn-sm"><i className="fa fa-2x fa-comment"></i></button>
            </div>
            <div class="col-sm ms-5">
              <button type="submit" class="btn btn-secondary btn-sm"><i className="fa fa-2x fa-thumbs-up"></i></button>
            </div>
            <div class="col-sm me-2">
              <button type="submit" class="btn btn-secondary btn-sm"><i className="fa fa-2x fa-thumbs-down"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Home