import * as React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import News from './components/News';
import Profile from './components/Profile';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar/Navbar';
import CssBaseline from '@material-ui/core/CssBaseline';

const app: React.FC = () => {
  return (
    <div className="App">
      <CssBaseline/>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/news' component={News}/>
        <Route path='/login' component={Login}/>
        <Route path='/profile' component={Profile}/>
        <Route component={NotFound}/>
        
      </Switch>
    </div>
  )
}

/** Хук для отслеживания изменения размеров экрана (длины) */
export const useWindowTypeSize = ()=> {
    const [size, setSize] = useState(0);

    useEffect(() => {
        const updateSize = ()=> {
            setSize(window.innerWidth);
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);

    /** Сопоставляет тип экрана по его размеру */
    const getComparisonSizeByType = (): EWindowWidthType => {
       if(size <= MOBILE_WIDTH_SIZE){
           return EWindowWidthType.MOBILE
       } else if(size > MOBILE_WIDTH_SIZE && size <= SMALL_TABLET_WIDTH_SIZE) {
           return EWindowWidthType.SMALL_TABLET
       } else if(size > SMALL_TABLET_WIDTH_SIZE && size <= BIG_TABLET_WIDTH_SIZE) {
           return EWindowWidthType.BIG_TABLET
       } else if(size > BIG_TABLET_WIDTH_SIZE && size <= DESKTOP_WIDTH_SIZE) {
            return EWindowWidthType.SMALL_DESKTOP
       } else
           return EWindowWidthType.BIG_DESKTOP
    }

    return getWindowSizesByTypes(getComparisonSizeByType())
}

export default app
