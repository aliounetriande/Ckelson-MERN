import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Menu = (cat) => {

  const [posts, setPosts] = useState([])
  

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const res = await axios.get(`http://localhost:8080/api/posts/?cat=${cat}`);
        setPosts(res.data)
      }catch (err) {
        console.log(err)
      }
    }
    fetchData();
  }, [cat]);

    // const posts = [
    //     {
    //       id: 1,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //       img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
    //     },
    //     {
    //       id: 2,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //       img: "https://www.fidjil.com/wp-content/uploads/2024/03/photo_2024-03-12_09-44-11-768x960.jpg"
    //     },
    //     {
    //       id: 3,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //       img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
    //     },
    //     {
    //       id: 4,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //       img: "https://www.fidjil.com/wp-content/uploads/2024/03/photo_2024-03-12_09-44-11-768x960.jpg"
    //     },
    //     {
    //       id: 5,
    //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    //       desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo vel dolore deleniti veritatis, quisquam aut numquam, at sequi excepturi iste soluta delectus voluptatem nobis, tempore ratione magni repellat perferendis praesentium",
    //       img: "https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg"
    //     },
    //   ];
        
  return (
    <div className='menu'>
        <h1>Vous aimeriez aussi</h1>
        {posts.map((post)=>(
            <div className="post" key={post.id}>
                <img src={`../upload/${post?.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Voir plus</button>
            </div>
        ))}
    </div>
  )
}

export default Menu