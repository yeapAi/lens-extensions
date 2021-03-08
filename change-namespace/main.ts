import { LensMainExtension } from "@k8slens/extensions";

export default class ChangeNamespaceExtensionMain extends LensMainExtension {
  onActivate() {
    console.log('ChangeNamespace extension activated');
  }

  onDeactivate() {
    console.log('ChangeNamespace extension de-activated');
  }
}
