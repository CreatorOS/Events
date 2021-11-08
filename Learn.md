# Events

`Event` is an inheritable member of a contract.  
`Events` allow logging to the Ethereum blockchain. Some use cases for events are:

- Listening for events and updating user interface
- A cheap form of storage

An event generated is not accessible from within contracts, not even the one which created and emitted them.

This is how you define an `event`:

```
    event AnotherLog();
```

Let's write a function to emit the `event`:

```
    function test() public {
        emit AnotherLog();
    }
```

## Passing Parameters to events

Up to 3 parameters can be indexed in an event.
Indexed parameters helps you filter the logs by the indexed parameter.

Let's declare an event with one indexed parameter `sender` and a `message` parameter:

```
    event Log(address indexed sender, string message);
```

Emit the event with `msg.sender` and `Hello World!` message in `test()` function:

```
    function test() public {
        emit Log(msg.sender, "Hello World!");
        emit AnotherLog();
    }
```

Hit `Run` to check if the event is getting emitted properly or not.
You should see the log of the emitted event in 2nd test output if it ran successfully.
