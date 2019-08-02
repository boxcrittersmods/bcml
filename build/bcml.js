"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BCML_Mod =
/*#__PURE__*/
function () {
  function BCML_Mod() {
    _classCallCheck(this, BCML_Mod);
  }

  _createClass(BCML_Mod, [{
    key: "Init",
    value: function Init() {
      throw new Error("Init function not overidden");
    }
  }, {
    key: "Update",
    value: function Update() {
      throw new Error("Update function not overidden");
    }
  }]);

  return BCML_Mod;
}(); //@ts-check


var BCML_ModLoader = function () {
  function LoadJS(file) {
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = file;
    document.head.appendChild(script);
  }

  var BCML_ModLoader =
  /*#__PURE__*/
  function () {
    function BCML_ModLoader() {
      _classCallCheck(this, BCML_ModLoader);

      this.mods = [];
    }

    _createClass(BCML_ModLoader, [{
      key: "LoadMod",
      value: function LoadMod(modFile) {
        console.log("Loading Mod...");
        LoadJS(modFile);
        console.log("Mod Loaded");
      }
    }, {
      key: "RegisterMod",
      value: function RegisterMod(mod) {
        this.mods.push(mod.getInstance());
      }
    }, {
      key: "Init",
      value: function Init() {
        this.mods.forEach(function (mod) {
          mod.Init();
        });
      }
    }, {
      key: "Update",
      value: function Update() {
        this.mods.forEach(function (mod) {
          mod.Update();
        });
      }
    }]);

    return BCML_ModLoader;
  }();

  ;
  return BCML_Singleton(BCML_ModLoader).getInstance();
}(); //@ts-check

/**
* 
* @template T
* @param {{new():T}} Type
* @returns {{getInstance():T,new():T}} Singleton Class
*/


function BCML_Singleton(Type) {
  // @ts-ignore
  return function () {
    var instance;

    function createInstance() {
      var object = new Type();
      return object;
    } // @ts-ignore


    Type.getInstance = function () {
      if (!instance) {
        instance = createInstance();
      }

      return instance;
    };

    return Type;
  }();
}
