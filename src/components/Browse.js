import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpComingMovies from '../hooks/useUpComingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComingMovies();

  const showGptSearch = useSelector(store=>store.gpt.showGptSearch);
  
  return (
    <div>
      <Header/>
      {showGptSearch ? (<GptSearch/>) :(
      <>
      <MainContainer/>
      <SecondaryContainer/>
      </>)}
    </div>
  )
}

export default Browse