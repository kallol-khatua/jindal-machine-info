import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
    const {
        user,
        authenticated,
        loading,
        logout,
        isAdmin,
    } = useAuth();

    return (
        <>
            <h1>{user?.name}</h1>

            <button onClick={logout}>
                Logout
            </button>
        </>
    );
}