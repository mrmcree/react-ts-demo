/*
 * @Author: dapeng
 * @Date: 2020-10-09 14:09:05
 * @LastEditors: dapeng
 * @LastEditTime: 2020-10-09 14:44:42
 */
/* eslint-disable */
/* case1 */
test("test commom matcher", () => {
  expect(2 + 2).toBe(4);
  expect(2 + 2).not.toBe(5);
});
/* case2 */
test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

// case3
test("object", () => {
  const data = { a: 1 };
  expect(data).toEqual({ a: 1 });
});
