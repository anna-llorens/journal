import { NotificationBell } from '../notifications/NotificationBell';
import { Search } from '../search/Search';
import './Header.scss';

export const Header = () => {
  return <div className='header'>
    <div className='content'>
      <NotificationBell />
      <Search />
    </div>
    <h3 className='title'>My journal previewer</h3>
  </div>
}