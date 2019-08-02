# bcml

Mod Loader and API for Box Critters

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
**THIS IS FOR IF YOU WANT TO CONTRIBUTE TO BCML***

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
