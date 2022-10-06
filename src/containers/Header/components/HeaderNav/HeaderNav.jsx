import './HeaderNav.css';
import HeaderNavBox from './HeaderNavBox/HeaderNavBox';
import { ShareNetwork, Campfire, Moon, Skull } from 'phosphor-react'

function HeaderNav() {
	return (
		<nav className='navHeader'>
			<HeaderNavBox
				icon={<ShareNetwork size={22} weight="fill" />}
				title="COMPARTILHE"
				label=""
			/>
			<HeaderNavBox
				icon={<Campfire size={22} weight="fill" />}
				title="DESCANSO CURTO"
				label=""
			/>
			<HeaderNavBox
				icon={<Moon size={22} weight="fill" />}
				title="DESCANSO LONGO"
				label=""
			/>
			<HeaderNavBox
				icon=""
				title="CAMPANHA: "
				label="The Last Dance"
			/>
			<span className='rpgIcon'>
				<img src="https://media.discordapp.net/attachments/419221724996042752/1024757905804763256/CEIFADELAS.png" alt="" />
			</span>
		</nav>
	);
}

/*
      __
 ____|  |____
 ------------
  |  O  O  |
  |   <    |
  |  ----  |
  |________|
GOD MARCELO HERE
I'M WATCHING YOU
*/

export default HeaderNav
