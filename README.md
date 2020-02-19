# bcml

> **ANNOUNCEMENT**: We are transfaring over to using boxcritters/boxcritters-coder-pack#

Mod Loader and API for Box Critters

# Create Mod
## 1. Getting started 
Set mod name in `config/mods.js` making sure there are no spaces
and then run `setup.bat`.
The Box critters files should download and start life in the `www` folder.

## 2. Development
Then you go to the folder for you mod in the `src` folder and start developing. **By default mods are initialised in a file that you have to create called `main.js`, this can be changed in `modinfo.js`**
 > Tip: functions like requre also work so feel free to have many files in your mod and use all the npm modules you want
 
## 3. Building
 To build your mod run `build.bat`
 and it should start building yourmod into the `build/yourmod/yourmod.js` file ready to be publlished.
 > publising mods comming soon
 and all the mods will be compiled into www/lib/client###.js
 ## 4. Testing
 To test your mod run `client.bat` and a webserver should be setup in the `www` folder 
 Then in a webroewser you must then go to `localhost:3000/play` to try out your mod.
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

# Contributions
> **INFO:** The below information is for developers of BCML and not for aspireing mod developers.
**THIS IS FOR IF YOU WANT TO CONTRIBUTE TO BCML***
## Development
Then you go to the folder for you mod in the `src` folder and start developing. **By default mods are initialised in a file that you have to create called `main.js`, this can be changed in `modinfo.js`**
 > Tip: functions like requre also work so feel free to have many files in your mod and use all the npm modules you want
 
## Building
 To build your bcml run `build.bat`
 and it should start building yourmod into the `build/bcml/bcml.js` file ready to be publlished.
 ## Testing
 To test bcml run `client.bat` and a webserver should be setup in the `www` folder 
 Then in a webrowser you must then go to `localhost:3000/play` to try out your mod.
> **Notice**: The Below informartion is not final

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
