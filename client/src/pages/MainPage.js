import HeroesList from '../components/heroesList/HeroesList';
import HeroesAddForm from '../components/heroesAddForm/HeroesAddForm';
import HeroesFilters from '../components/heroesFilters/HeroesFilters';

import './mainPage.sass';


const MainPage = () => {
    return (
        <main className="app">
            <div className="content">
                <HeroesList/>
                <div className="content__interactive">
                    <HeroesAddForm/>
                    <HeroesFilters/>
                </div>
            </div>
        </main>
    )
};

export default MainPage;