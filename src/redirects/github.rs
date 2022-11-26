use yew::{function_component, Html, html};
use bounce::helmet::Helmet;

#[function_component(GitHub)]
pub(crate) fn github() -> Html {
    return html! {
    <>
    <Helmet>
        <meta http-equiv="refresh" content="0; url=https://github.com/Java-Discord/" />
        <link rel="shortcut icon" href="/assets/images/ServerLogo.png" type="image/x-icon" />
        <title>{"GitHub Redirect"}</title>
    </Helmet>
    <body>
        <p>{"If you weren't redirected, click "}<a href="https://github.com/Java-Discord/">{"here"}</a></p>
    </body>
    </>
    };
}