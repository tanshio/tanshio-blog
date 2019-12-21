---
inject: true
to: src/store/root.ts
before: \} // Do not DELETE hygen reducer
---
  <%= h.inflection.camelize(Name, true) %>,