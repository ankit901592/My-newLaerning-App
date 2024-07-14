import React from "react";
import styles from "./Chapter.module.css";
import { useParams,useOutletContext } from "react-router-dom";
// import coursesData from "../../../data/courses.json";

function Chapter() {

  const {Chapterid}= useParams();
  const course=useOutletContext();
  // const data=course.chapter.find((i)=>i.title);
  console.log(course);

  const chap= course.chapters.find((chapter)=>String(chapter.chapter)===Chapterid);
  console.log(chap.title);
  
  return (
    <div>
      <h1>{chap.title}</h1>
      <h2>{chap.description}</h2>
      <p className={styles.para}>{chap.details}</p>
      <br />
      <br />
      <div className={styles.videos}>
        {/*TASK:5 CHAPTER VIDEO SRC SHOULD BE GIVEN IN THE SOURCE */}
        <iframe
          width="800"
          height="560"
          src=""
          title="React Video"
          frameborder="1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default Chapter;
