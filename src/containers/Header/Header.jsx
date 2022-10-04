import './Header.css';
import HeaderNav from './components/HeaderNav/HeaderNav';
import HeaderUser from './components/HeaderUser/HeaderUser';

function Header() {
	return (
		<header className='headerContainer'>
			<HeaderUser/>
			<HeaderNav/>
		</header>
	);
}

export default Header;