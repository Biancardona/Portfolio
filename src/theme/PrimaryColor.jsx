import useThemeContext from '../hooks/useThemeContext';

const PrimaryColor = ({ className }) => {
  const { themeHandler } = useThemeContext();

  return (
    <button className={className} onClick={() => themeHandler(className)}>
      {' '}
    </button>
  );
};

export default PrimaryColor;
