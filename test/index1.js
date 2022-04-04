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
    expect(contents).toContain(`define(["test"], function (test) {
  test();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,`)
  })
})
