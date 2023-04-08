import fs from 'fs';
import path from 'path';

export function getProjectData(slug : string) {
  const filePath = path.join(process.cwd(), 'data', `${slug}.json`);
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
}