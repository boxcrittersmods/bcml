var srcFile = "src/**/*.js",
  objFile = "build-obj/bcml.raw.js",
  distFile = "build/bcml.js";
distFileMin = "build/bcml.min.js";

module.exports = function(grunt) {
	"use strict";
  require("load-grunt-tasks")(grunt);

  //config
  grunt.initConfig({
    concat: {
      js: {
        src: [srcFile],
        dest: objFile
      }
    },
    babel: {
      options: {
        //sourceMap: "inline",
        sourceMap: false,
        //retainLines: true,
        presets: ["@babel/preset-env"]
      },
      build: {
        files: {
          [distFile]: objFile
        }
      }
    },
    uglify: {
      build: {
        files: [
          {
            src: distFile,
            dest: distFileMin
          }
        ]
      }
    }
  });

  //plugins
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  //register tasks
  grunt.registerTask("build", ["concat", "babel", "uglify"]);
};
