import { fuzzySearch } from './fuzzySearch';

export type DataType = {
  id: number;
  title: string;
  document: boolean;
};

export const data: DataType[] = [
  { id: 0, title: 'javascript', document: true },
  { id: 1, title: 'rust', document: true },
  { id: 2, title: 'java', document: false },
  { id: 3, title: 'typescript', document: false },
  { id: 4, title: 'zustand', document: true },
  { id: 5, title: 'recoil', document: true },
  { id: 6, title: 'class', document: false },
  { id: 7, title: 'server', document: true },
  { id: 8, title: 'web', document: true },
  { id: 9, title: 'backend', document: true },
  { id: 10, title: 'front', document: false },
  { id: 11, title: '컴퓨터', document: true },
  { id: 12, title: '커피어반', document: false },
  { id: 13, title: '낙성대', document: true },
  { id: 14, title: '랭스터디카페', document: true },
  { id: 15, title: '고양이', document: false },
  { id: 16, title: '강아지', document: false },
  { id: 17, title: 'cat', document: false },
  { id: 18, title: '568', document: false },
  { id: 19, title: '3500', document: true },
  { id: 20, title: '4500', document: true },
];

export const getDataById = (id: number) => data.filter(d => d.id === id)[0];

export const getSearchData = (qs: string) =>
  data.filter(d => fuzzySearch(qs, d.title));
