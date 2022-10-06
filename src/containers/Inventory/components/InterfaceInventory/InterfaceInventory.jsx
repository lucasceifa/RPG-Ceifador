import './InterfaceInventory.css'

function InterfaceInventory() {
	return ( 
		<div className='interfaceContainer'>
			<div className='leftArm inventoryHoverInterface'></div>
			<div className='mainBody'>
				<div className='head inventoryHoverInterface'></div>
				<div className='bodyInterface inventoryHoverInterface'></div>
				<div className='legs inventoryHoverInterface'></div>
				<div className='foot inventoryHoverInterface'></div>
			</div>
			<div className='rightArm inventoryHoverInterface'></div>
		</div>	
	 );
}

export default InterfaceInventory;