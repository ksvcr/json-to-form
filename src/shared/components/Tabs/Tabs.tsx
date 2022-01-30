import { ReactNode, useState, useCallback } from 'react';
import classNames from 'classnames/bind';

import styles from './Tabs.module.css';

const cx = classNames.bind(styles);

type TabsProps = {
  items: Array<{ title: string; id: string; content: ReactNode }>;
};

export const Tabs = ({ items }: TabsProps) => {
  const [activeId, setActiveId] = useState(items[0].id);

  const handleChange = useCallback((id: string) => {
    return () => setActiveId(id);
  }, []);

  return (
    <div>
      <ul className={cx('nav')} role="tablist">
        {items.map(item => (
          <li key={item.id} role="presentation">
            <button
              className={cx('button', { active: item.id === activeId })}
              type="button"
              onClick={handleChange(item.id)}
              role="tab"
              aria-selected={item.id === activeId}
            >
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div className={cx('panels')}>
        {items
          .filter(item => item.id === activeId)
          .map(item => (
            <div key={item.id} id={`tab-${item.id}`} role="tabpanel">
              {item.content}
            </div>
          ))}
      </div>
    </div>
  );
};
