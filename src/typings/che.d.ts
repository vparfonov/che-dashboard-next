/*
 * Copyright (c) 2018-2020 Red Hat, Inc.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Red Hat, Inc. - initial API and implementation
 */

declare namespace che {

  export interface Workspace {
    id?: string;
    projects?: any;
    links?: {
      ide?: string;
      [rel: string]: string | undefined;
    };
    temporary?: boolean;
    status?: string;
    namespace?: string;
    attributes?: WorkspaceAttributes;
    devfile: WorkspaceDevfile;
    runtime?: WorkspaceRuntime;
    isLocked?: boolean;
    usedResources?: string;
  }

  export interface WorkspaceSettings {
    cheWorkspaceDevfileRegistryUrl?: string;
    cheWorkspacePluginRegistryUrl: string;
    'che.workspace.persist_volumes.default': 'false' | 'true';
    supportedRecipeTypes: string;
  }

  export interface WorkspaceAttributes {
    created: number;
    updated?: number;
    stackId?: string;
    stackName?: string;
    errorMessage?: string;
    infrastructureNamespace: string;

    [propName: string]: string | number | undefined;
  }

  export interface WorkspaceConfigAttributes {
    persistVolumes?: 'false';
    editor?: string;
    plugins?: string;
  }

  export interface WorkspaceDevfile {
    apiVersion: string;
    components: Array<any>;
    projects?: Array<any>;
    commands?: Array<any>;
    attributes?: che.WorkspaceConfigAttributes;
    metadata: {
      name?: string;
      generateName?: string;
    };
  }

  export interface WorkspaceRuntime {
    activeEnv: string;
    links: any[];
    machines: {
      [machineName: string]: WorkspaceRuntimeMachine;
    };
    owner: string;
    warnings: WorkspaceWarning[];
    machineToken?: string;
  }

  export interface WorkspaceWarning {
    code?: number;
    message: string;
  }

  export interface WorkspaceRuntimeMachine {
    attributes: { [propName: string]: string };
    servers: { [serverName: string]: WorkspaceRuntimeMachineServer };
  }

  export interface WorkspaceRuntimeMachineServer {
    status: string;
    port: string;
    url: string;
    ref: string;
    protocol: string;
    path: string;
  }

  export interface ProjectSource {
    location: string;
    parameters?: {
      [paramName: string]: any;
    };
    type?: string;
  }

  export interface ProfileAttributes {
    firstName?: string;
    lastName?: string;

    [propName: string]: string | number | undefined;
  }

  export interface Profile {
    attributes?: ProfileAttributes;
    email: string;
    links?: Array<any>;
    userId: string;
  }

  export interface User {
    links: any[];
    attributes?: {
      firstName?: string;
      lastName?: string;
      [propName: string]: string | number | undefined;
    };
    id: string;
    name: string;
    email: string;
    family_name?: string;
    given_name?: string;
    preferred_username?: string;
    sub?: string;
  }

  export interface DevfileMetaData {
    displayName: string;
    description?: string;
    globalMemoryLimit: string;
    icon: string;
    links: any;
    tags: Array<string>;
  }

  export interface KubernetesNamespace {
    name: string;
    attributes: {
      default?: 'true' | 'false';
      displayName?: string;
      phase: string;
    };
  }
}

declare module 'che' {
  export = che;
}
