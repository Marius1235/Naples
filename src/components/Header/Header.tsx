import "../../css/HeaderComponent.css";

const HeaderComponent = () => {
    return(
        <div>
            {/* <ul className="HeaderNav">
                <li className="HeaderNavItem"> */}
                <div className="container-fluid">
                    <div className="row">
                        <a href="/" className="Logo">Munch</a>
                    </div>
                </div>
                {/* </li>
            </ul> */}
        </div>
    );
};

export default HeaderComponent