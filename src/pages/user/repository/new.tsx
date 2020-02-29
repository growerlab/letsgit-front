import React from 'react';
import { Row, Col } from 'antd';
import NewRepositoryFrom from '../../../components/repository/New';

export default function(props: React.PropsWithChildren<any>) {
  return (
    <div>
      <Row>
        <Col md={12} xs={24}>
          <NewRepositoryFrom />
        </Col>
      </Row>
    </div>
  );
}
