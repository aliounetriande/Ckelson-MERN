import React from 'react'
import {useEffect} from 'react'
import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'
import axios from "axios"

const Home = () => {

  const [posts, setPosts] = useState([])

  const cat = useLocation().search
  

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get(`http://localhost:8080/api/posts${cat}`)
        setPosts(res.data)
      }catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [cat]);

  //const posts = [
   // {
    //  id: 1,
    //  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      //desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
     // img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
   // },
    //{
     // id: 2,
      //title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //  img: "https://www.fidjil.com/wp-content/uploads/2024/03/photo_2024-03-12_09-44-11-768x960.jpg"
    //},
   // {
      //id: 3,
     // title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
     // img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
   // },
   // {
     // id: 4,
     // title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
     // img: "https://www.fidjil.com/wp-content/uploads/2024/03/photo_2024-03-12_09-44-11-768x960.jpg"
    //},
    //{
      //id: 5,
     // title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
     // desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
     // img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
   // },
    //{
     // id: 6,
    //  title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //  img: "https://www.fidjil.com/wp-content/uploads/2024/03/photo_2024-03-12_09-44-11-768x960.jpg"
   // },
  //];

  const getText = (html) =>{
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent
  }

  return (
    <div className='home'>
      <div className="posts">
        {posts.map(post=>(
          <div className="post" key={post.id}>
            <div className="img">
              <img src={`../upload/${post.img}`} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
                <p>{getText(post.desc)}</p>
                <button>Voir plus</button>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home