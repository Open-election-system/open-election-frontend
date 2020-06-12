export const dateFromTimestamp = (timestamp) => {
  const a = new Date(timestamp * 1000);
  const months = ['Січ', 'Лют', 'Бер', 'Квіт', 'Трав', 'Черв', 'Лип', 'Серп', 'Вер', 'Жовт', 'Лист', 'Груд'];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  return date + ' ' + month + ' ' + year;
};