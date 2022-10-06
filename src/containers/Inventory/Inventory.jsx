import InterfaceInventory from "./components/InterfaceInventory/InterfaceInventory";
import OverlayInventory from "./components/OverlayInventory/OverlayInventory";
import './Inventory.css'

function Inventory() {
	return ( 
		<div className="inventoryContainer">
			<InterfaceInventory />
			<OverlayInventory />
		</div>
	 );
}

export default Inventory
