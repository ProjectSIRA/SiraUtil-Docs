# Intro

SiraUtil's Zenject API provides a useful and customizable hook into the Zenject library as well as some other configurations for your mod.

## The Zenjector

The `Zenjector` is a class which allows mods to register and configure their zenject setup. It starts with the BSIPA `[Init]` injection in the `Plugin` class.

```cs

[Plugin(RuntimeOptions.DynamicInit)]
internal class Plugin
{
    [Init]
    public Plugin(Zenjector zenjector) 
    {
        
    }
}

```

Similar to how a mod would receive dependencies like the BSIPA `Logger`, BSIPA `Config` generator, and `PluginMetadata` which is specific to their mod, a mod can also receive the `Zenjector`.

### Installing

The `Zenjector` provides 4 ways to install bindings into one or many containers.

#### Option A: Installer with Location

This is the easiest and most intuitive installation method. Here is an example installer being installed in the menu.

```cs
zenjector.Install<MyCustomInstaller>(Location.Menu);
```

One of the benefits of the `Location` enum, is that you can instruct a installer to be installed in multiple locations without rewriting the installer type.

```cs
zenjector.Install<MyCustomInstaller>(Location.StandardPlayer | Location.CampaignPlayer);
```

The installation above will install the `CustomInstaller` to the `StandardPlayer` and the `CampaignPlayer`. These locations are defined by SiraUtil and all link to some backing installer.

#### Option B: Installer with Installer

This is basically what *Option A: Installer with Location* does under the hood. It installs a custom installer wherever and whenever another base installer is being installed.

```cs
zenjector.Install<MyCustomInstaller, TutorialInstaller>();
```

The installation above will install the `CustomInstaller` alongside the base game `TutorialInstaller`. Using intuition, this means that `CustomInstaller` will only be installed when the a user enters the tutorial.

#### Option C: Callback with Location

This option provides a callback when an context is being constructed at a specific location.

```cs
zenjector.Install(Location.StandardPlayer, Container => { /* Consider this like a pseudo installer */ });
```

This can be useful when an installer only has one or two bindings: instead of creating a whole installer type with just one or two bindings, you can just do it here. However, it is recommended to create installer types normally for organization purposes.

#### Option D: Callback with Installer

This takes the priciples in *Option B: Installer with Installer* and *Option C: Callback with Location*. It will callback when a specified base game installer is being installed.

```cs
zenjector.Install<TutorialInstaller>(Container => { /* Consider this like a pseudo installer */ });
```

This is not recommended because it's less organized and the most prone to breaking from a game update.

### Locations

The `Location` enum is new to SiraUtil 3 which reduces repetition and is more intuitive for setting up installers.

Let's explain what some of them mean and where they'll install to.

#### `Location.App`

This will install the bindings into the main game container. Anything installed here is accessible from any child containers. Essentially, if something is installed here, it'll be available in practically every scene and every binding.

#### `Location.GameCore` and `Location.MultiplayerCore`

This will install on the core systems of each of these modes. Something to note, when in multiplayer, these are installed together, so you probably should avoid doing `Location.GameCore | Location.MultiplayerCore`.

#### The differences between "Core" and "Player"

Usually, you will want to install onto the `Player`. This represents any and all bindings associated with who is playing. When in singleplayer gamemodes (Solo, Arcade, Campaign, etc), these are installed in the same container as `Location.GameCore`. However, when in multiplayer, the local `Player` is a child of the entire `GameCore`. Some bindings such as the `SaberManager` and `AudioTimeSyncController` won't be available in `Location.GameCore` for multiplayer, but it will work for singleplayer modes. You can use [ContainerView](https://container.sira.pro) to view which bindings are in which installers and contexts as well as see the dependency inheritance tree, and use the XML docs (hover over the Location.XYZ enum in your IDE) to learn which backing installer something is being installed on.