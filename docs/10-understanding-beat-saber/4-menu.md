# The Menu


### View Controllers

A `ViewController`'s purpose is to control a view. A view in Beat Saber is loosely defined as a group of UI elements that serve some purpose.

Let's study an example of a `ViewController`.

#### PlatformLeaderboardViewController

![PlatformLeaderboardViewController](/img/understanding-beat-saber/platformleaderboardviewcontroller.png)

This `ViewController`, the `PlatformLeaderboardViewController` is designed to handle a platform leaderboard. It is a full-sized view controller.

It has one main purpose: to show score data. It is important for `ViewController`s to not become overly responsible. 

```cs
// From Beat Saber 1.16.2
public override void SetData(IDifficultyBeatmap difficultyBeatmap);
```

It also has one way of setting its data. The method above is in charge of populating the UI to show level data about a particular `IDifficultyBeatmap`. Note that there is no option to pass in what leaderboard mode it is (Global, Around You, or Friends). Since the UI that controls those settings is on the `PlatformLeaderboardViewController`, there is no need for it to also be changed from the outside.

When writing your own `ViewController`s, it's very important to not make a controller overly responsible, and that some property of the view isn't mutatable from more than one location. This increases readability and reduces confusion over your view.

### Screen

A `Screen` is a container for view(s). A `Screen` usually contains one or more `ViewController`s. A `Screen` usually dictates the maximum size of everything inside of it. A `Screen` usually contains multiple `ViewController`s. For example, this one screenshot contains **4** `ViewController`s!

![Solo Main Screen](/img/understanding-beat-saber/solomainscreen.png)

When making UI, you don't really need to touch the `Screen` at all, however it is still useful information to know for advanced users.

### ScreenSystem

A `ScreenSystem` controls and manages multiple `Screen`s. The main `ScreenSystem` that Beat Saber has supports **5** `Screen`s:
* TopScreen: Usually contains the title bar and back button
* MainScreen: The center `Screen`. It is the only required `Screen` and usually contains the most important `ViewController`(s) for a particular view.
* LeftScreen: The `Screen` to the left of the main `Screen`.
* RightScreen: The `Screen` to the right of the main `Screen`.
* BottomScreen: This is currently the `Screen` on the floor.

:::caution
Beat Saber uses the word "top" very loosely. Sometimes, the Top `ViewController` is referring to the top one, while other times it means the main one.
:::

### FlowCoordinators

With all of these `ViewController`s and `Screen`s, there needs to be a class which handles the organization of these components. This is where the `FlowCoordinator` comes in. A `FlowCoordinator`'s main job is to control `ViewController`s and push them onto different `Screen`s.

### Putting it all together

The design of the `ViewController`-`FlowCoordinator` system put together with the `ScreenSystem` achieves some important advantages:
* `ViewController`s are modular: They can be reused in multiple locations for various use cases.
* Clear flow: `ViewController`s should never depend on a `FlowCoordinator` and should never depend on another `ViewController`. This establishes a clear flow pattern and futher modularizes `ViewController`s.