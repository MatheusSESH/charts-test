import React from 'react';
import { Row, Col } from "antd";

const PageHeader: React.FC = () => {
  return (
    <Row>
      <Col span={24}>
        <div className="page-title">
            <h1>Gráficos</h1>

            {/* filtrar por data */}
        </div>
      </Col>
    </Row>
  )
}

export default PageHeader;