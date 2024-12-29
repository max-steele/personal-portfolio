export const globalMouse = { x: -1, y: -1 };

export function updateMousePosition(event: MouseEvent) {
  globalMouse.x = event.clientX;
  globalMouse.y = event.clientY;
};
