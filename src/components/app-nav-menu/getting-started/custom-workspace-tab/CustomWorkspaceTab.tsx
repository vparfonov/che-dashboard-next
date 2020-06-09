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

import React from 'react';
import { connect } from 'react-redux';
import { load } from 'js-yaml';
import {
  Alert,
  AlertActionCloseButton,
  AlertVariant,
  PageSection,
  PageSectionVariants,
} from '@patternfly/react-core';
import { AppState } from '../../../../store';
import { container } from '../../../../inversify.config';
import { Debounce } from '../../../../services/debounce/Debounce';
import * as WorkspacesStore from '../../../../store/Workspaces';

// At runtime, Redux will merge together...
// type Props =
//   {
//     //workspaces: WorkspacesStore.WorkspacesState;
//   }// ... state we've requested from the Redux store
//   & WorkspacesStore.ActionCreators // ... plus action creators we've requested
//   & { history: any };

// type State = {
//   alertVisible: boolean;
//   temporary: boolean;
// };

export class CustomWorkspaceTab extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render(): React.ReactElement {
    return (
      <React.Fragment>
        <span>Infrastructure Namespace</span>
        <span>Workspace Name</span>
        <span>Temporary Storage</span>
        <span>Devfile selector</span>
        <span>Devfile editor</span>
      </React.Fragment>
    );
  }
}

export default connect(
)(CustomWorkspaceTab);
