import Header from './components/header';
import MovieForm from './components/movieForm';
import MovieList from './components/movieList';
import {DataContextProvider} from './context/dataContext';

function App() {
    return (
        <div className='w-full h-full'>
            <Header/>
            <div className="grid grid-cols-2 gap-4 w-full">
                <DataContextProvider>
                    <MovieForm/>
                    <MovieList/>
                </DataContextProvider>
            </div>
        </div>
    );
}

export default App;
