import { classNames } from './class-names';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'someClass';
    expect(classNames('someClass')).toBe(expected);
  });
  test('with additional class', () => {
    const expected = 'someClass additionalClass additionalClass2';
    expect(classNames('someClass', {}, ['additionalClass', 'additionalClass2'])).toBe(expected);
  });
  test('with mods', () => {
    const expected = 'someClass additionalClass additionalClass2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true },
      ['additionalClass', 'additionalClass2'],
    ))
      .toBe(expected);
  });
  test('with mods false', () => {
    const expected = 'someClass additionalClass additionalClass2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: true, selected: false },
      ['additionalClass', 'additionalClass2'],
    ))
      .toBe(expected);
  });
  test('with mods undefined', () => {
    const expected = 'someClass additionalClass additionalClass2 hovered';
    expect(classNames(
      'someClass',
      { hovered: true, scrollable: undefined },
      ['additionalClass', 'additionalClass2'],
    ))
      .toBe(expected);
  });
});
