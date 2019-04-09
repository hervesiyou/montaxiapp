import { createStackNavigator, createAppContainer} from 'react-navigation'
import Search from '../Components/Search'
import FilmDetail from '../Components/FilmsDetail'

const SearchStackNavigator = createStackNavigator({
    Search:{
        screen: Search,
        navigationOptions:{
            title:"Rechercher"
        }
    },
    FilmDetail:{
        screen:FilmDetail
    }
})


export default createAppContainer(SearchStackNavigator)