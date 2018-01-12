import { AppRegistry } from 'react-native';
import App from './App';

// Untuk IOS & ANDROID
import Latihanprops from './components/Latihanprops';
import MultipleGreeting from './components/MultipleGreeting';
import LatihanState from './components/LatihanState';
import LatihanStyle from './components/LatihanStyle';
import LatihanTextInput from './components/LatihanTextInput';
import LatihanButton from './components/LatihanButton';
import LatihanTouchable from './components/LatihanTouchable';
import LatihanVerticalScrollView from './components/LatihanVerticalScrollView';
import LatihanHorizontalScrollView from './components/LatihanHorizontalScrollView';
import LatihanFlatList from './components/LatihanFlatList';

// Untuk ANDROID
import LatihanViewPager from './components/LatihanViewPager';

AppRegistry.registerComponent('LatihanPertama', () => LatihanFlatList);


// BY UGI ISPOYO WIDODO