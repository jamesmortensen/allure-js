import { Category, TestResult, TestResultContainer } from "../model";

export interface AllureWriter {
  writeResult(result: TestResult): void;

  writeGroup(result: TestResultContainer): void;

  writeAttachment(name: string, content: Buffer | string): void;

  writeEnvironmentInfo(info: Record<string, string | undefined>): void;

  writeCategoriesDefinitions(categories: Category[]): void;
}
