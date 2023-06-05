import "../../css/HeaderComponent.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComponent = () => {
    return(
        <div>
            <ul className="HeaderNav">
                <li className="HeaderNavItem">
                    <a href="/" className="Logo">Munch</a>
                </li>
            </ul>
        </div>
    );
};

export default HeaderComponent