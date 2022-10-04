import './AttributesMdBox.css'

function AttributesMdBox(props) {
	return (
		<div className='d-flex'>
			<div className="containerMdBox">
				<p className="attributeMdBoxTitle">{props.title}</p>
				<div className='attributeMdBoxPoints'><span className='label'>{props.signal}</span>{props.value}</div>
				<p className='attributeMdBoxTitle'>{props.attribute}</p>
			</div>
			<div className="containerMdBox">
				<p className="attributeMdBoxTitle label">{props.labelTitle}</p>
				<div className='attributeMdBoxPoints'>{props.walkingValue}<span className='label bold'>{props.label}</span></div>
				<p className='attributeMdBoxTitle'>{props.attributeWalking}</p>
			</div>
		</div>  
	);
}

export default AttributesMdBox;