import React from "react";
import { Component, K8sApi, Navigation} from "@k8slens/extensions";

export function NamespaceMenuItem(props: Component.KubeObjectMenuProps<K8sApi.Namespace>) {
  const { object: namespace, toolbar } = props;
  if (!namespace) return null;

  const namespaceName = namespace.getName();

  const sendToTerminal = (command: string) => {
    Component.terminalStore.sendCommand(command, {
      enter: true,
      newTab: true,
    });
    Navigation.hideDetails();
  };

  const changeNamespace = () => {
    sendToTerminal(`kubectl config set-context --current --namespace=${namespaceName}`);
  };

  return (
    <Component.MenuItem onClick={changeNamespace}>
    <Component.Icon material="settings_applications" interactive={toolbar} title="Change current namespace"/>
    <span className="title">Switch to current</span>
    </Component.MenuItem>
  );
}
