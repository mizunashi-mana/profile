const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = isProduction
    ? MiniCssExtractPlugin.loader
    : "style-loader";

const config = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "asset/[hash][ext][query]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'recruit.html',
            template: './src/recruit.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader"
            },
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/i,
                use: [stylesHandler, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ico|eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";

        config.plugins.push(new MiniCssExtractPlugin());
    } else {
        config.mode = "development";
    }
    return config;
};
