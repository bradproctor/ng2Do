/**
 * Created by zkmikt2 on 9/15/2015.
 */

var grunt = require("grunt");

grunt.initConfig({
    copy: {
        main: {
            src: [
                'index.html',
                'typings/**/*.*',
                'lib/**/*.*'
            ],
            dest: 'build',
            expand: true
        },
        app: {
            cwd: 'app',
            src: [
                '**/*.js',
                '**/*.html'
            ],
            dest: 'build',
            expand: true
        }
    },

    clean: {
        build: {
            src: ['build'],
            options: {
                force: true
            }
        }
    },

    less: {
        development: {
            cwd: 'app/styles',
            dest: 'build/styles',
            src: '**/*.less',
            ext: '.css',
            expand: true
        }
    },

    watch: {
        scripts: {
            files: ['app/**/*.ts', 'app/**/*.html', 'app/**/*.less', 'index.html'],
            tasks: ['build'],
            options: {
                livereload: true
            }
        }
    },

    typescript: {
        base: {
            src: ['app/**/*.ts'],
            dest: 'build',
            options: {
                module: 'commonjs',
                target: 'es5',
                emitDecoratorMetadata: true,
                experimentalDecorators: true,
                sourceMap: false,
                declaration: false
            }
        }
    },

    tslint: {
        options: {
            configuration: grunt.file.readJSON("tslint.json")
        },
        files: {
            src: ['app/**/*.ts']
        }
    },

    connect: {
        server: {
            options: {
                port: 9000,
                base: 'build',
                livereload: true,
                open: true
            }
        }
    }
});

grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-connect');
grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-tslint');
grunt.loadNpmTasks('grunt-typescript');

grunt.registerTask(
    'build',
    'Compiles all assets and source files into build directory.',
    ['clean', 'tslint', 'less', 'typescript', 'copy']
);

grunt.registerTask(
    'serve',
    'Runs the build, then serves the project locally.',
    ['build', 'connect:server', 'watch']
);