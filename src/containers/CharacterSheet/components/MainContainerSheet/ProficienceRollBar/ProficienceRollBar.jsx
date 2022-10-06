import { useEffect, useState } from "react";
import './ProficienceRollBar.css'
import Proficience from "./Proficience/Proficience";
import * as ScrollArea from '@radix-ui/react-scroll-area';

function ProficienceRollBar() {
	const [proficiences, setProficiences] = useState(["",""]);
	useEffect(() => {
    fetch('../../../../../../proficiences.json')
		.then(data => data.json())
		.then(response => setProficiences(response.proficiences))
  });
	return ( 
		<div className="mainContainerProficience">
			<div className="proficienceTitleArea">
				<span className="mainLabelContainer">PROF</span>
				<span className="mainLabelContainer">MOD</span>
				<span className="mainLabelContainer mainFlex-1">SKILL</span>
				<span className="mainLabelContainer">BÔNUS</span>
			</div>
			<ScrollArea.Root className="StyledScrollArea">
				<ScrollArea.Viewport className="StyledViewport">
					{proficiences.map(proficiences => {
							return (
							<Proficience
								mod={proficiences.mod}
								proficience={proficiences.name}
								bonusValue="2"
							/>
						)
					})}
				</ScrollArea.Viewport>
				<ScrollArea.Scrollbar className="StyledScrollbar" orientation="vertical">
					<ScrollArea.Thumb className="StyledThumb" />
				</ScrollArea.Scrollbar>
				<ScrollArea.Corner  className="StyledCorner"/>
			</ScrollArea.Root>
		</div> 
	);
}

export default ProficienceRollBar;