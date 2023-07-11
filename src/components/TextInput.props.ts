export default interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  label: string;
  icon?: string;
  preset?: string | null;
  disabled?: boolean;
  message?: string | null;
  state?: 'success' | 'error' | null;
  callback?: Function;
  debounce?: boolean;
}
