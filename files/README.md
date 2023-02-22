## fastlane documentation

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## Android

### android qa

```sh
[bundle exec] fastlane android qa
```

Submit a new QA build to App Distribution

### android staging

```sh
[bundle exec] fastlane android staging
```

Submit a new Staging build to App Distribution

---

## iOS

### ios qa

```sh
[bundle exec] fastlane ios qa
```

Push a new QA build to App Distribution

### ios staging

```sh
[bundle exec] fastlane ios staging
```

Push a new Staing build to App Distribution

### ios client_staging

```sh
[bundle exec] fastlane ios client_staging
```

Push a new client_staging build to TestFlight

### ios prod

```sh
[bundle exec] fastlane ios prod
```

Push a new prod build to TestFlight

---

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
