import React, {useState} from 'react';
import {AppContextType} from '../types';

export const AppContext = React.createContext({} as AppContextType);

export const AppProvider = ({children}: React.PropsWithChildren<{}>) => {
  const [channel, setChannel] = useState<AppContextType['channel']>();
  const [thread, setThread] = useState<AppContextType['thread']>();

  return (
    <AppContext.Provider value={{channel, setChannel, thread, setThread}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => React.useContext<AppContextType>(AppContext);
