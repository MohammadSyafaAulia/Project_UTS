const Navbar=()=> {
    return(

    <header>
        <div class="navbar">
            <div class="logo">YAYAS</div>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about" class="active">About</a></li>
                <li><a href="/gallery">Gallery</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </header>
        
    );
}

export default Navbar;