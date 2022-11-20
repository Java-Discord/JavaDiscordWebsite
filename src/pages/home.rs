use bounce::helmet::Helmet;
use yew::{Html, html, function_component};

#[function_component(Home)]
pub(crate) fn home() -> Html {
    return html! {
    <>
        <Helmet>
            <link rel="stylesheet" href="css/pages/home.css" />
        </Helmet>
        //TODO implement navbar
        <div>
            <div className={"introductionContainer"}>
                <p>{"Test"}</p>
            </div>
        </div>
    </>
    };
}