export interface TestItem {
  objectId: string;
  name: string;
  active: boolean;
  times: number;
}

export class TestItemUtil {
  static createTestItems(count: number): TestItem[] {
    const result = [];
    for (let i = 1; i <= count; i++) {
      result.push(this.createTestItem(i));
    }
    return result;
  }
  static createTestItem(index: number): TestItem {
    return { objectId: `${index}`, name: `Test ${index}`, times: index, active: index % 2 === 0 };
  }
}