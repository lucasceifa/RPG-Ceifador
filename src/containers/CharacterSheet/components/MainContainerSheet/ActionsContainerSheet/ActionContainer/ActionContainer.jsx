import * as Tabs from '@radix-ui/react-tabs';
import './ActionContainer.css'
import { GiCrossbow } from "react-icons/gi";
import ActionNav from './ActionNav/ActionNav';
import ActionDialogBox from './ActionDialogBox/ActionDialogBox';
import { useEffect, useState } from 'react';
import ActionAttacks from './ActionAttacks/ActionAttacks';


function ActionContainer() {
	const [actions, setActions] = useState([]);
	useEffect(() => {
		fetch('../../../../../actions.json')
		.then(data => data.json())
		.then(response => setActions(response.actions))
	})
	return ( 
		<div className="actionContainer">
			<Tabs.Root defaultValue='tab1' >
			<Tabs.List className='tabsList'>
				<Tabs.Trigger className='tabsAction' value='tab1'>ACTIONS</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab2'>SPELLS</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab3'>EQUIPMENT</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab4'>FEATURES & TRAITS</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab5'>DESCRIPTION</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab6'>NOTES</Tabs.Trigger>
				<Tabs.Trigger className='tabsAction' value='tab7'>EXTRAS</Tabs.Trigger>
			</Tabs.List>
				<Tabs.Content className='tabsContent' value='tab1'>
					<ActionNav />
					<div className='mainLineContent'>
						<div className='leftContentAction'>
							<span className='leftRed'>ACTIONS ●</span>
							<span className='leftLabel'> Attacks per Action: 1</span>
						</div>
						<div className='popUpButtonAction'>
							<ActionDialogBox/>
						</div>
					</div>
					<div className='titleActionList'>
						<div className='attack'>ATTACK</div>
						<div className='range'>RANGE</div>
						<div className='damage'>DAMAGE</div>
						<div className='notes'>NOTES</div>
					</div>
					<div className='actionList'>
						{actions.map(action => {
							return(
								<ActionAttacks 
									icon={<GiCrossbow />}
									item={action.item}
									label={action.label}
									range={action.range}
									damage={action.damage}
									notes={action.notes}
								/>
							)
						})}
					</div>
					<div className='actionsCombat'>
							<div className='combatActionsTitle'>
								Actions in Combat
							</div>
							<div className='combatActionsLabel'>
								Attack, Cast a Spell, Dash, Disengage, Dodge, Grapple, Help, Improvise, Ready, Search, Shove, Use an Object
							</div>
					</div>
				</Tabs.Content>
				<Tabs.Content value='tab2'>

				</Tabs.Content>
				<Tabs.Content value='tab3'>
						
				</Tabs.Content>
				<Tabs.Content value='tab4'>
						
				</Tabs.Content>
				<Tabs.Content value='tab5'>
						
				</Tabs.Content>
				<Tabs.Content value='tab6'>
						
				</Tabs.Content>
				<Tabs.Content value='tab7'>
						
				</Tabs.Content>
  		</Tabs.Root>
		</div>
	 );
}

export default ActionContainer;