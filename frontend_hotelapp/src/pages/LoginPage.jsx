import { NavBar } from "../components/layout/NavBar"

export const LoginPage = () => {
    return (
        <>
            <NavBar />
            <div className="container mt-5 d-flex justify-content-center">
                <div className="card p-5 shadow-lg" style={{ width: "450px" }}>
                    <h2 className="text-center mb-4">Login</h2>
                    <form>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Username" name="username" />
                        </div>
                        <div className="mb-3">
                            <input className="form-control" placeholder="Password" name="password" type="password" />
                        </div>
                        <div className="text-center">
                            <button className="btn btn-primary w-100" type="submit">Login</button>
                        </div>
                    </form>
                </div>
            </div>

        </>
    )
}