// Gatsby's internal ___loader global (used by gatsby-link) isn't present
// under Jest's jsdom environment; stub it so components that touch it don't
// throw during tests.
global.___loader = {
  enqueue: jest.fn(),
  hovering: jest.fn(),
};
