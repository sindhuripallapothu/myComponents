import React, { useState } from 'react';

const SelectList = () => {
    const [state, setState] = useState({
        items: [
            {
                id: 1,
                name: 'Parent 1',
                selected: false,
                children: [
                    { id: 11, name: 'Child 1.1', selected: false },
                    { id: 12, name: 'Child 1.2', selected: false },
                ],
            },
            {
                id: 2,
                name: 'Parent 2',
                selected: false,
                children: [
                    { id: 21, name: 'Child 2.1', selected: false },
                    { id: 22, name: 'Child 2.2', selected: false },
                ],
            },
        ],
    });

    const handleParentChange = (parentId) => {
        setState((prevState) => {
            const newItems = prevState.items.map((item) => {
                if (item.id === parentId) {
                    return {
                        ...item,
                        selected: !item.selected,
                        children: item.children.map((child) => ({
                            ...child,
                            selected: !item.selected,
                        })),
                    };
                }
                return item;
            });
            return { items: newItems };
        });
    };

    const handleChildChange = (parentId, childId) => {
        setState((prevState) => {
            const newItems = prevState.items.map((item) => {
                if (item.id === parentId) {
                    const allChildrenSelected = item.children.every(
                        (child) => child.selected || child.id === childId
                    );
                    return {
                        ...item,
                        selected: allChildrenSelected ? !item.selected : item.selected,
                        children: item.children.map((child) => {
                            if (child.id === childId) {
                                return { ...child, selected: !child.selected };
                            }
                            return child;
                        }),
                    };
                }
                return item;
            });
            return { items: newItems };
        });
    };

    return (
        <div>
            {state.items.map((item) => (
                <div key={item.id}>
                    <div>
                        <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => handleParentChange(item.id)}
                        />
                        {item.name}
                    </div>
                    <div style={{ marginLeft: '20px' }}>
                        {item.children.map((child) => (
                            <div key={child.id}>
                                <input
                                    type="checkbox"
                                    checked={child.selected}
                                    onChange={() => handleChildChange(item.id, child.id)}
                                />
                                {child.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SelectList;
