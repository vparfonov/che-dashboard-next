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
import { RenderResult, render, screen, fireEvent } from '@testing-library/react';
import { TemporaryStorageFormGroup } from '../TemporaryStorage';

describe('Temporary Storage Switch', () => {

  const mockOnChange = jest.fn();

  function renderSwitch(isTemporary: boolean): RenderResult {
    return render(
      <TemporaryStorageFormGroup
        isTemporary={isTemporary}
        onChange={mockOnChange}
      />
    );
  }

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fire onChange event', () => {
    renderSwitch(true);

    const switchCheckbox = screen.getByRole('checkbox');
    expect(switchCheckbox).toBeTruthy();

    fireEvent.click(switchCheckbox);
    expect(mockOnChange).toHaveBeenCalledWith(false);
  });

});
