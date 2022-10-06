import InterfaceInventory from "./components/InterfaceInventory/InterfaceInventory";
import OverlayInventory from "./components/OverlayInventory/OverlayInventory";
import './Inventory.css'

function Inventory() {
	return ( 
		<div className="inventoryContainer">
			<OverlayInventory />
			<InterfaceInventory />
		</div>
	 );
}

export default Inventory
