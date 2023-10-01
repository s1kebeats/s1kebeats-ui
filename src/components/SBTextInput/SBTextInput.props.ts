export default interface Props {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  name: string;
  label: string;
  icon?: string | null;
  preset?: string | null;
  disabled?: boolean;
  state?: 'success' | 'error' | null;
  callback?: Function;
  debounce?: boolean;
  type?: 'text' | 'email';
  autocomplete?: string;
}
