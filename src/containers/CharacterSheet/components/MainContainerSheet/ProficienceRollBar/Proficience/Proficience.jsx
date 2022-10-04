import './Proficience.css'

function Proficience(props) {
	return ( 
		<div>
			<div className="proficienceContainer">
			<input type="checkbox" className="circleButton"></input>
			<span className="modifierProficience">{props.mod}</span>
			<div className="skillProficience">
				<span>{props.proficience}</span>
				<span>{props.bonusValue}</span>
			</div>
			</div>
			<hr className='hr' />
		</div> 
	);
}

export default Proficience;