import { Link } from 'react-router-dom';

const Navbar = ({currentPath = ''}) => {
    var nav_items = [
        {
            label: 'Blog',
            link: '/',
            regexMatch: /\/$|\/blog*/gi
        },
        {
            label: 'Projects',
            link: '/projects',
            regexMatch: /\/projects*/gi
        },
        {
            label: 'About',
            link: '/about',
            regexMatch: /\/about*/gi
        }
    ];

    return (

        <div className="navbar">
            {
                nav_items.map(({label, regexMatch, link}) => {
                    return (
                        <Link className={`navbar__item ${currentPath.match(regexMatch) ? 'navbar__item--selected' : null}`}  to={link}>
                            {label}
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Navbar;
