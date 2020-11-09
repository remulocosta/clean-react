export class UnexpectedError extends Error {
  constructor () {
    super('Algo de errado ocorreu. Tente novamente em breve.')
    this.name = 'UnexpectedError'
  }
}
