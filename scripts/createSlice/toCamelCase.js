function kebabToCC(str) {
  return str[0].toLowerCase() + str.substr(1).replace(/-./g, (match) => match[1].toUpperCase());
}

module.exports = (str) => kebabToCC(str);
