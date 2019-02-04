1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Actions have type and payload, and those tell the reducers what "actions" to take in the application.
    Reducers: Reducers receive action types and payloads and filters through all cases (using action type) to determine what action to take.
    Store: It is where all the data is stored and it's called the single source of truth because the whole app's data is stored in the store.

2)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state (Redux Store?) is global, component state (React State?) is local. Use application state when pulling data from API and use component state when you need to store variables that aren't crucial to the overall application.

3.  Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    Allows us to write action creators that return a function rather than an action. Also allows us to delay dispatching an action.
