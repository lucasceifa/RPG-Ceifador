import './LifeBox.css'

function LifeBox(props) {
	return (  
		<div className='lifeContainer'>
				<div className='lifeRow row-1'>
					<button className='buttonLife green'>HEAL</button>
					<div className='labelLife'>CURRENT</div>
					<div className='labelLife'>MAX</div>
					<div className='labelLife'>TEMP</div>
				</div>
				<div className='lifeRow row-2'>
					<input className='inputLife' type="text" />
					<div className='numbersLife'>
						<span>{props.lifePointsCurrent}</span>
						<span>/</span>
						<span>{props.lifePointsTotal}</span>
					</div>
					<div className='tempLife'>--</div>
				</div>
				<div className='lifeRow row-3'>
					<button className='buttonLife red'>DAMAGE</button>
					<div className='footerLabelLife'>HIT POINTS</div>
				</div>
			</div>
	);
}

export default LifeBox;