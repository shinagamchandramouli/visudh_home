import react from 'react'

function Header()
{
    return (
        <header id="header" className="fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center">

                <div className="logo mr-auto">
                <h1 className="text-light"><a href="index.html"><span class="text-primary">Visudh</span><span class="text-danger">Ajivam</span></a></h1>
                </div>

                <nav className="nav-menu d-none d-lg-block">
                <ul>
                    <li className="active"><a href="#index.html">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#departments">Departments</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>

                    <li className="get-started"><a href="#about">Make an Appointment</a></li>
                </ul>
                </nav>

            </div>
        </header>

        );
}

export default Header;