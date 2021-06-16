# Limitations

The Affinity API makes patching more strict, and in order for it to maintain a latch onto the object that the binding was created for, some sacrafices need to be made.

### Patches are tied to the container that the object was binded in.

This can be seen as a benefit for some, but the patches are automatically applied and unapplied when the Container it was constructed on is being disposed.

### Patches are created in Zenject's initalization phase

This means you cannot patch methods such as Awake that are in the same scene as the context that is installing the Affinity patches.