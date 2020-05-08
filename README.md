<p>
<img src="./src/assets/calculator_demo.gif" />
</p>
<p><img src="./src/assets/currency_demo.gif"/></p>
<p>
<img src="./src/assets/history_snapshot.png" />
</p>

#### Table of Contents

- [Motivation](#motivation)
- [Functionality](#functionality)
- [Installation](#installation-and-start-localy)
- [Run Tests](#run-tests)
- [Technical debt](#technical-debt)
- [LICENCE](#licence)

#### Motivation

This is a demo SPA.
It was created to share ideas around using

- Context API as a state management
- React hooks

in authontification and state management with one source of truth

#### Functionality

- login form
- logout
- authorized components
- currency exchange list with sorting/marking as favorite
- currency exchange calculator (for existing pairs in a list)
- history tab with paggination and sorting

> [SORTED RULES]
>
> - 10 elements per page
> - not more then 2 identical deals
> - at least one deal with profit over \$100
> - not more then 2 loss deals (x < 0)
> - all deals sorted by finishDate (by descending)

[>>> LIVE DEMO HERE <<<](https://yacheckalin.github.io/simple-react-app/)

#### Installation and start localy

```javascript
yarn install
yarn start
```

#### Run tests

```javascript
yarn test
```

#### LICENCE

Copyright (c) 2020 yacheckalin

MIT

#### TECHNICAL DEBT

- add multilanguage support (<code>EN | RU</code>)
- add e2e test for currency (sorting by favorite case)
- add e2e test for currency (changin the star icon)
- add e2e tests for calculator

  - empty summ amount case
  - disabled <code>Calculate</code> button
  - when you change one currency from the opposite exchange list disabled all instead of existing ones
  - calculatation returns right result

- add e2e tests for history
  - list sorts by the rules properly
  - pagination works properly
- refactor <code>helpers</code> and decompose each sorting rule for independent helper method with unit tests
- [*] add svg icons
- [*] fix markup on stretching (calculator)
- [*] add icon to calculator identificator
- [*] add icon to favorite
- [*] add icon to pagination
- [*] add validation to the calculation (only number calculatable)
- [] add propTypes
- [*] performance optimization (React.memo,etc ...)
- [*] add valid email for cridentials [test@test.com, TestPassword_]
- add constants to the initialValues (context, containers)
