/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import React from 'react';

import { shallow } from 'enzyme';

import { EuiSteps } from '@elastic/eui';

import { MethodCrawler } from './method_crawler';
import { NewSearchIndexTemplate } from './new_search_index_template';

describe('MethodApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders API ingestion method tab', () => {
    const wrapper = shallow(<MethodCrawler />);
    const template = wrapper.find(NewSearchIndexTemplate);

    expect(template.prop('type')).toEqual('crawler');
    expect(template.find(EuiSteps)).toHaveLength(1);
  });
});
