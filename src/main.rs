mod pages;
mod components;
mod redirects;

use yew::prelude::*;
use yew_router::prelude::*;
use bounce::helmet::HelmetBridge;
use bounce::BounceRoot;
use crate::pages::home::Home;
use crate::redirects::github::GitHub;
use crate::redirects::twitter::Twitter;
use crate::redirects::join::Join;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,

    //Redirects
    #[at("/r/github")]
    GitHub,
    #[at("/r/twitter")]
    Twitter,
    #[at("r/join")]
    Join,
}

fn switch(routes: &Route) -> Html {
    return match routes {
        Route::Home => html! { <Home /> },
        //Redirects
        Route::GitHub => html! { <GitHub /> },
        Route::Twitter => html! { <Twitter />},
        Route::Join => html! { <Join /> }
        //Route::NotFound => html! { <NotFound /> },
    };
}

#[function_component(App)]
fn app() -> Html {
    return html! {
    <BounceRoot>
        <HelmetBridge default_title="Java Discord - Java Community on Discord" />
    <BrowserRouter>
        <Switch<Route> render={Switch::render(switch)} />
    </BrowserRouter>
    </BounceRoot>
    }
}

fn main() {
    yew::start_app::<App>();
}
