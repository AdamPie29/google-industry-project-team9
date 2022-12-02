import "./Homepage3.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import VideoLibrary from "../../components/VideoLibrary/VideoLibrary"
import { useState, useEffect } from 'react';
import axios from "axios";
import Menu from "../../components/Menu/Menu";


function Homepage3() {

  const [videoData, setVideoData] = useState([]);
  
  useEffect(() => {
    axios.get(`http://localhost:8080/videos`)
      .catch((error) => {
        console.log(error)
      })
      .then((response) => {
        setVideoData(response.data);
      });
  }, []);

  return (
    
    <main className="homepage">
      <Menu />
      <Sidebar />
      <div>
        <SuggestionBar />
        <VideoLibrary videoData={videoData} />
      </div>
    </main>
  )
}
export default Homepage3;