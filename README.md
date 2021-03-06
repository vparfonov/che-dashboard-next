## About Eclipse Che Dashboard

This is the first step for implementing a new version of  Eclipse Che Dashboard which is based on  React 16 and Webpack 4.


Che Dashboard

==============

## Requirements

- Node.js `v10.x.x`

## Quick start

```sh
docker build . -f apache.Dockerfile -t quay.io/che-incubator/che-dashboard-next:next
```

## Running

Install all modules listed as dependencies in package.json
```sh
$ yarn
```

In order to run the project, to start dev-server is used

```sh
$ yarn start
```

It will launch the server and then the project can be tested on http://localhost:3030


For the easiest development, this dashboard will try to connect to [che.openshift.io](https://che.openshift.io) with own proxy by default.

So, it is better to login previously (I am about [che.openshift.io](https://che.openshift.io)).


With initial implementation, this dashboard can show a simple list of created workspaces.

An example of how to run with custom port and  server

```sh
$ yarn start --env.server=https://che-che.192.168.99.100.nip.io  --port=3333
```
It is better to have React and Redux Developer Tools for debugging


### License
Che is open sourced under the Eclipse Public License 2.0.
