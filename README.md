# Available Options
#### [freecodecamp - redux](https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/)

#### contact to teacher
- ask questions
  - twit https://twitter.com/OhansEmmanuel with #UnderstandingRedux

#### egghead
- [egghead.io_redux_course_notes](https://github.com/tayiorbeii/egghead.io_redux_course_notes)
- [video](https://egghead.io/courses/getting-started-with-redux)

#### [scrimba tutorial](https://scrimba.com/g/glearnreact)

#### [odin](https://www.theodinproject.com/courses/javascript/lessons/react)


# Chosen Option
## [egghead](https://egghead.io/courses/the-beginner-s-guide-to-react)
## [codecademy 1](https://www.codecademy.com/learn/react-101)
## [codecademy 2](https://www.codecademy.com/learn/react-102)

## [tutorial](https://reactjs.org/tutorial/tutorial.html)
## [tool](https://github.com/mars/create-react-app-buildpack)

# JSX

### [Virtual DOM](https://www.codecademy.com/articles/react-virtual-dom)
- Working in virtual DOM is more efficiency than working with real DOM manipulation
- In updated react, virtual DOM only updates changed object only.

### practiced
- class: className,
- self-closing tags,
- event listener: lower case word
- [jsx syntax](https://reactjs.org/docs/jsx-in-depth.html)
- variables, ternary operator, conditional statement
- React.createElement

# React components
import React from 'react';
import ReactDOM from 'react-dom';
### class names are written in UpperCamelCase
- https://en.wikipedia.org/wiki/Naming_convention_(programming)#Java

### [JavaScript ES2015 class syntax](https://exploringjs.com/es6/ch_classes.html)

### [understanding this in JavaScript](https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/)

# Components interacting

### Components render other Components
- [Sample code](./../examples/1_profile_page/)
- [Like JS Module systems](http://eloquentjavascript.net/10_modules.html)
- [React’s specific module system comes from ES6](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)
- [ES6’s module system](https://exploringjs.com/es6/ch_modules.html)

### this.props
- [Prop displayer sample code](./../examples/2_prop/)
- [Prop name follows Javascript variable naming rules](https://mathiasbynens.be/notes/javascript-identifiers)
- [event hanlder](./../examples/4_talker)
  - naming conventions : what type of event you are listening for
    - ex) handleClick , handleKeyPress
- [props.children](./../examples/5_props_children)
  - if plural : array type
  - singular : non-array
- [default props](./../examples/6_default_prop/)

### this.state
- [Dynamic information](http://www.teach-ict.com/as_a2_ict_new/ocr/AS_G061/311_data_info_knowledge/static_dynamic_data/miniweb/pg4.htm)
- [ES6 JS Class](https://hacks.mozilla.org/2015/07/es6-in-depth-classes/)
- [React DOCS handling events](https://reactjs.org/docs/handling-events.html)
- #setState method calls 'render' function
- [Sample code](./../examples/7_toggle_color/)

### Authorization form project

### Stateless component from stateful component
- In the same component, don't update it's prop
- [Stateful, stateless Sample code](./../examples/8_stateless_stateful/)
- [Receive event handler Sample code](./../examples/9_receive_event_handler/)

### Child components update their sibling's props
- [Sample code](./../examples/10_child_updates_sibling)

### Style
- We can omit 'px' ex) '100px' -> 100
- [Document](https://reactjs.org/docs/dom-elements.html)
- [Sample code](./../examples/11_styles/)

### Container components from presentational components
- logic components and presentational components should be seperated.
- presentational component will always get rendered by a container component.
- [Document](https://medium.com/@learnreact/container-components-c0e67432e005#.gacsoomn1)
- [Sample code](./../examples/12_guinea_pigs/)

### propTypes
- [Sample code](./../examples/13_prop_types/)
- [Sample code](./../examples/14_prop_types_2/)

### React forms
- [Sample code](./../examples/15_user_input/)
- controlled component and uncontrolled component
  - controlled component : no memory
  - [Document](https://reactjs.org/docs/forms.html)

### Lifecycle methods mounting
- When a component calls it calls this three methods in order
  - componentWillMount -> render -> componentDidMount
- [Component Mounting Sample code](./../examples/16_component_will_mount/)

### Lifecycle methods updating
- A component updates every time that it renders, starting with second order
  - componentWillReceiveProps
  - shouldComponentUpdate
  - componentWillUpdate
  - render
  - componentDidUpdate
- [Component updating Sample code](./../examples/17_component_update/)
- [Document](https://reactjs.org/docs/components-and-props.html)
- [How to create a react app](https://www.codecademy.com/articles/how-to-create-a-react-app)


# Egghead tutorial
https://egghead.io/courses/the-beginner-s-guide-to-react

# [Scrimba tutorial](https://scrimba.com/g/glearnreact)

### [The difference between function based component and class based component](https://scrimba.com/p/p7P5Hd/c3bNDCz)
### [Supported events](https://reactjs.org/docs/events.html#supported-events)
### Lifecycle methods
- [How and when](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)
- [Component lifecycle changes(deprecated)](https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes)
- deprecated: componentWillMount, componentWillReceiveProps, componentWillUpdate
- [Sample Code](./../examples/18_component_lifecycle/app.js)
- [Sample Code update](./../examples/18_component_lifecycle/componentDidUpdate.js)
- additional resources:
  - https://reactjs.org/docs/react-component.html#static-getderivedstatefromprops
  - https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  - https://reactjs.org/docs/react-component.html#getsnapshotbeforeupdate

### Api
- [fetch](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)
- [api practice website](https://swapi.co/)
- [promise](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261)
- [Sample Code](./../examples/18_component_lifecycle/componentDidMount.js)

### Form
- [doc](https://reactjs.org/docs/forms.html)
- [Sample Code](./../examples/19_form/app.js)
- [Formik](https://jaredpalmer.com/formik/docs/overview)
- [Sample Code 2](./../examples/19_form/app2.js)
- [Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
- [Sample Code 3](./../examples/19_form/app3.js)
- [Structure improved sample code](./../examples/19_form/structured)

### Writing modern react apps
- [Sample Code](./../examples/21_modern_react/app.js)
- Other modern/advanced React features/topics to learn:
  - [Official React Context API](https://reactjs.org/docs/context.html)
  - [Error Boundaries](https://reactjs.org/docs/error-boundaries.html)
  - [render props](https://reactjs.org/docs/render-props.html)
  - [Higher Order Components](https://reactjs.org/docs/higher-order-components.html)
  - [React Router](https://reacttraining.com/react-router/core/guides/philosophy)
  - [React Hooks](https://reactjs.org/docs/hooks-intro.html)
  - [React lazy, memo, and Suspense](https://reactjs.org/blog/2018/10/23/react-v-16-6.html)
- [useState Sample Code](./../examples/21_modern_react/use_state.js)
- [useEffect Sample Code](./../examples/21_modern_react/use_effect.js)
- [useEffect Sample Code 2](./../examples/21_modern_react/use_effect_2.js)

### ideas
- [ideas 1](https://medium.freecodecamp.org/every-time-you-build-a-to-do-list-app-a-puppy-dies-505b54637a5d)
- [ideas 2](https://medium.freecodecamp.org/want-to-build-something-fun-heres-a-list-of-sample-web-app-ideas-b991bce0ed9a)
- [ideas 3](https://medium.freecodecamp.org/summer-is-over-you-should-be-coding-heres-yet-another-list-of-exciting-ideas-to-build-a95d7704d36d)

## [tutorial](https://reactjs.org/tutorial/tutorial.html)
- Thu

## [tool](https://github.com/mars/create-react-app-buildpack)
- Thu

### additional resources
- [prop types and default types](https://www.npmjs.com/package/prop-types)
