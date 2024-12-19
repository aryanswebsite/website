import Navbar from "../components/Navbar";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div>
            <div className="absolute z-10">
                <Navbar />
            </div>
            <main className="font-work-sans">
                {children}
            </main>
        </div>
    );
}