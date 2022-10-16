import './ActionAttacks.css'

function ActionAttacks(props) {
	return ( 
		<div className="attackContainer">
				<div className="attackIcon">{props.icon}</div>
				<div className="containerItemAttack">
					<span className="attackItem">{props.item}</span>
					<span className="attackLabel">{props.label}</span>
				</div>
				<div className='dmgAndRange'>
					<div className="attackRange">
						{props.range}
					</div>
					<div className="attackDamage">
						{props.damage}
					</div>
				</div>
				<div className="attackNote">{props.notes}</div>
		</div>
	 );
}

export default ActionAttacks;