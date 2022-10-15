import './ActionNav.css'
import * as ToggleGroup from '@radix-ui/react-toggle-group';

function ActionNav() {
	return ( 
		<div className='actionNavContainer'>
			<ToggleGroup.Root  defaultValue="all" className="navMainAction" type="single">
				<ToggleGroup.Item className="navActionItem" value="all">
					ALL
				</ToggleGroup.Item>
				<ToggleGroup.Item className="navActionItem" value="attack">
					ATTACK
				</ToggleGroup.Item>
				<ToggleGroup.Item className="navActionItem" value="action">
					ACTION
				</ToggleGroup.Item>
				<ToggleGroup.Item className="navActionItem" value="bonusAction">
					BONUS ACTION
				</ToggleGroup.Item>
				<ToggleGroup.Item className="navActionItem" value="reaction">
					REACTION
				</ToggleGroup.Item>
				<ToggleGroup.Item className="navActionItem" value="other">
					OTHER
				</ToggleGroup.Item>
			</ToggleGroup.Root>
		</div>
	 );
}

export default ActionNav;