import { Link } from 'react-router-dom'; //se agrego reina
import {useSelector} from 'react-redux'
const Navbar = () => {
    //const form = useSelector(state => state.form);
    const form = useSelector(state => state.form)
    var viewDataUsers = '';
    console.log('***********************');
    console.log(form.formData.username)
    console.log('***********************');
    if (form.formData.username.trim().length!==0) {
        viewDataUsers = form.formData.username + ' - ' + form.formData.email
     }

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/default">Default</Link>
                </li>
                <li>
                    <Link to="/products">Product</Link>
                </li>
                <li>
                    <Link to="/login">LoginForm</Link>
                </li>
                  <li className='welcome'>
                    Bienvenido:{ viewDataUsers }
                </li>
                <li>
                    <Link to="/dictionary">Dictionary</Link>
                </li>
               
            </ul>
        </nav>
    );
};

export default Navbar;