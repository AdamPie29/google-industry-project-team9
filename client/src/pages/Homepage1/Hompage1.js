import "./Homepage1.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar";
import { useState, useEffect } from 'react';
import axios from "axios";
import VideoLibrary from "../../components/VideoLibrary/VideoLibrary";
import ModalSearch from "../../components/ModalSearch/ModalSearch";

function Homepage1 () {

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
      <ModalSearch />
      <Sidebar />
      <div>
        <SuggestionBar />
        <VideoLibrary videoData={videoData} />
      </div>
    </main>
  )
}
export default Homepage1;