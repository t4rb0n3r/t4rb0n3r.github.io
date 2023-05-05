const sass = require('node-sass');

module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            build: {
                files: {
                    'css/style.css': 'scss/style.scss'
                }
            }
        },
        watch: {
            files: ['scss/**/*.scss'],
            tasks: ['sass']
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', 'sass');
};
