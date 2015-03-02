"use strict";

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        clean: {
            dist: [ 'dist', '.tmp' ] 
        },
        http: {
            delete_db: {
                options: {
                    url: 'http://boot2docker/api/db/favoris',
                    method: 'DELETE'
                }
            },
            create_db: {
                options: {
                    url: 'http://boot2docker/api/db/favoris',
                    method: 'PUT'
                }
            }
        },
        copy: {
            main: {
                files: [ {
                    expand: true,
                    cwd: 'src/app/',
                    src: ['**', '!**/*.js', '!controllers/**', '!services/**', '!vendor/**', '!**/*.css'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'vendor/bootstrap/dist/',
                    src: ['fonts/*.*'],
                    dest: 'dist/'
                } ]
            }
        },
        useminPrepare: {
            options: {
                dest: 'dist/',
                flow: {
                    dev: {
                        steps: { 'js': [ 'concat' ], 'css': [ 'concat' ] },
                        post: []
                    },
                    prod: {
                        steps: { 'js': [ 'concat', 'uglifyjs' ], 'css': [ 'concat', 'uglifyjs' ] },
                        post: []
                    }
                }
            },
            prod: { src: 'src/app/index.html' },
            dev: { src: 'src/app/index.html' },
        },
        usemin: {
            prod: 'dist/index.html',
            dev: 'dist/index.html' 
        },
        uglify: {
            options: {
                report: 'min',
                mangle: false
            }
        },
        watch: {
            scripts: {
                files: [ 'src/**/*.js', 'src/**/*.html' ],
                tasks: [ 'all' ],
                options: {
                    spawn: false,
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-http');

    grunt.registerTask('all', 'Exécution de toutes les tâches', [ 'clean', 'copy', 'useminPrepare:dev', 'concat', 'uglify', 'usemin:dev' ])
};
