# Frontend Test

Build the functionality described in `./docs/functional-design.pdf`.

You may approach it any way you want, as long as you can do it in less than 6 hours.

We would like you to focus on:

- Architecture rather than tools/libraries/frameworks. You may use any tools you want, as long as you can explain us why
  you think they are a good fit for this particular exercise.
- Re-usability/maintainability. For example, we might ask you how much effort would be involved in adding a third
  select box (car model year), for which the available options depend on the value of the second one (car model).
- Testability. We don't expect you to provide test *coverage* as part of the exercise (although you surely may if you
  want to), but you should be able to explain how your code is testable.

We also encourage you to:

- Add some technical documentation to the docs folder. For example, a drawing of your data flow, a dependency graph,
  or a Markdown file describing your APIs.
- Load the application data (brand/model) asynchronously 

You *don't* have to:

- Make it look super pretty (styling)
- Make it work flawless in every browser

## Requirements
As per the Functional Requirements: `./docs/functional-design.pdf`.

### Elements
We will be running an automated set of acceptance tests to verify your submission;
Please adhere to the following `ids` for identifying your inputs.

|Wireframe ID |Description|CSS Selector|
|:---:|---|---|
|**S1**| Select input  | `#S1` |
|**S2**| Select input | `#S2` |
| **T**| Text input  | `#T` |
|**B** | Button input | `#B` |
 
 ### Rules
```
 #S1 Should contain a list of available car brands.
 
 When #S1 is empty: 
 #S2 should not contain any options.
 
 When #S1 is filled in: 
 #S2 should contain a list of available car models from the selected brand
 
 When #S1, #S2 and #T are empty:
 #B should be disabled.

 When any of #S1, #S2 and #T are filled in:
 #B should be enabled.
```

## Questions?

If you have any questions please send an email to DL-eCG-NL-FE-Assessment@ebay.com.

## Finished?

Please send an email to DL-eCG-NL-FE-Assessment@ebay.com let us know you're done.
