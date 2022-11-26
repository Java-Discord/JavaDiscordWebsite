use yew::{Html, html, function_component};
use bounce::helmet::Helmet;

#[function_component(Navbar)]
pub(crate) fn navbar() -> Html {
    return html! {
    <>
        <Helmet>
            <link rel="stylesheet" href="/assets/css/components/navbar.css" />
        </Helmet>
        <div class="navbar" id="navbar">
            <nav>
                <img src="assets/images/ServerLogo.png" alt="JavaDiscordLogo" />
                <button class="hamburger" id="hamburger">
                    <i class="fa-solid fa-bars" />
                </button>
                <ul class="nav-ul" id="nav-ul">
                    <li><a class="active-link" href="/">{"Home"}</a></li>
                    <li><a href="/rules">{"Rules"}</a></li>
                    <li><a href="/soon">{"Coming soon!"}</a></li>
                </ul>
                <div class="nav-right">
                    <a href="/r/github" target="_blank" class="social-btn"><i class="fa-brands fa-github fa-3x" /></a>
                    <a href="/r/twitter" target="_blank" class="social-btn"><i class="fa-brands fa-twitter fa-3x" /></a>
                    <a href="/r/join" target="_blank" class="join-btn">{"JOIN"}</a>
                </div>
            </nav>
        </div>
    </>
    }
}