import './NotificationBell.scss';
import { ReactComponent as Bell } from '../../static/images/bell.svg';
import { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../../context/articles/ArticlesContext';

export const NotificationBell = () => {
  const { unRead } = useContext(ArticlesContext);
  const [badgeCount, setCount] = useState(unRead);
  useEffect(() => {
    setCount(unRead);
  }, [unRead]);

  return <>
    {badgeCount > 0 ? <span className='counter' data-badge={badgeCount}>
      <Bell />
    </span> : <Bell />}
  </>
}