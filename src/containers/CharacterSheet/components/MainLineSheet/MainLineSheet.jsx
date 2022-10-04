import Attributes from './Attributes/Attributes';
import AttributesBigBox from './AttributesMdBox/AttributesMdBox';
import LifeBox from './LifeBox/LifeBox';
import './MainLineSheet.css';

function MainLineSheet() {
	return (
		<div className="bgFrame">
			<Attributes
				label="STR"
				signal="+"
				modifierValue="3"
				attributeValue="8"
			/>
			<Attributes
				label="DEX"
				signal="+"
				modifierValue="0"
				attributeValue="4"
			/>
			<Attributes
				label="CONST"
				signal="+"
				modifierValue="2"
				attributeValue="7"
			/>
			<Attributes
				label="INT"
				signal="-"
				modifierValue="2"
				attributeValue="2"
			/>
			<Attributes
				label="WIS"
				signal="+"
				modifierValue="1"
				attributeValue="5"
			/>
			<Attributes
				label="CHA"
				signal="-"
				modifierValue="4"
				attributeValue="0"
			/>
			<AttributesBigBox
				title="PROFICIENCY"
				signal="+"
				value="2"
				walkingValue="30"
				attribute="BONUS"
				attributeWalking="SPEED"
				labelTitle="WALKING"
				label="ft."
			/>
			<LifeBox
				lifePointsCurrent="14"
				lifePointsTotal="16"
			/>
		</div>
	);
}

export default MainLineSheet;