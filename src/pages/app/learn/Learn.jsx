import React from "react";
import style from "./Learn.module.css";
import coursesData from "../../../data/courses.json";
import { Link, Outlet } from "react-router-dom";
// Task4: Import all the required elements from the react-router-dom
import { useParams } from "react-router-dom";

function Learn() {
const {id,Chapterid}=useParams();

 const Course= coursesData.find((data)=>data.id===id);
//  console.log(Course)

 const getChapterid=(id)=>{
  return id;

 }


  return (
    
    //  Course.chapters.map((i)=>{
     
    <div className={style.courses_container}>
      <div className={style.top_head}>
        {/* Task4: Create Link to go back to the Courses page */}
      <Link to="/">  <h2 className={style.back}>{"<<"}</h2> </Link>

        {/* Task4: Title of the Course */}
        <h1 className={style.heading}>{Course.title}</h1>
      </div>
      <div className={style.chapter_box}>
        <div className={style.chapters}>
          <h1>Chapters</h1>
          <hr />
          <ul> {Course.chapters.map((i,idx)=>{
          return(
            <div className={style.chapterId} key={idx}> 
           <Link to={`chapter/${i.chapter}`}>{i.title}</Link>
            </div>

          )
})}
          
          </ul>
        </div>
      
      <div className={style.courses}>
        {/* {Course.chapters.filter((i)=>i.chapter==Chapterid)} */}
        <Outlet context={{...Course}} />
      </div>
      
      
    </div>
</div>
//  })
  );
  
}

export default Learn;
