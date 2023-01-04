export type Color =
  | 'gray04'
  | 'gray03'
  | 'gray02'
  | 'gray01'
  | 'bamdolblue'
  | 'white';

const color: { [key in Color]: string } = {
  gray04: '#1E2E3D',
  gray03: '#545F68',
  gray02: '#919AA3',
  gray01: '#E0E5EB',
  bamdolblue: '#47A7FF',
  white: '#FFFFFF',
};

export default { color };
