import './CharacterSheet.css'
import ActionsContainerSheet from './components/MainContainerSheet/ActionsContainerSheet/ActionsContainerSheet';
import MainContainerSheet from './components/MainContainerSheet/MainContainerSheet';
import MainLineSheet from './components/MainLineSheet/MainLineSheet';

function CharacterSheet () {
	return (  
		<div className='bgSheet'>
			<div className='containerMainLine'>
				<MainLineSheet />
			</div>
			<div className='containerMainInfos'>
				<MainContainerSheet />
				<ActionsContainerSheet />
			</div>
		</div>
	);
}

export default CharacterSheet;