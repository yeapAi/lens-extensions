import React from "react"
import { LensRendererExtension, K8sApi, Component } from "@k8slens/extensions";
import { NamespaceMenuItem } from "./src/change-namespace-menu-item"

export default class ExampleExtension extends LensRendererExtension {
  kubeObjectMenuItems = [
    {
      kind: "Namespace",
      apiVersions: ["v1"],
      components: {
        MenuItem: (props: Component.KubeObjectMenuProps<K8sApi.Namespace>) => <NamespaceMenuItem {...props} />
      }
    }
  ];
}
