import { ReactNode } from 'react';

type TabsProps = {
  activeId: string;
  items: Array<{ title: string; id: string; content: ReactNode }>;
};

export const Tabs = ({ items }: TabsProps) => {
  return (
    <>
      <ul id="tabs-tab" role="tablist">
        {items.map(item => (
          <li className="nav-item">{item.title}</li>
        ))}
      </ul>
      <div className="tab-content" id="tabs-tabContent">
        {items.map(item => (
          <div className="tab-pane" id={`tab-${item.id}`}>
            {item.content}
          </div>
        ))}
      </div>
    </>
  );
};
