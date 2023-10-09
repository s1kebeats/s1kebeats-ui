export default interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  value: string;
  label?: string;
  icon?: string | null;
  disabled?: boolean;
  state?: 'success' | 'error' | null;
  callback?: Function;
  debounce?: boolean;
  type?: 'text' | 'email' | 'password';
  autocomplete?: string;
}
