# bcml

Mod Loader and API for Box Critters

# Install

```js
function LoadJS(file) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;
  document.head.appendChild(script);
}
LoadJS("https://raw.githubusercontent.com/boxcritters/bcml/master/build/bcml.js");
LoadJS=null;
```

#Install Mod
```js
BCML_ModLoader.LoadMod("MODJS_URL");
```

# Create Mod
```js
var ModName = (function() {
    class ModName extends BCML_Mod {
        Init() {

        }

        Update() {

        }

        return BCML_Singleton(ModName)
    }
})();

BCML_ModLoader.RegisterMod(ModName);
```

# Build Instructions

## Setup Workspace

Install Node.js
https://nodejs.org/en/download/

Install GruntCLI

```
npm install grunt-cli -g
```

Install dependencies

```
npm install
```

## Build BCML

```
npm start
```
