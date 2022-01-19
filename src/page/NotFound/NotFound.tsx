import React, { memo } from 'react';

const NotFound = (): JSX.Element => {
  return (
    <div>
      404
      <br />
      존재하지 않는 페이지입니다.
    </div>
  );
};

export default memo(NotFound);
