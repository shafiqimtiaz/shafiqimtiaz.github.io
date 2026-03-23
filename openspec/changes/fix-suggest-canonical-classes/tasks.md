## 1. Prepare data model

- [x] 1.1 Define canonical class mapping and alias table (e.g., canonicalClasses, classAliases)
- [x] 1.2 Add unit tests for mapping correctness

## 2. Implement suggestion filter pipeline

- [x] 2.1 Update suggest/callback provider to call canonical resolver
- [x] 2.2 Implement filtering logic: remove non-canonical values
- [x] 2.3 Implement alias resolution: convert alias values to canonical equivalents

## 3. Add behavior tests

- [x] 3.1 Add tests for canonical-only suggestion results
- [x] 3.2 Add tests for alias resolution behavior
- [x] 3.3 Add tests for non-canonical suggestions being dropped

## 4. Documentation and release notes

- [x] 4.1 Document canonical class suggestion behavior in project docs
- [x] 4.2 Add changelog entry or release note snippet describing the fix
