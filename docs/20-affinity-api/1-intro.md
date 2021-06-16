# Intro

The Affinity API is a solution to an issue that has been plaguing Zenject-based mods for a while.

One of the benefits of using Zenject in your mods is that it reduces tightly coupled code by removing static and publicly persistent singletons.

However, when trying to do things where [Harmony](https://harmony.pardeike.net/articles/intro.html) is the best solution, this required the patches to be patched in a static context and forced modders to make part of their codebase static.

The Affinity API solves this by introducing instance level harmony patches through the power of Zenject.