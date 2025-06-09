# Glosary

The following are relevant terms that will help you get started with the RGS Application Collection.

### Application

An application is a product that users can install into their environments. This is the main component of the collection.

An application can be a database, an API gateway, a load balancer, a runtime, etc. Most applications are cloud-native, but there are also containerized applications for specific purposes. For example, Argo CD (cloud-native application) or Git (containerized application).

Depending on the application type, it will be installed either as a `Helm Chart` or as a `Single Container`.

### Artifact

An artifact is the result of packaging the binaries of a component into a distributable unit.

There are 2 main artifact packaging formats:

- **Container Image:** bundles the component binaries for a given version and flavor, on top of a base OS and architecture
- **Helm Chart:** contains pointers to the set of container images needed to run a specific application version and flavor

Artifacts are continuously built, and updated through revisions.

### Branch

A branch is a set of versions where backwards compatibility is expected. Each component follows its own branching strategy, as defined in the upstream project. It is assumed that the upstream project follows semantic versioning.

### Component

A component is an identifiable part of an application that provides a clear interface with other parts. It is common in modern software applications to have several components, such as a relational database or a secret manager. In Application Collection, these applications are described using Helm. Depending on the complexity of the application, there may be required and/or optional components.