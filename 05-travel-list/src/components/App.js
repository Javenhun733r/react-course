import { useState } from 'react';
import Form from './Form';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';
export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems(items => [...items, item]);
	}
	function handleDeleteItem(id) {
		setItems(items => items.filter(item => item.id !== id));
	}
	function handleClearItems() {
		const confirmed = window.confirm(
			'Are you sure you want ot delete all items?',
		);
		if (confirmed) setItems([]);
	}
	function handleToggleItem(id) {
		setItems(items =>
			items.map(item =>
				item.id === id ? { ...item, packed: !item.packed } : item,
			),
		);
	}
	return (
		<div className='app'>
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				onDeleteItem={handleDeleteItem}
				items={items}
				onToggleItem={handleToggleItem}
				onClearItems={handleClearItems}
			/>
			<Stats items={items} />
		</div>
	);
}
