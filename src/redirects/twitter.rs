use yew::{function_component, Html, html};
use bounce::helmet::Helmet;

#[function_component(Twitter)]
pub(crate) fn twitter() -> Html {
    return html! {
    <>
    <Helmet>
        <meta http-equiv="refresh" content="0; url=https://twitter.com/JavaDiscord/" />
        <link rel="shortcut icon" href="/assets/images/ServerLogo.png" type="image/x-icon" />
        <title>{"Twitter Redirect"}</title>
    </Helmet>
    <body>
        <p>{"If you weren't redirected, click "}<a href="https://twitter.com/JavaDiscord/">{"here"}</a></p>
    </body>
    </>
    };
}