# Lens "change-namespace" Extension

Extension for changing current namespace of your kubeconfig form the namespace page.

## Install

```sh
mkdir -p ~/.k8slens/extensions
git clone https://github.com/yeapAi/lens-extensions.git
ln -s $(pwd)/lens-extensions ~/.k8slens/extensions
cd change-namespace
```

## Build

To build an extension you can use `make` or run the `npm` commands manually inside the directory:

```sh
cd change-namespace
make build
```

OR

```sh
cd change-namespace
npm install
npm run build
```

If you want to watch for any source code changes and automatically rebuild the extension you can use:

```sh
cd change-namespace
npm run dev
```

## Test

Open Lens application and navigate to the page namespace for a cluster. You should see "Swithc to current" in the contextuel menu.
You must restart Lens application with each change.
