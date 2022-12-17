import "../css/app.css";

import React from "react";
import { createRoot } from "react-dom/client";

import { createInertiaApp } from "@inertiajs/inertia-react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

createInertiaApp({
    title: (title) => `${title} - zoShop`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ),
    setup({ el, App, props }) {
        return createRoot(el).render(<App {...props} />);
    },
});
