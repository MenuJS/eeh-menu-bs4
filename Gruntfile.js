'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        settings: {
            src: 'src',
            dist: 'dist',
            build: 'build',
            libName: 'eeh-navigation-bs4'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            src: [
                '<%= settings.src %>/**/*.js'
            ]
        },
        ngAnnotate: {
            eehNavigation: {
                files: {
                    '<%= settings.build %>/<%= settings.libName %>.annotated.js': [
                        '<%= settings.src %>/<%= settings.libName %>.js',
                        '<%= settings.src %>/collapsed-content/*.js',
                        '<%= settings.src %>/navbar/*.js'
                    ]
                }
            }
        },
        ngtemplates: {
            eehNavigationBs4: {
                cwd: '<%= settings.src %>',
                src: ['**/*.html'],
                dest: '<%= settings.dist %>/<%= settings.libName %>.tpl.js',
                options: {
                    url: function (url) {
                        return 'template/eeh-navigation-bs4/' + url;
                    }
                }
            }
        },
        uglify: {
            beautify: {
                files: {
                    '<%= settings.dist %>/<%= settings.libName %>.js': [
                        '<%= settings.build %>/<%= settings.libName %>.annotated.js'
                    ]
                },
                options: {
                    wrap: '<%= settings.libName %>',
                    compress: false,
                    mangle: false,
                    beautify: true
                }
            },
            minify: {
                files: {
                    '<%= settings.dist %>/<%= settings.libName %>.min.js': [
                        '<%= settings.build %>/<%= settings.libName %>.annotated.js'
                    ],
                    '<%= settings.dist %>/<%= settings.libName %>.tpl.min.js': ['<%= settings.dist %>/*.tpl.js']
                },
                options: {
                    wrap: '<%= settings.libName %>',
                    sourceMap: true
                }
            }
        },
        watch: {
            src: {
                files: ['src/**/*.*'],
                tasks: ['build'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('lint', [
        'jshint:src'
    ]);

    grunt.registerTask('build', [
        'ngAnnotate',
        'uglify:beautify',
        'uglify:minify'
    ]);

    grunt.registerTask('default', [
        'build'
    ]);
};
