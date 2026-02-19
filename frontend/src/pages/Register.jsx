import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";

const Register = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await API.post("/auth/register", {
                name,
                email,
                password
            });

            navigate("/login");

        } catch (error) {
            const errorMsg = error.response?.data?.message || "Registration failed. Please try again.";
            setError(errorMsg);
            console.log(errorMsg);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleRegister}>
            <h2>Register</h2>

            {error && <p style={{color: 'red', marginBottom: '10px'}}>{error}</p>}

            <input
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit" disabled={loading}>{loading ? "Registering..." : "Register"}</button>
        </form>
    );
};

export default Register;
