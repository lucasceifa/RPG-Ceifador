import './ActionsContainerSheet.css'
import LineActions from './LineActions/LineActions';

function ActionsContainerSheet() {
	return (  
		<div className='actionsContainer'>
			<LineActions 
			signal="+"
			modDex="3"
			armor="12"
		/>
		</div>
	);
}

export default ActionsContainerSheet;