import './HeaderNavBox.css';

function HeaderNavBox(props) {
	return (
		<button className='navBox'>
			<span className='navBoxIcon'>{props.icon}</span>
			<span className='navBoxTitle'>{props.title}</span>
			<span className='navBoxLabel'>{props.label}</span>
		</button>
	);
}

export default HeaderNavBox;