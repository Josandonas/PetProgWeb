import {createAppContainer, createSwitchNavigator} from  'react-navigation';

import Login from './pages/Login';
import List from './pages/List';
import Book from './pages/Book';
import Dados from './pages/Dados';

const Routes = createAppContainer(
    createSwitchNavigator(
        {
            Login,
            Dados,
            List,
            Book
        }
    )
)
export default Routes;