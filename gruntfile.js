module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    var config = {
        port: 12001,
        testBrowser: 'chrome'
    };

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        config: config,

        bower: {
            install: {
                options: {
                    install: true,
                    copy: true,
                    targetDir: './libs',
                    cleanTargetDir: true,
                    layout: 'byComponent'
                }
            }
        },

        jshint: {
            all: [ 'gruntfile.js', 'src/*.js', 'src/**/*.js' ]
        },

        jslint: {
            script: {
                src: [ 'src/script/*.js' ],
                exclude: [ 'src/script/requireConfig.js' ],
                directives: {
                    vars: true,
                    plusplus: true,
                    predef: [
                        'define',
                        'require',
                        'window',
                        'document',
                        'console',
                        'module',
                        'atob'
                    ]
                }
            },
            main: {
                src: [ "src/main.js" ],
                directives: {
                    vars: true,
                    plusplus: true,
                    unparam: true,
                    predef: [
                        'define',
                        'require',
                        'window',
                        'document',
                        'console',
                        'module',
                        'atob'
                    ]
                }
            }
        },

        clean: {
            temp: {
                src: [ 'tmp' ]
            }
        },

        watch: {
            dev: {
                files: [ 'gruntfile.js', 'src/**/*.js', '*.html', 'src/content/*.md' ],
                tasks: [ 'jshint', 'clean:temp' ],
                options: {
                    atBegin: true
                }
            }
        },

        connect: {
            dev: {
                options: {
                    hostname: 'localhost',
                    port: config.port
                }
            },
            test: {
                options: {
                    hostname: 'localhost',
                    port: config.port
                }
            }
        },

        open: {
            path: 'http://localhost:<%= config.port %>'
        },

        protractor: {
            e2eDev: {
                options: {
                    keepAlive: false,
                    configFile: 'test/protractor.conf.js',
                    args: {
                        baseUrl: 'http://localhost:<%= config.port %>',
                        specs: [
                            'test/e2e/**/*.js'
                        ],
                        capabilities: {
                            'browserName': '<%= config.testBrowser %>'
                        },
                        framework: 'jasmine'
                    }
                }
            }
        },

        karma: {
            unit: {
                runnerPort: config.port,
                singleRun: true,
                browsers: [ 'PhantomJS' ],
                frameworks: [ 'jasmine' ],
                files: [
                    { src: [ 'test/unit/unit.tests.js' ] },
                ]
            }
        }
    });

    grunt.registerTask('default', [
        'dev'
    ]);

    grunt.registerTask('dev', [
        'bower',
        'connect:dev',
        'watch:dev'
    ]);

    grunt.registerTask('e2e', [
        'connect:test',
        'protractor:e2eDev'
    ]);

    grunt.registerTask('unit', [
        'connect:test',
        'karma:unit'
    ]);

};
