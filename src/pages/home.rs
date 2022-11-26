use crate::components::navbar::Navbar;

use bounce::helmet::Helmet;
use yew::{Html, html, function_component};

#[function_component(Home)]
pub(crate) fn home() -> Html {
    return html! {
    <>
        //Renders the navbar
        <Navbar />
    </>
    };
}