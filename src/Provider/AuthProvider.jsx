import { createContext } from "react";
import PropTypes from 'prop-types';

export const AuthContext= createContext(null);
const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node,
}
export default AuthProvider;