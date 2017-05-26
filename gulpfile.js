const gulp = require('gulp');
const merge = require('merge');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const connect = require('gulp-connect');

const paths = {
    pages: ['./src/*.html'],
    buildDir: "./build"
};

const webpackBaseConfig = {
    debug: true,
    bail: true,
    output: {},
    devtool: "source-map",
    resolve: {
        extensions: ['.js', '.ts', '']
    },
    module: {
        preLoaders: [
            { test: /\.js$/, loader: "source-map-loader" },
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    },
    plugins: []
};

gulp.task('default', ['build', 'dev']);

gulp.task('build', function() {
    return buildWebpack('./src/main.ts', 'bundle.js');
});

function buildWebpack(sourceFilename, outputFilename) {
    var config = merge.recursive(true, webpackBaseConfig, {
        output: {
            filename: outputFilename
        }
    });

    return gulp
        .src(sourceFilename)
        .pipe(webpackStream(config))
        .pipe(gulp.dest(paths.buildDir));
}

gulp.task('dev', function() {
    connect.server({
        root: paths.buildDir,
        port: 8879
    });
});
