/* eslint-disable react/prop-types */
import { downloadSvg } from './download-svg';
import { renderD3 } from './render-d3';
import React, { ReactElement, useEffect, useRef } from 'react';

export interface SankeyProps {
  data: string;
  width: number;
  height: number;
}

export const HelloD3: React.FunctionComponent<SankeyProps> = ({
  data,
  width,
  height,
}): ReactElement | null => {
  const d3Container = useRef(null);

  useEffect((): void => renderD3(d3Container, data), [d3Container, width, height]);

  const onDownloadSvg: () => void = (): void => downloadSvg(d3Container);

  return (
    <>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} ref={d3Container} />
      </div>
      <button onClick={onDownloadSvg}>download svg</button>
    </>
  );
};
