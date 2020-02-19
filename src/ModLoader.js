var BCML_ModnLoader = (function() {
    function LoadJS(file) {
        console.warn("BCML: this feature is disabled because CORB is weird.")
      }

    class BCML_ModLoader {
        constructor() {
            this.mods = []
        }

        LoadMod(modFile) {
            console.log("Loading Mod...")
            LoadJS(modFile);
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