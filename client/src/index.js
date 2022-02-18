import {QueryClient, QueryClientProvider} from "react-query";
import App from "./App";
import {render} from "react-dom";
import React from "react";
import {
    BrowserRouter as Router,
} from "react-router-dom";
const queryClient = new QueryClient();

const Index = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>
        </QueryClientProvider>
    )
}

render(<Index />, document.querySelector('#app'));