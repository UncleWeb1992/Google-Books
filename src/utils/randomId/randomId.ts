export const randomId = () => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  ); // Дает рандомное значение букв и цифр(Идентификатор)
};
