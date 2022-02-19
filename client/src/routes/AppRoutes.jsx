import { Route, Routes } from 'react-router-dom';
import IndexPage from '../pages/IndexPage/IndexPage';
import SignUpPage from '../pages/SingupPage/SignUpPage';

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/signup" element={<SignUpPage />} />
        </Routes>
    )
}

export default AppRoutes;