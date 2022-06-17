import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../../pages/MainPage';


const App = () => {    
    return (
        <Router>
            <Switch>
                <Route exact path="/" >
                    <MainPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;