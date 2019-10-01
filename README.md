# bcml

> **ANNOUNCEMENT**: Development direction may change as we split development between creating a client sided API and interfacing with the Official TBA BoxCritters APi

Mod Loader and API for Box Critters

# Create Mod
> **Notice**: The Below informartion is not final
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
> **INFO:** The below information is for developers of BCML and not for aspireing mod developers.
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

## Build/Compile BCML

```
npm start
```

## Functions to be connected to Box Critters when in use
> **Notice**: The Below informartion is not final
```js
BCML_ModLoader.Init();
```
This need to be places where Box crittes initialises.

```js
BCML_ModLoader.Update();
```
This needs to be placed somewhere within the game loop of Box Critters or the equivalent
