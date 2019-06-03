function helloWorld () {
  return 'Hello World'
}
describe('hello world', () => {
  it('should render correct result', () => {
    expect(helloWorld()).toEqual('Hello World')
  })
})
