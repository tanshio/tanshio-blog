---
inject: true
to: src/store/root.ts
before: // Do not DELETE hygen import
---
import { <%= h.inflection.camelize(Name, true) %> } from './<%= h.inflection.camelize(Name, true) %>/reducers'