function fetchScript(name) {
	const url = `/base/${name}.js`
	return fetch(url).then(response => response.text())
}

describe('the preprocessor', () => {
  it('leaves AMD input intact', async () => {
		const contents = await fetchScript('amd')
		expect(contents).toBe(`define([\'test\'], function (test) { test() })
`)
	})

  it('transforms ESM input', async () => {
		const contents = await fetchScript('esm')
		expect(contents).toBe(`define(["test"], function (test) {
  test();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9mZXJkaXByL1NvdXJjZXMvZ2l0aHViL2thcm1hLXJlcXVpcmVqcy1lc20tcHJlcHJvY2Vzc29yL3Rlc3QvZXNtLmpzIl0sIm5hbWVzIjpbInRlc3QiXSwibWFwcGluZ3MiOiJRQUFpQixtQkFBVkE7RUFDUEEiLCJmaWxlIjoiL1VzZXJzL2ZlcmRpcHIvU291cmNlcy9naXRodWIva2FybWEtcmVxdWlyZWpzLWVzbS1wcmVwcm9jZXNzb3IvdGVzdC9lc20uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGVzdCBmcm9tICd0ZXN0J1xudGVzdCgpXG4iXX0=`)
	})
})
