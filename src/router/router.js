import { createBrowserRouter } from 'react-router-dom';

import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";

import App from "../App";
const basename = process.env.NODE_ENV === 'production' ? '/desarrollo-frontend-react' : '/';

import WelcomeForm from "../screens/Forms/WelcomeForm";
import ObjectForm from "../screens/Forms/ObjectForm";
import LadingPage from "../screens/LandingPage/LandingPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <LadingPage />,
            },
            {
                path: '/default',
                element: <Default />,
            },
            {
                path: '/products',
                element: <Product />,
            },
            {
                path: '/login',
                element: <LoginForm />,
            },
            {
                path: '/welcomeform',
                element: <WelcomeForm/>,
            },
            {
                 path: '/objectform',
                 element: <ObjectForm/>
            },
        ]
    }
],
    {
        basename:    basename
    }
);

export default routes;