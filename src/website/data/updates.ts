export type UpdateCategory =
  | 'new-features'
  | 'hymn-corrections'
  | 'improvements'
  | 'announcements';

export interface ProjectUpdateItem {
  id: string;
  date: string;
  category: UpdateCategory;
  title: string;
  summary: string;
}

export const UPDATE_CATEGORIES: ReadonlyArray<{
  id: UpdateCategory;
  label: string;
  description: string;
}> = [
  {
    id: 'new-features',
    label: 'New Features',
    description: 'New worship tools, reading modes, and language additions.',
  },
  {
    id: 'hymn-corrections',
    label: 'Hymn Corrections',
    description: 'Verified spelling, numbering, and stanza text updates.',
  },
  {
    id: 'improvements',
    label: 'Improvements',
    description: 'Performance, offline reliability, and accessibility refinements.',
  },
  {
    id: 'announcements',
    label: 'Important Announcements',
    description: 'Project news and notices for churches and worshipers.',
  },
];

/**
 * Maintainable list of official Kristu mu Nyimbo updates and announcements.
 * Add verified entries here when publishing new releases or announcements.
 * Example entry:
 * {
 *   id: '2026-01-example',
 *   date: '2026-01-15',
 *   category: 'announcements',
 *   title: 'Announcement title',
 *   summary: 'Concise description of the update.',
 * }
 */
export const PROJECT_UPDATES: ProjectUpdateItem[] = [];
