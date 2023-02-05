const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const RemarkHTMLPlugin = import("remark-html");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const isProduction = process.env.NODE_ENV == "production";

const htmlUrlFilter = (attribute, value, resourcePath) => {
    if (/(main|markdown).(js|css)$/.test(value)) {
        return false;
    }

    return true;
};

const config = {
    entry: {
        main: "./src/main.ts",
        markdown: "./src/markdown.ts"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        assetModuleFilename: "asset/[hash][ext][query]",
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: false,
        }),
        new HtmlWebpackPlugin({
            filename: 'recruit.html',
            template: './src/recruit.md',
            inject: false,
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
                options: {
                    sources: {
                        urlFilter: htmlUrlFilter,
                    }
                }
            },
            {
                test: /\.md$/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            sources: {
                                urlFilter: htmlUrlFilter,
                            }
                        },
                    },
                    {
                        loader: "markdown-loader",
                    },
                ],
            },
            {
                test: /\.(ts|tsx)$/i,
                loader: "ts-loader",
                exclude: ["/node_modules/"],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
            },
            {
                test: /\.(ico|eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: "asset",
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".jsx", ".js"],
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = "production";
    } else {
        config.mode = "development";
    }
    return config;
};
