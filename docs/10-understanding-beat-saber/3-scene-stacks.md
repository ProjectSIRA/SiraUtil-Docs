# Scene Stacks

Beat Saber organizes their scenes into scene groups. They are a collection of scenes that get loaded additively together with optional dependencies injected. Scene groups can be loaded together to form the scene stack, which is managed in the `GameScenesManager`. The base game scene groups are configured via the `ScenesTransitionSetupDataSO` ScriptableObject. All scenes are loaded this way.

Beat Saber loads scenes this way to help modularize scenes. For example, the `GameCore` scene contains managers and such for game elements like the notes, hit sound effects, and sabers. This allows the environment scene and gamemode specific elements to be loaded separately.

As an example, the scene stack for loading a song in Solo or Party looks like this:
* *Name*Environment
* StandardGameplay
* GameCore

...while the scene stack for loading a song in campaigns look like this:
* *Name*Environment
* MissionGameplay
* GameCore