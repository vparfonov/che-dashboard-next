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

import * as Workspaces from './Workspaces';
import * as DevfileRegistries from './DevfileRegistries';
import * as DevfileMetadataFilter from './DevfileFilters';
import * as InfrastructureNamespace from './InfrastructureNamespace';
import brandingReducer from './Branding';
import userReducer from './User';

// the top-level state object
export interface AppState {
  branding: any;
  devfileMetadataFilter: DevfileMetadataFilter.MetadataFilterState;
  devfileRegistries: DevfileRegistries.State;
  infrastructureNamespace: InfrastructureNamespace.State;
  user: any;
  workspaces: Workspaces.WorkspacesState;
}

export const reducers = {
  workspaces: Workspaces.reducer,
  devfileRegistries: DevfileRegistries.reducer,
  devfileMetadataFilter: DevfileMetadataFilter.reducer,
  branding: brandingReducer,
  user: userReducer,
  infrastructureNamespace: InfrastructureNamespace.reducer,
};

// this type can be used as a hint on action creators so that its 'dispatch' and 'getState' params are
// correctly typed to match your store.
export interface AppThunkAction<TAction> {
  (dispatch: (action: TAction) => void, getState: () => AppState): void;
}
