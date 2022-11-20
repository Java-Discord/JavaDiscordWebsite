use bounce::helmet::Helmet;
use yew::{Html, html, function_component};

#[function_component(Home)]
pub(crate) fn home() -> Html {
    return html! {
    <>
        <Helmet>
            <link rel="stylesheet" href="assets/css/pages/home.css" />
        </Helmet>
        //TODO implement navbar
        <div>
            <div className="introductionContainer">
                <div className="introductionText">
                    <h1>{"HELP. "}<b style={{"color: #ff212d"}}>{"CODE. "}</b>{"LEARN."}</h1>
                    <p className="introductionParagraph">{"With over X Members and X Messages sent each moth, join one of the biggest Java Communities on Discord to help, get help and discuss programming in Java."}</p>
                </div>
            </div>
        </div>
    </>
    };
}