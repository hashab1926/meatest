// navigasi halmaan course
const Navbar = () => {
    return (
        <nav className="nav-courses">
            <ul>
                <li>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} />
                </li>
                <li className="profile">
                    <img src={`${process.env.PUBLIC_URL}/img/profile_user.jpg`} className="rounded-circle" width="50" />
                    <div>Halo, Shotaro Osaki</div>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;