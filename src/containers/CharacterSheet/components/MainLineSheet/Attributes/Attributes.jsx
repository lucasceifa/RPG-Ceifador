import './Attributes.css'

function Attributes(props) {
	return (  
			<div className='attributes'>
				<p className="attributeLabel">{props.label}</p>
				<p className="attributeModifier"><span className="label">{props.signal}</span>{props.modifierValue}</p>
				<p className="attributeValue">{props.attributeValue}</p>
			</div>
	);
}

export default Attributes;