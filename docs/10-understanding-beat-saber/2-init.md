


# Initialization

When Beat Saber first launches, it does two important things.

1. Container Bindings Installed
2. Transitioning to the next scene

### Container Binding Installation

There are very few persistent objects in Beat Saber. The only relevant objects that are never destroyed are:
* GameScenesManager
* FadeInOutController
  
Every other object is containerized to a scene which can be reloaded.

The main set of Beat Saber's dependencies are installed here. `PCAppInit` acts as the entry point for Beat Saber, and its `InstallBindings` method installs more bindings in `MainSystemsInit`, where the bulk of Beat Saber's initial bindings are installed.

`PCAppInit` is mainly for PC. There are different `AppInit` classes for every platform Beat Saber is available on. Beat Games split up the `AppInit` classes to have conditional installations for every platform.

In `MainSystemsInit::Init()`, the most essential parts to the game are setup. This is called when the `AppInit` is first initializing AND whenever a [reload](../sira-index/modders-index#terminology) occurs. 
* The game's settings are loaded and applied (for example, volume, resolution, graphics)

When `MainSystemsInit::InstallBindings()` is called (after it's `Init()`), a great amount of important bindings are installed. This ranges from data models for keeping track of beatmaps, player data, avatars, etc, as well as helpers and utility classes like the `CachedMediaAsyncLoader` and the `TimeTweeningManager`, and as well as platform specific things such as haptics and rich presence.

### Transitioning to the next scene

`PCAppInit`'s base `Start()` method eventually call `DefaultScenesTransitionsFromInit::TransitionToNextScene(bool)`. This method is responsible for determining which scene(s) to transfer to and actually transitions the game to the next scene.