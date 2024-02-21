//CUSTOM HOOK FOR THE THEME CONTEXT

import { useContext } from 'react';
import ThemeContext from '../context/theme-context';
//UseTheme is going to make available tha values from the provider
const useTheme = () => {
  return useContext(ThemeContext);
};
export default useTheme;
