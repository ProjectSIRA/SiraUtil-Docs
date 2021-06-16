# Writing an Affinity Patch

Here is an example of an affinity patch that pauses the level after every 10 **misses**.

```cs
internal class PauseOnXMisses : IAffinity
{
    private int _misses = 0;
    private readonly PauseController _pauseController;

    public PauseOnXMisses(PauseController pauseController)
    {
        _pauseController = pauseController;
    }

    [AffinityPatch(typeof(ScoreController), nameof(ScoreController.HandleNoteWasMissed))]
    protected void PlayerMissedNote(NoteController noteController)
    {
        if (noteController.colorType != ColorType.None)
        {
            _misses++;
            if (_misses >= 10)
            {
                _pauseController.Pause();
                _misses = 0;
            }
        }
    }
}
```

This doesn't need to be patched since someone can just subscribe to the events normally. However, what if we wanted to **cancel** every 10th miss and then pause the game?

```cs
internal class PauseOnXMisses : IAffinity
{
    private int _misses = 0;
    private readonly PauseController _pauseController;

    public PauseOnXMisses(PauseController pauseController)
    {
        _pauseController = pauseController;
    }

    [AffinityPrefix]
    [AffinityPatch(typeof(ScoreController), nameof(ScoreController.HandleNoteWasMissed))]
    protected bool PlayerMissedNote(NoteController noteController)
    {
        if (noteController.colorType != ColorType.None)
        {
            _misses++;
            if (_misses >= 10)
            {
                _pauseController.Pause();
                _misses = 0;
                return false;
            }
        }
        return true;
    }
}
```

This is where the Affinity API shows its strength. It allows you to use dependencies that you normally wouldn't have available without making them static while being able to modify the way methods work.

## Differences and Similarities to Harmony Patching

Affinity Patching uses Harmony patching under the hood, so however you would write a harmony patch, you can do so here as well. The largest difference is with the attributes.

Affinity attributes are more strict than Harmony attributes to reduce boilerplate, but you can still do everything from specifying priority to running before and after certain patches. In order to define an AffinityPatch, you use the `[AffinityPatch]` attribute on a method.

The type of patch (Prefix, Postfix, Transpiler, etc) is handled through the `[AffinityPrefix]`, `[AffinityPostfix]`, `[AffinityTranspiler]` etc... attributes.

Unlike Harmony, if you don't specify the type of patch, it will **default to Postfix**. This makes the patch type attribute optional.

In order for the `Affinity` system to detect the patch, it needs to have an `IAffinity` interface that is binded as a contract in a zenject container.

As an example, the binding for the example above can look like these:
```cs
public override void InstallBindings()
{
    // Option A:
    Container.BindInterfacesAndSelfTo<PauseOnXMisses>().AsSingle(); // This will pick up the IAffinity interface from your type.

    // Option B:
    Container.BindInterfacesTo<PauseOnXMisses>().AsSingle(); // This will pick up the IAffinity interface from your type.

    // Option C:
    Container.Bind<IAffinity>().To<PauseOnXMisses>().AsSingle(); // This binds the interface directly to your type.
}
```

There are more ways to bind it, but that more general Zenject knowledge, which **you already know because you know the basics of Zenject**.

:::caution
Although the Affinity API allows you to do certain things, it comes at a cost. The next section highlights on them further.
SiraUtil internally uses the Affinity API for certain things, but only when necessary. SiraUtil still uses normal harmony patches for plenty of things. If you're unsure when you should use Harmony patching and when you should Affinity patching for a specific situation, DM `Auros#0001` on Discord.
:::