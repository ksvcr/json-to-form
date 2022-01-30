import { ReactNode, useState, useCallback } from 'react';

type TabsProps = {
  items: Array<{ title: string; id: string; content: ReactNode }>;
};

export const Tabs = ({ items }: TabsProps) => {
  const [activeId, setActiveId] = useState(items[0].id);

  const handleChange = useCallback((id: string) => {
    return () => setActiveId(id);
  }, []);

  return (
    <>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <button type="button" onClick={handleChange(item.id)}>
              {item.title}
            </button>
          </li>
        ))}
      </ul>
      <div>
        {items
          .filter(item => item.id === activeId)
          .map(item => (
            <div key={item.id} id={`tab-${item.id}`}>
              {item.content}
            </div>
          ))}
      </div>
    </>
  );
};
