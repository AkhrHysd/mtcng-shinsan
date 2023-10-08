import {
    LoginButton,
    LogoutButton,
} from "@/app/components/loginButtons";

export default async function Home() {

    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "70vh",
            }}
        >
            <div>
                <LoginButton/>
                <LogoutButton/>
            </div>
        </main>
    );
}