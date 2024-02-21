const CategoryButton = ({ category, className, onChange }) => {
  return (
    <button className={className} onClick={() => onChange(category)}>
      {category}{' '}
    </button>
  );
};

export default CategoryButton;
