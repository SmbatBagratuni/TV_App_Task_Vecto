import './App.css';
import data from './data.json';
import Carousels from "./components/Carousel";
import Menu from "./components/Menu";
import Featured from "./components/Featured";
import {useCallback, useMemo, useState} from "react";

function App() {

  const [featuredData, setFeaturedData] = useState(data.Featured);
  const [playVideo, setPlayVideo] = useState(false)
    const onPlayVideo = useCallback(() => {
        if (playVideo) {
            setPlayVideo(false)
        }
        setTimeout(() => setPlayVideo(true), 2000)
    }, [playVideo])

    const sortedMovies = useMemo(() => {
       const lastSelectedMovieId = sessionStorage.getItem("lastSelectedFilm")
        if (lastSelectedMovieId) {
            return data?.TendingNow.sort((a, b) => {
                if (a.Id === lastSelectedMovieId) return -1;
                if (b.Id === lastSelectedMovieId) return 1;
                return b.Duration - a.Duration;
            })
        }
        return data?.TendingNow.sort((a, b) => b.Duration - a.Duration)
    }, [])

    return (
    <div className="App">
        <Menu/>
        <div className={"wrapper"}>
        <Featured playVideo={playVideo} setPlayVideo={setPlayVideo} featuredData={featuredData}/>
        <Carousels onPlayVideo={onPlayVideo} setFeaturedData={setFeaturedData} tendingNow={sortedMovies}/>
        </div>
    </div>
  );
}

export default App;
