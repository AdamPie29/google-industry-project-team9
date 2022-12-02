import "./Homepage5.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import VideoLibrary from "../../components/VideoLibrary/VideoLibrary"
import { useState, useEffect } from 'react';
import axios from "axios";
import VideoModal from "../../components/VideoModal/VideoModal";



function Homepage5() {

  const [show, setShow] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const [showExp1, setShowExp1] = useState(false);

  useEffect(()=> {
    setTimeout(function() {
    setShow(true); 
  }, 5000);
  }, [])

  
  useEffect(() => {
    axios.get(`http://localhost:8080/videos`)
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        setVideoData(response.data);
      });
  }, []);

  const handleClick = (status) => {
    setShow(status)
  }

  const close = () => {
    setShow(false)
  }

  // const handleClickSearch = () => {
  //   setShowExp1(true)
  // }

  // const closeExp = () => {
  //   setShowExp1(false)
  // }


  return (
    
    <main className="homepage">
      <VideoModal />
      <Sidebar />
      <div>
        <SuggestionBar />
        <VideoLibrary videoData={videoData} />
      </div>
    </main>
  )
}
export default Homepage5;