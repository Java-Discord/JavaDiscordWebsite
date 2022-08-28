import {Navbar} from "../components/Navbar";
import {Footer} from "../components/Footer";
import errorStyles from "../styles/error.module.css";

export default function FourOhFour() {
    return (
        <div>
            <Navbar/>
            <h1 className={errorStyles.errorTitle}>Error 404 - Page Not Found :(</h1>
            <p className={errorStyles.errorText}>Looks like the page you tried to access does not exist. If you think this is an error, please open an issue on <a href="https://github.com/Java-Discord/JavaDiscordWebsite">GitHub</a>.</p>
            <Footer/>
        </div>
    )
}