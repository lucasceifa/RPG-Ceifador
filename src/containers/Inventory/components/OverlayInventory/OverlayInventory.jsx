import './OverlayInventory.css'
import { useEffect, useState } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { NotePencil } from 'phosphor-react'

function OverlayInventory() {
	const [items, setItems] = useState(["",""]);
	useEffect(() => {
    fetch('../../../../../items.json')
		.then(data => data.json())
		.then(response => setItems(response.items))
  });

	return ( 
		<div className='mainDrop'>
			<DropdownMenu.Root className="mainDropdown">
				<DropdownMenu.Trigger className='triggerButton'>
					<NotePencil size={29} weight="fill" />
				</DropdownMenu.Trigger>
				<DropdownMenu.Content className='contentArea'>
					<div className='dropDownScrollArea'>
						{items.map(item => {
							return (
								<DropdownMenu.Item className='contentItem'>
									{item.name}<span className='rightSlot'>{item.mod}</span>
								</DropdownMenu.Item>
							)
						})}
					</div>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>		
	 );
}
export default OverlayInventory;