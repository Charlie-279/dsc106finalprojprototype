

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.e4c80f1a.js","_app/immutable/chunks/index.019f7634.js","_app/immutable/chunks/singletons.63fadca8.js"];
export const stylesheets = [];
export const fonts = [];
