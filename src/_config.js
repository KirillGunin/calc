export const process = {
    dev: true,
};

export const site = {
    home: process.dev ? "https://localhost:8080" : "https://google.ru",
};

export const links = [
    { title: "Home", page: "home", url: "/" },
];
