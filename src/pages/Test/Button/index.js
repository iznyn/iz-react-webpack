/**
 * pages/Homepage/index.js
 */

import React from 'react';
import Button from 'components/Button';

const TestButton = () => (
  <div className="root">
    <div style={{ padding: 40 }}>
      <div className="test__button">
        <h1 style={{ marginBottom: 30 }}>Test Button</h1>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 12,
            marginTop: 30,
          }}
        >
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="xxs"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="xs"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="sm"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="md"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="lg"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="xl"
            label="View More Posts"
          />
          <Button
            path="#"
            isLinkOutside
            variant="primary"
            size="xxl"
            label="View More Posts"
          />
        </div>
      </div>
    </div>
  </div>
);

export default TestButton;
