# Modder's Index

This page aims to act as a resource for newer modders.

* Getting the sabers
  * You can get an instance of the `SaberManager` and access the .leftSaber and .rightSaber property

* Getting the current song time
  * You can get an instance of the `AudioTimeSyncController` and access the .songTime property
  * There is also properties for song start time, song length, and more.

## Terminology

* **Reload**
  * This is the act of the game reloading or restarting internally. For example, this happens natively when a user hits the Settings -> OK button in the Beat Saber menu. Every single scene and almost every object gets reconstructed. This often releases resources being held up by certain processes and can reduce the RAM usage of Beat Saber temporarily.