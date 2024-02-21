import useThemeContext from '../hooks/useThemeContext';

const BackgroundColor = ({ className }) => {
  const { themeHandler } = useThemeContext();
  return (
    <button className={className} onClick={() => themeHandler(className)}>
      {' '}
    </button>
  );
};

export default BackgroundColor;
