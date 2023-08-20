import { Link, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light  p-3 border-bottom border-2 border-dark">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.clarks.in/_nuxt/img/logo.4463386.png" alt="" width="100" height="25" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item mx-3">
                                <Link to={"/"} class="nav-link active text-danger" aria-current="page">Home</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link to={"/mens"} class="nav-link active">Mens</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link to={"/womens"} class="nav-link active">Womens</Link>
                            </li>
                            <li class="nav-item mx-3">
                                <Link to={"/kids"} class="nav-link active">Kids</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar;