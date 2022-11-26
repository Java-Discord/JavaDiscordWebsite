use yew::{function_component, Html, html};
use bounce::helmet::Helmet;

#[function_component(Join)]
pub(crate) fn join() -> Html {
    return html! {
    <>
    <Helmet>
        <meta http-equiv="refresh" content="0; url=https://discord.gg/X3NmMgzFKF"/>
        <link rel="shortcut icon" href="/assets/images/ServerLogo.png" type="image/x-icon" />
        <title>{"Discord Redirect"}</title>
    </Helmet>
    <body>
        <p>{"If you weren't redirected, click "}<a href="https://discord.gg/X3NmMgzFKF">{"here"}</a></p>
    </body>
    </>
    };
}