import Web3ContextProvider from '@/context/ethers-provider';
import { ThemeProvider } from '@/context/theme-provider';

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <Web3ContextProvider>{children}</Web3ContextProvider>
    </ThemeProvider>
  );
};

export default Providers;
