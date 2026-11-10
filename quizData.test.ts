import { describe, expect, it } from 'vitest';
import { categories, getQuestions, questionBank } from './quizData';

describe('Quizora question bank', () => {
  it('has all six planned starter categories', () => {
    expect(categories.map(c => c.id)).toEqual(['cricket', 'gcse', 'intermediate', 'btech', 'english', 'general']);
  });
  it('provides at least one valid question for every category', () => {
    for (const category of categories) {
      expect(questionBank[category.id]?.length).toBeGreaterThan(0);
      for (const q of questionBank[category.id]) {
        expect(q.options.length).toBeGreaterThanOrEqual(2);
        expect(q.answer).toBeGreaterThanOrEqual(0);
        expect(q.answer).toBeLessThan(q.options.length);
        expect(q.explanation.length).toBeGreaterThan(0);
      }
    }
  });
  it('returns no more questions than requested or available', () => {
    expect(getQuestions('cricket', 3)).toHaveLength(3);
    expect(getQuestions('cricket', 100)).toHaveLength(questionBank.cricket.length);
  });
  it('falls back to general knowledge for an unknown category', () => {
    expect(getQuestions('not-a-category', 2)).toHaveLength(2);
  });
});
