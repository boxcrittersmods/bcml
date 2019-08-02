class BCML_Mod {
    Init() {
        throw new Error("Init function not overidden");
    }

    Update() {
        throw new Error("Update function not overidden");
    }
}
//@ts-check
var BCML_ModLoader = (function() {
    function LoadJS(file) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = file;
        document.head.appendChild(script);
      }

    class BCML_ModLoader {
        constructor() {
            this.mods = []
        }

        LoadMod(modFile) {
            console.log("Loading Mod...")
            LoadJS(modFile);
            console.log("Mod Loaded");
        }

        RegisterMod(mod) {
            this.mods.push(mod.getInstance());
        }

        Init() {
            this.mods.forEach(mod=>{
                mod.Init();
            })
        }

        Update() {
            this.mods.forEach(mod=> {
                mod.Update();
            })
        }
    };
    
    return BCML_Singleton(BCML_ModLoader).getInstance();
})();
//@ts-check

 /**
 * 
 * @template T
 * @param {{new():T}} Type
 * @returns {{getInstance():T,new():T}} Singleton Class
 */
function BCML_Singleton(Type) {
    // @ts-ignore
    return (function() {
        var instance;

        function createInstance() {
            var object = new Type();
            return object;
        }
        // @ts-ignore
        Type.getInstance = function() {
            if(!instance) {
                instance = createInstance();
            }
            return instance;
        }
        return Type;
    })();
}