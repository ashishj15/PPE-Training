import React from "react";
class Header extends React.Component {
    render() {
        var myStyle = {
            fontSize: 20,
        }
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark navbar navbar-expand-lg">
                    <a href="#" class="nav-brand navbar-brand">
                        <i class="fab fa-steam"></i>
                    </a>
                    <ul class="navbar-nav mr-auto bg-dark">
                        <li class="nav-item">
                            <a href="#" class="nav-link active">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a href="#" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div >
        );
    }
}
export default Header;