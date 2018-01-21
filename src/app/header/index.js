import Logo from './logo';
import Contact from './contact';
import Social from './social';
import NavBar from '../navbar';

import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <Logo></Logo>
            <Social></Social>
            <Contact></Contact>
            <NavBar></NavBar>
        </div>
    );
};

export default Header;

