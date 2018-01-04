class DateConverter {
  constructor() {
    throw new Error('Não deve ser instanciada');
  }

  static toText(data) {
    return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

  static toData(text) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(text))
      throw new Error('Deve estar no formato aaaa-mm-dd');

    return new Date(
      ...text
        .split('-')
        .map((item, index) => item - index % 2)
    )
  }
}