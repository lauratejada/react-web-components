
function Header(){

    return(
        <header>
            <div class="container flex">
                <div class="title">
                    <h1>Imagina</h1>
                </div>
                <nav>
                    <div class="nav-3bar">
                        <i class="fa-solid fa-bars"></i>
                        <i class="fa-solid fa-x not-show"></i>
                    </div>
                    <ul>
                        <li><a href="index.html" target="_self">Home</a></li>
                        <li><a href="index.html" target="_self">About Us</a></li>
                        <li><a href="index.html" target="_self">Services</a></li>
                        <li><a href="index.html" target="_self">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;