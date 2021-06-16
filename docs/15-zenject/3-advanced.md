# Advanced

## Exposers

Exposers will scan a `SceneDecoratorContext` with a specific `contractName`, and automatically bind the first object matching a type.

## Mutators

Exposers will scan a `SceneDecoratorContext` with a specific `contractName`, and will invoke a callback for the first object it finds matching that type. This is done handled before the container builds.