NGRX Docs

@ngrx/store npm install @ngrx/store --save
Store is RxJS powered state management for Angular applications, inspired by Redux. Store is a controlled state container designed to help write performant, consistent applications on top of Angular.


Actions
Actions are one of the main building blocks in NgRx. Actions express unique events that happen throughout your application. From user interaction with the page, external interaction through network requests, and direct interaction with device APIs, these and more events are described with actions.

Actions are used in many areas of NgRx. Actions are the inputs and outputs of many systems in NgRx. Actions help you to understand how events are handled in your application. This guide provides general rules and examples for writing actions in your application.


Reducers
Reducers in NgRx are responsible for handling transitions from one state to the next state in your application. Reducer functions handle these transitions by determining which actions to handle based on the action's type.

Reducers are pure functions in that they produce the same output for a given input. They are without side effects and handle each state transition synchronously. Each reducer function takes the latest Action dispatched, the current state, and determines whether to return a newly modified state or the original state. This guide shows you how to write reducer functions, register them in your Store, and compose feature states.

Selectors
Selectors are pure functions used for obtaining slices of store state. @ngrx/store provides a few helper functions for optimizing this selection. Selectors provide many features when selecting slices of state:
Portability
Memoization
Composition
Testability
Type Safety
When using the createSelector and createFeatureSelector functions @ngrx/store keeps track of the latest arguments in which your selector function was invoked. Because selectors are pure functions, the last result can be returned when the arguments match without reinvoking your selector function. This can provide performance benefits, particularly with selectors that perform expensive computation. This practice is known as memoization.

Meta-reducers
We can think of meta-reducers as hooks into the action->reducer pipeline. Meta-reducers allow developers to pre-process actions before normal reducers are invoked.
@ngrx/store-devtools npm install @ngrx/store-devtools --save
Store Devtools provides developer tools and instrumentation for Store.

@ngrx/effects npm install @ngrx/effects --save
Effects are an RxJS powered side effect model for Store. Effects use streams to provide new sources of actions to reduce state based on external interactions such as network requests, web socket messages and time-based events.
In a service-based Angular application, components are responsible for interacting with external resources directly through services. Instead, effects provide a way to interact with those services and isolate them from the components. Effects are where you handle tasks such as fetching data, long-running tasks that produce multiple events, and other external interactions where your components don't need explicit knowledge of these interactions.

@ngrx/router-store  npm install @ngrx/router-store --save
Bindings to connect the Angular Router with Store. During each router navigation cycle, multiple actions are dispatched that allow you to listen for changes in the router's state. You can then select data from the state of the router to provide additional information to your application.

Router Actions
Router Store provides five navigation actions which are dispatched in a specific order. The routerReducer provided by Router Store updates its state with the latest router state given by the actions. By default we recommend to use the creator functions we provide.


@ngrx/entity   npm install @ngrx/entity --save
Entity promotes the use of plain JavaScript objects when managing collections. ES6 class instances will be transformed into plain JavaScript objects when entities are managed in a collection. This provides you with some assurances when managing these entities:
Guarantee that the data structures contained in state don't themselves contain logic, reducing the chance that they'll mutate themselves.
State will always be serializable allowing you to store and rehydrate from browser storage mechanisms like local storage.
State can be inspected via the Redux Devtools.

@ngrx/data  npm install @ngrx/data --save
Many applications have substantial domain models with 10s or 100s of entity types.
Such applications typically create, retrieve, update, and delete entity data that are "persisted" in a database of some sort, hosted on a remote server.

Developers who build these app with the NgRx Store, Effects, and Entity libraries alone tend to write a large number of actions, action-creators, reducers, effects, dispatchers, and selectors as well as the HTTP GET, PUT, POST, and DELETE methods for each entity type. There will be a lot of repetitive code to create, maintain, and test. The more entities in your model, the bigger the challenge.
With NgRx Data you can develop large entity models quickly with very little code and without knowing much NgRx at all. Yet all of NgRx remains accessible to you, when and if you want it.
NgRx Data is an abstraction over the Store, Effects, and Entity that radically reduces the amount of code you'll write. As with any abstraction, while you gain simplicity, you lose the explicitness of direct interaction with the supporting NgRx libraries.

@ngrx/schematics 
package installation - npm install @ngrx/schematics --save-dev
dependencies installation -  npm install @ngrx/{store,effects,entity,store-devtools} --save
Schematics provides Angular CLI commands for generating files when building new NgRx feature areas and expanding existing ones. Built on top of Schematics, this tool integrates with the Angular CLI.

Store 
Syntax - ng generate store State [options] 
Example - ng generate store State --root --module app.module.ts

Action
Syntax - ng generate action ActionName [options]
Example - ng generate action User --spec

Reducer
Syntax - ng generate reducer ReducerName [options]
Example - ng generate reducer User --reducers reducers/index.ts

Container
Syntax - ng generate container ComponentName [options]
Example - ng generate container UsersPage --state reducers/index.ts --stateInterface MyState

Effect
Syntax - ng generate effect EffectName [options]
Example - ng generate effect User --root -m app.module.ts

Entity
Syntax - ng generate entity EntityName [options]
Example - ng generate entity User --reducers reducers/index.ts

Feature
Syntax - ng generate feature FeatureName [options]
Example - ng generate feature User -m app.module.ts
