import './LineActions.css'

function LineActions(props) {
	return (  
		<div className='lineActContainer'>
			<div className='initContainer'>
				<span className='initLabel'>Initiative</span>
				<span className='initLabelNum'><span className='initSignal'>{props.signal}</span>{props.modDex}</span>
			</div>
			<div className='armorContainer'>
				<span className='armorLabel'>ARMOR</span>
				<span className='armorNumber'>{props.armor}</span>
				<span className='armorLabel'>CLASS</span>
			</div>
			<div className='actionsBox'>
				<div className='boxPart'>
					<span className='boxTitle'>DEFENSES</span>
					<span className='boxLabel'>Resistances, immunities or vulnerabilities</span>
				</div>
				<div className='boxPart'>
					<span className='boxTitle'>CONDITIONS</span>
					<span className='boxLabel'>Add Active Conditions</span>
				</div>
			</div>
		</div>
	);
}

export default LineActions;