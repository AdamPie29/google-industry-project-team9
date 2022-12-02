import "./Homepage.scss"
import Sidebar from "../../components/Sidebar/Sidebar"
import SuggestionBar from "../../components/SuggestionBar/SuggestionBar"
import VideoLibrary from "../../components/VideoLibrary/VideoLibrary"

function Homepage() {
  return (
    <main className="homepage">
      <Sidebar />
      <div>
        <SuggestionBar />
        <VideoLibrary />
      </div>
    </main>
  )
}
export default Homepage 