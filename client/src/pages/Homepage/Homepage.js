import "./Homepage.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import VideoLibrary from "../../components/VideoLibrary/VideoLibrary"
import { useState, useEffect } from 'react';
import axios from "axios";
import FirstModal from "../../components/FirstModal/FirstModal";


function Homepage() {

  const [show, setShow] = useState(false);
  const [videoData, setVideoData] = useState([]);

  useEffect(()=> {

    axios.get(`http://localhost:8080/videos`)
    .catch((error)=> {
      console.log(error)
    })
    .then((response)=> {
      setVideoData(response.data);
    });
  }, []);

  // const handleClick = (status) => {
  //   setShow(status)
  // }

  // const close = () => {
  //   setShow(false)
  // }

  return (
    
    <main className="homepage">
      <FirstModal />
      <Sidebar />
      <div>
        <SuggestionBar />
        <VideoLibrary videoData={videoData} />
      </div>
    </main>
  )
}
export default Homepage;