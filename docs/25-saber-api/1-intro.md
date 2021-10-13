# Intro

SiraUtil gives modders an easy and strong way to interact and play with sabers, as well as a way to completely override the saber model.

How To Use:

Create a class which inherits `SaberModelController`, and optionally `IColorable` (to have SiraUtil and other mods know how to change the color).

Bind it in a container with the player as so:

```cs
Container.BindInstance(SaberModelRegistration.Create<YourSaberModelController>(100)).AsSingle();
```

The `100` in the example is the priority. The mod with the highest registered priority will be the model controller used. There are more options for the constructor to play with.