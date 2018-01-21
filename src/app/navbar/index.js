const Navbar = () => {
    var nav_items = [
        'blog',
        'projects',
        'about',
    ];

    const renderNavItems = () => {
        return nav_items.map((item) => {
            return (
                <a className="navbar__item" href={item}>
                    {item}
                </a>
            )
        })
    }

    return (
        <div className="navbar">
            { renderNavItems() }
        </div>
    );
};

export default Navbar;
