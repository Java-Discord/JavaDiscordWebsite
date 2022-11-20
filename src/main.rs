//mod pages;

mod pages;

use yew::prelude::*;
use yew_router::prelude::*;
use bounce::helmet::HelmetBridge;
use bounce::BounceRoot;
use pages::home::Home;

#[derive(Clone, Routable, PartialEq, Debug)]
pub enum Route {
    #[at("/")]
    Home,
}

fn switch(routes: &Route) -> Html {
    return match routes {
        Route::Home => html! { <Home /> },
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
