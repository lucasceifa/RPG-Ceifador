import './HeaderUser.css';
import { CaretDown } from "phosphor-react";
import Progressbar from '../../../../utils/ProgressBar.jsx';

function HeaderUser() {
	return (
		<div className='characterArea'>
				<div className='userIconArea'>
					<div className='userGradient'>
						<img className='userIconImg' src="https://genshin.honeyhunterworld.com/img/tartaglia_033.webp" alt="User Icon" />
					</div>
				</div>
				<div className='userInfoArea'>
					<div className='userName'>
						<p>Ceifador</p>
						<span>
							<CaretDown size={17} color='#A30000' weight='fill'/>
						</span>
					</div>
					<div className='userClass'>
						Aasimar - Espadachim Iniciante
					</div>
					<div className='userLevel'>
						<div className='level'>
							<span>LVL 1</span>
							<Progressbar bgcolor2="#737373" bgcolor="#A30000" progress='72'  height={3} />
							<span>LVL 2</span>
						</div>
						<div className='levelXP'> 
							432 / 652 XP
						</div>
					</div>	
				</div>
			</div>
	);
}

export default HeaderUser;