const tailwindcss = require("tailwindcss")
module.exports = {

    // content: ["./src/**/*.{html,js}"],
    plugins: [
        tailwindcss("./tailwind.js"), 
        require("autoprefixer"),

    ],


}