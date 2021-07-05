function getRandomInteger(min, max) {
  if (min >= 0 && max > 0 && max > min) {
    min = Math.ceil(min);
    max = Math.floor(max);

    if (min === max) {
      return min;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return 'Проверьте диапазон! Диапазон может быть только положительный, включая ноль, и значение «до» больше, чем значение «от»';
}

function getRandomFloat(min, max, numberSimbols) {
  if (min >= 0 && max > 0 && max > min) {

    if (min === max) {
      return min.toFixed(numberSimbols);
    }

    return (Math.random() * (max - min) + min).toFixed(numberSimbols);
  }

  return 'Проверьте диапазон! Диапазон может быть только положительный, включая ноль, и значение «до» больше, чем значение «от»';
}

getRandomInteger(1, 5);
getRandomFloat(1.1, 1.2, 3);
