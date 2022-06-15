


import React, { createContext ,useState} from 'react'
 
export const usercontext =createContext()
const Home = (props) => {
    const[data,setdata]=useState([
      {
        baseUrlImage: "https://image.tmdb.org/t/p/original",
        results: [
          {
            adult: false,
            backdrop_path: "/6KmDXXNVlbtZVCNQgcWGZeJ5DtS.jpg",
            genre_ids: [
              99
            ],
            id: 978444,
            original_language: "fr",
            original_title: "Top Gun : les coulisses du grand retour",
            overview: "",
            popularity: 385.133,
            poster_path: "/pSs9HbhK5rvHDKlH5YcLTSrPzih.jpg",
            release_date: "2022-05-19",
            title: "Top Gun : les coulisses du grand retour",
            video: false,
            vote_average: 5,
            vote_count: 2
          },
          {
            adult: false,
            backdrop_path: "/BlC5QrSHnEHFAjAYrLdngUIA8r.jpg",
            genre_ids: [
              35,
              28,
              99
            ],
            id: 828853,
            original_language: "en",
            original_title: "Jackass 4.5",
            overview: "Through outrageous, never-before-seen footage, witness the making of the Jackass crew's last go at wild stunts.",
            popularity: 317.575,
            poster_path: "/bl686OSeMQOvs90IQAgt8QipCsB.jpg",
            release_date: "2022-05-20",
            title: "Jackass 4.5",
            video: false,
            vote_average: 6.6,
            vote_count: 134
          },
          {
            adult: false,
            backdrop_path: "/okUGREWC4LN2TSjFX0AOiNJhzdN.jpg",
            genre_ids: [
              99
            ],
            id: 965143,
            original_language: "ko",
            original_title: "사이버 지옥: n번방을 무너뜨려라",
            overview: "Anonymous and exploitative, a network of online chat rooms ran rampant with sex crimes. The hunt to take down its operators required guts and tenacity.",
            popularity: 266.963,
            poster_path: "/eRlW6yvXHyXPuN0Ea6u6Sc48lGm.jpg",
            release_date: "2022-05-17",
            title: "Cyber Hell: Exposing an Internet Horror",
            video: false,
            vote_average: 6.9,
            vote_count: 36
          },
      ]
       
}])
  return (
    <div>
        <usercontext.Provider value={[data,setdata]}>
            {props.children}
        </usercontext.Provider>

    </div>
  )
}

export default Home








// import React,{useContext} from 'react'
// import Movie from './Movie'

// const Home = () => {
//   const [movies,setMovies] =useContext([{
//     id: 978444,
//     poster_path: "https://image.tmdb.org/t/p/original",
//       release_date: "2022-05-20"
//  },
// {
//   id: 828853,
//   poster_path: "https://image.tmdb.org/t/p/original",
//       release_date: "2022-05-19"
// } ]);
// const apiurl =
//   return (
//     <div>
//       <Movie movies={movies}/>
//     </div>
//   )
// }

// export default Home


























// import React from 'react'
// import './Style.css'
// // import img1 from './img1.jpg'
// // import img2 from './img2.jpg'




// const Home = () => {
//   return (
    
 
//  <div>
   
//     {/* <div className='card-body1'>
//       <h6 className='h5'>Vingadores</h6>
//          <img src={img1}  className="images" alt=""/>
//          <h6  className='h5' >Releasedate:2022</h6>
//   </div >
//   <div className='card-body2'>
//   <h6 className='h5'>Avengers</h6>
//          <img src={img2}  className="images" alt=""/>
//          <h6  className='h5' >Releasedate:2023</h6>
//          </div> */}
// </div>
  

    
        
//   )

// }

// export default Home