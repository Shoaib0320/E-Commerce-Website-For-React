// App.jsx
import { useState } from 'react';
import './App.css';
import { RouterConfig } from './Config/RouterConfig';
import { CartProvider } from './Screens/SingleScreen/CartContext';
import {AuthProvider} from './Screens/SingleScreen/AuthContext'; // Ensure this is the correct path

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <AuthProvider>
                <CartProvider>
                    <RouterConfig />
                </CartProvider>
            </AuthProvider>
        </>
    );
}

export default App;
