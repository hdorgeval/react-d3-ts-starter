import { HelloD3 } from './diagrams/helloD3/HelloD3';
import * as React from 'react';

export interface AppProps {
  name: string;
}

// eslint-disable-next-line react/prop-types
export const App: React.FunctionComponent<AppProps> = ({ name }): React.ReactElement | null => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <HelloD3 data="yo!" width={100} height={100} />
    </div>
  );
};
